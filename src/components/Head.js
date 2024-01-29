import React, { useEffect, useState } from "react";
import { toggleMenu } from "./utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API } from "./utils/constants";
import { cachedResults } from "./utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions,setSuggestions] = useState([]);
  const [showSuggestions,setShowSuggestions] = useState(false);
  
  const searchCache = useSelector(store => store.search);

  useEffect(() => {
   const timer = setTimeout(()=>{
  
      if(searchCache[searchQuery]){
         setSuggestions(searchCache[searchQuery]);
      }
      else{
        getSearchSuggestions()
        
      }
  
  },200);



    return ()=>{
      clearTimeout(timer);
    }


  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    // update my cache
    dispatch(cachedResults({
      [searchQuery]:json[1],
    }))

  };

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-10 cursor-pointer"
          alt="menu"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
        />
        <img
          className="h-10 mx-2"
          alt="youtubu"
          src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
        />
      </div>

      <div className="col-span-10 px-10">
        <input
          type="text"
          className="w-1/2 border border-gray-400 px-5 p-2 rounded-l-full"
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
          onFocus={()=>setShowSuggestions(true)}
          onBlur={()=>setShowSuggestions(false)}
        />
        <button className="border border-gray-400 py-2 px-5 rounded-r-full bg-gray-100">
          🔍
        </button>
      
      {showSuggestions && <div className="absolute bg-white py-2 px-5 w-[43rem] rounded-lg shadow-lg border border-gray-100">
        <ul>
          {
            suggestions.map(s=><li key={s} className="px-3 py-2 shadow-sm hover:bg-gray-100">🔍 {s}</li>)
         }
        </ul>
      </div>}


      </div>




      <div className="col-span-1">
        <img
          className="h-10"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Head;

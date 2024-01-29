import React from "react";
import { toggleMenu } from "./utils/appSlice";
import { useDispatch } from "react-redux";

const Head = () => {

  const dispatch = useDispatch();

  const toggleMenuHandler = ()=>{
    dispatch(toggleMenu());

  }



  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={()=>toggleMenuHandler()}
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
        <input type="text" className="w-1/2 border border-gray-400 p-2 rounded-l-full" />
        <button className="border border-gray-400 py-2 px-5 rounded-r-full bg-gray-100">🔍</button>
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

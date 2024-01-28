import React from "react";

const Head = () => {
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-10"
          alt="menu"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
        />
        <img
          className="h-10 mx-2"
          alt="youtubu"
          src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
        />
      </div>

      <div className="col-span-10">
        <input type="text" className="w-1/2 text-center px-10"/>
        <button>Search</button>
      </div>

      <div className="col-span-1">
        <img className="h-10" alt="user" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"/>
      </div>


    </div>
  );
};

export default Head;

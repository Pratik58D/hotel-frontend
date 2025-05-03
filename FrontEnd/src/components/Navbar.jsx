import React from "react";

const Navbar = () => {
  return (
    <nav className="flex w-full  justify-between items-center  ">
      {/* navbar logo */}
      <div className="pl-32 py-2 hidden sm:flex">
        <img src="Layer_1.png" alt="logo" className="h-20 " />
      </div>
       {/* Navigation Links */}
      <div className="pr-20">
        <ul className="flex  items-center  text-[16px] font-medium ">
          <li className="px-4 py-12 hover:bg-[#A2A09A45] ">HOME</li>
          <li className="px-4 py-12 hover:bg-[#A2A09A45] ">ABOUT US</li>
          <li className="px-4 py-12 hover:bg-[#A2A09A45] ">OUR HOTELS</li>
          <li className="px-4 py-12 hover:bg-[#A2A09A45] ">PROJECTS</li>
          <li className="px-4 py-12 hover:bg-[#A2A09A45] ">CONTACT US</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;



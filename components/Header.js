import React from "react";
import Image from "next/image";
import MyLogo from "../public/koji.png";
import { HiSearch, HiUser } from "react-icons/hi";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md px-5 py-3">
      {/*left side */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src={MyLogo}
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/*Middle side */}
      <div className="flex items-center border-2 rounded-full p-2 h-10 self-center">
        <input
          className=" flex-grow pl-5 bg-transparent outline-none"
          type="text"
          placeholder="start your search"
        />
        <HiSearch className=" bg-red-500 text-white rounded-full h-8 w-8 p-2 cursor-pointer" />
      </div>
      {/*Right side */}
      <div className=" flex items-center p-5 place-content-end space-x-4">
        <p> Become a host</p>
        <HiUser className=" bg-blue-500 text-white rounded-full h-8 w-8 p-2 cursor-pointer" />
      </div>
    </header>
  );
}

export default Header;

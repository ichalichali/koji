import React, { useState } from "react";
import Image from "next/image";
import MyLogo from "../public/koji.png";
import { HiSearch, HiUser, HiOutlineChevronDown } from "react-icons/hi";
import { useRouter } from "next/router";

function Header() {
  const [searchInput, setSearchInput] = useState("");
  const router = useRouter();

  console.log(searchInput);
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md px-5 py-3">
      {/*left side */}
      <div className="relative flex items-center h-20 cursor-pointer my-auto">
        <Image
          src={MyLogo}
          fill
          objectFit="contain"
          objectPosition="left"
          alt="logo"
        />
        <p className=" px-20 text-2xl">WE FIND ROOM FOR YOU</p>
      </div>
      {/*Middle side */}
      <div className="flex items-center border-2 rounded-full p-2 h-10 self-center">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className=" flex-grow pl-5 bg-transparent outline-none"
          type="text"
          placeholder="start your search"
        />
        <HiSearch className=" bg-red-500 text-white rounded-full h-8 w-8 p-2 cursor-pointer" />
      </div>
      {/*Right side */}
      <div className=" flex items-center p-5 place-content-end space-x-10">
        <p className=" cursor-pointer"> Become a host</p>
        <div className="flex items-center border-2 p-2 space-x-6 rounded-full cursor-pointer">
          <HiOutlineChevronDown />
          <HiUser className=" bg-blue-500 text-white rounded-full h-8 w-8 p-2" />
        </div>
      </div>
    </header>
  );
}

export default Header;

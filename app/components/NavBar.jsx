import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <>
      <div className=" flex justify-around items-center bg-gray-300">
        <Link href="/">
          <span className=" cursor-pointer text-lg font-bold text-gray-900">
            My Blog
          </span>
        </Link>
        <input
          className=" bg-gray-400 px-2 py-3 text-center text-black text-xl w-120 rounded-3xl outline-none  border-gray-600 placeholder:text-black hover:bg-gray-500 duration-150"
          type="text"
          placeholder="Search On My Blog "
        />
        <span className=" cursor-pointer text-lg font-bold text-gray-900">
          Logo
        </span>
      </div>
    </>
  );
};

export default NavBar;

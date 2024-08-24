import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-sky-100">
      <div className="logo">
        <Link href="/">
          <Image src={logo} alt="not found" width={100} />
        </Link>
      </div>

      <div className="menus flex  items-center space-x-5 mr-4">
        {/* {_id ? (
          <h1>Hello ,{fName}</h1>
        ) : ( */}
        <>
          <Link href="/profile">Profile</Link>
          <Link href="/login">Login </Link>
          <Link href="/register">Register </Link>
        </>
        {/* )} */}
      </div>
    </div>
  );
};

export default Navbar;

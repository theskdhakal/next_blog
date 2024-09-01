"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../assets/logo.png";
import { useAppSelector } from "@/hooks";

const Navbar = () => {
  const { user } = useAppSelector((state) => state.userInfo);
  const { id, fName, lName } = user;

  return (
    <div className="bg-sky-100 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="logo">
          <Link href="/">
            <Image src={logo} alt="Logo" width={100} height={40} />
          </Link>
        </div>

        <div className="flex flex-col items-end space-y-2">
          {id && (
            <p className="text-lg font-semibold">
              Welcome, {fName} {lName}!
            </p>
          )}

          <div className="menus flex space-x-5">
            {id ? (
              <Link href="/login" className="text-blue-500 hover:underline">
                Logout
              </Link>
            ) : (
              <>
                <Link href="/login" className="text-blue-500 hover:underline">
                  Login
                </Link>
                <Link
                  href="/register"
                  className="text-blue-500 hover:underline"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

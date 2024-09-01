"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../assets/logo.png";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setUser } from "@/utils/userSlice";
import { persistor } from "@/store";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { user } = useAppSelector((state) => state.userInfo);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { id, fName, lName } = user;

  const handleOnLogout = () => {
    //remove from persist
    persistor.purge().then(() => {
      console.log("logged out");
    });

    //remove user from redux
    dispatch(setUser({}));
    router.push("/login");
  };

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
              <button
                onClick={handleOnLogout}
                className="text-blue-500 hover:underline"
              >
                Logout
              </button>
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

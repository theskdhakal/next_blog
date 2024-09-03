"use client";
import React from "react";
import BlogForm from "../component/BlogForm";
import DisplaySection from "../component/DisplaySection";
import { useAppSelector } from "@/hooks";

const Home = () => {
  const { user } = useAppSelector((state) => state.userInfo);

  return (
    <>
      {user?.id && <BlogForm />}

      <DisplaySection />
    </>
  );
};

export default Home;

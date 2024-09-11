"use client";
import React, { useEffect } from "react";
import BlogForm from "../component/BlogForm";
import DisplaySection from "../component/DisplaySection";
import { useAppSelector } from "@/hooks";
import { useDispatch } from "react-redux";
import { setPosts } from "@/utils/postSlice";

const Home = () => {
  const { user } = useAppSelector((state) => state.userInfo);
  const { posts } = useAppSelector((state) => state.postInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const getPostsResponse = await fetch("/api/post", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (getPostsResponse.ok) {
          const allPosts = await getPostsResponse.json();

          dispatch(setPosts(allPosts)); // Update the state with the fetched posts
        } else {
          console.error("Failed to fetch posts");
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, [dispatch]);

  return (
    <>
      {user?.id && <BlogForm />}

      <DisplaySection contents={posts} />
    </>
  );
};

export default Home;

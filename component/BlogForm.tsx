"use client";
import { useAppSelector } from "@/hooks";
import React, { ChangeEvent, FormEvent, useState } from "react";

interface contentData {
  title: string;
  post: string;
  author: string;
  authorId: string;
}

const initialFormState: contentData = {
  title: "",
  post: "",
  author: "",
  authorId: "",
};

const BlogForm = () => {
  const { user } = useAppSelector((state) => state.userInfo);
  const { id, fName, lName } = user;

  const [form, setForm] = useState<contentData>({ ...initialFormState });

  const handleOnChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      title: form.title,
      post: form.post,
      author: `${fName} ${lName}`,
      authorId: `${id}`,
    };
  };

  return (
    <div className=" px-5 ">
      <form onSubmit={handleOnSubmit}>
        <div className="flex flex-col space-y-2">
          <input
            name="title"
            placeholder="Title of blog"
            className="border border-gray-500 rounded px-3 py-2"
            onChange={handleOnChange}
            value={form.title}
          />
          <textarea
            name="post"
            required={true}
            className="border border-gray-500 rounded px-3 py-2 h-32"
            placeholder="Write your blog here"
            onChange={handleOnChange}
            value={form.post}
          ></textarea>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            type="submit"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogForm;

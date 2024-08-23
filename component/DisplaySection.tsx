"use client";
import { format } from "date-fns";
import React, { useState } from "react";

const DisplaySection = () => {
  const [expandedContentIds, setExpandedContentIds] = useState<string[]>([]);

  const contents = [
    {
      _id: "1",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      createdAt: "2024-08-01T14:30:00Z",
      post: "A novel set in the Roaring Twenties, exploring themes of wealth and excess.",
    },
    {
      _id: "2",
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      createdAt: "2024-08-02T09:15:00Z",
      post: "A story about racial injustice in the Deep South, told through the eyes of a young girl.",
    },
    {
      _id: "3",
      title: "1984",
      author: "George Orwell",
      createdAt: "2024-08-03T16:45:00Z",
      post: "A dystopian novel exploring totalitarianism, surveillance, and individuality.",
    },
    {
      _id: "4",
      title: "Pride and Prejudice",
      author: "Jane Austen",
      createdAt: "2024-08-04T11:00:00Z",
      post: "A classic novel about love and social standing in early 19th-century England.",
    },
    {
      _id: "5",
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      createdAt: "2024-08-05T18:30:00Z",
      post: "A novel centered on the struggles of teenage angst and alienation.",
    },
  ];

  return (
    <div>
      {" "}
      <div className="contents">
        <h1 className="text-center font-bold">Read All Blogs</h1>
        {contents.length === 0 ? (
          <div style={{ height: "70vh" }}>
            <h1 className="pt-5 text-red-600 text-center">No blogs found!!</h1>
          </div>
        ) : (
          contents?.map((content) => (
            <div
              key={content._id}
              className="border shadow-lg rounded p-4 my-4 relative"
            >
              <p className="text-sm text-gray-500">
                {format(content.createdAt, "MM/dd/yyyy")}
              </p>
              <p className="text-gray-600">By: {content.author}</p>
              <h2 className="text-lg font-bold text-center underline my-2 text-blue-500">
                {content.title}
              </h2>
              <p>
                {expandedContentIds.includes(content._id)
                  ? content.post
                  : `${content.post.split("").slice(0, 300).join("")}...`}
                <button
                  className="text-blue-500 underline ml-1"
                  //   onClick={() => toggleExpand(content._id)}
                >
                  {expandedContentIds.includes(content._id)
                    ? "See less"
                    : "See more"}
                </button>
              </p>

              <div className="absolute top-0 right-1 ">
                {/* <FaDeleteLeft
                  className="text-red-800 cursor-pointer"
                  onClick={() => {
                    handleOnDelete(content._id);
                  }}
                /> */}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DisplaySection;

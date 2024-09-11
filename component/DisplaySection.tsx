"use client";
import { format } from "date-fns";
import React, { useState } from "react";

const DisplaySection = ({ contents }) => {
  const [expandedContentIds, setExpandedContentIds] = useState<string[]>([]);

  console.log("content is", contents);

  return (
    <div>
      {" "}
      <div className="contents px-5">
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

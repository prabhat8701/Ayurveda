"use client";
import { useState } from "react";

const Rating = ({ heading, subheading }) => {
  const [sRating, setSRating] = useState(0);

  function handleClick(rating) {
    setSRating(rating);
  }
  return (
    <div className="py-5 border-t-0 border-l-0 border-r-0 border-b border-dashed border-gray-300">
      <h2 className="text-2xl  ">{heading}</h2>
      <p className="text-sm  font-sans text-[#babdc0] ">{subheading}</p>
      <div className="text-6xl h-[100px]  text-[#dddfe1] flex items-center">
        {[1, 2, 3, 4, 5].map((i) => (
          <span
            key={i}
            onClick={() => handleClick(i)}
            className=" transition-colors  duration-150   hover:text-7xl hover:text-[#FDCC0D] cursor-pointer"
            style={{ color: i <= sRating ? "#FDCC0D" : "" }}
          >
            &#9733;
          </span>
        ))}
      </div>
    </div>
  );
};

export default Rating;

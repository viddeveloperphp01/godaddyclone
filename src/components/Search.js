import React, { useState } from "react";

const Search = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex items-center justify-between border rounded-lg shadow-md px-2 py-2 w-[90%] mx-auto bg-gray-100 relative mt-6">
      <div className="flex items-center w-[85%] bg-white px-3  rounded-md shadow-inner">
        {!isFocused && (
          <span className="text-gray-500 mr-3 transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m2.6-5.65a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
              />
            </svg>
          </span>
        )}
        <input
          type="text"
          placeholder="Type the domain you want"
          className={`w-full bg-transparent outline-none text-[#767676] text-2xl font-bold transition-all duration-300 ${isFocused ? "pl-0" : "pl-3"}`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <button className="bg-teal-700 text-white px-2  w-[200px] rounded-md shadow m-2 h-[64px] hover:bg-teal-700 transition-all">
          Search Domains
        </button>
      </div>
      <div className="flex items-center text-black-400">
        <img
          src="https://img1.wsimg.com/cdnassets/m/5a9b2a6a89575fb5/original/img_icon_bug_tld-pro.svg"
          alt=".pro"
          className="h-6 w-20 "
        />
        <div>
          <p className="text-sm font-bold">₹ 433.91*/1st yr.</p>
          <p className="text-xs ">.pro says you’re the best.</p>
        </div>
      </div>
    </div>
  );
};

export default Search;

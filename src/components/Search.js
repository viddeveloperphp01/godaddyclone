import React, { useState } from "react";

const Search = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="section">
    <div className="container mx-auto ">
    <div className="flex flex-col md:flex-row items-center justify-between border rounded-lg shadow-md px-4 py-3 max-w-[90%] max-w-screen-xl  bg-gray-100 relative mt-6">
      <div className="flex items-center w-full md:full bg-white  rounded-md shadow-inner">
        {!isFocused && (
          <span className="hidden sm:flex lg:flex text-gray-500 mr-4 transition-all duration-300 ">
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
          className={`w-full bg-transparent outline-none text-[#767676] text-xl md:text-2xl font-bold transition-all duration-300 ${
            isFocused ? "pl-0" : "pl-3"
          }`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
    <button className="hidden sm:flex bg-teal-700 text-white px-4 md:px-6 sm:w-[220px] md:w-[240px]  rounded-md shadow m-2 h-[50px] md:h-[64px] hover:bg-teal-700 transition-all  md:text-xl font-semibold text-center">
          Search Domains
        </button>
        {/* Search Icon for Small Screens */}
        <button className="sm:hidden bg-teal-700 text-white p-3 rounded-md shadow m-2 h-[50px] w-[50px] flex items-center justify-center hover:bg-teal-700 transition-all">
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
        </button>
      </div>
      {/* Right Section Hidden on md and sm screens */}
      <div className="hidden lg:flex flex-col md:flex-row items-center text-black-400 mt-4 md:mt-0">
        <img
          src="https://img1.wsimg.com/cdnassets/m/5a9b2a6a89575fb5/original/img_icon_bug_tld-pro.svg"
          alt=".pro"
          className="h-6 w-16 md:w-20"
        />
        <div className="text-center md:text-left">
          <p className="text-sm font-bold">₹ 433.91*/1st yr.</p>
          <p className="text-xs">.pro says you’re the best.</p>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Search;

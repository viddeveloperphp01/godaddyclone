import React from "react";

const Image = () => {
  return (
    <div className="flex flex-col md:flex-row w-lg h-[85vh] gap-6 mr-8 ml-8 p-10 rounded-lg">
      {/* Left Section: 3/4 of the screen */}
      <div
        className="md:w-3/4 w-full bg-gradient-to-b from-[#FFF5EB] to-white p-8 relative overflow-hidden rounded-3xl"
        style={{
          backgroundImage: `url('https://img1.wsimg.com/cdnassets/transform/f9daf493-516d-43e7-afa6-24c3f79cbf49/mrq-hp-airo-tablet')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Content */}
        <div className="bg-opacity-80 p-6 rounded-lg">
  {/* New Badge */}
  <span className="block text-sm font-bold bg-white w-12 pl-2 text-black-600 mb-2">
    NEW
  </span>

  {/* Logo Section */}
  <div className="flex items-center gap-2 mb-4">
    <img
      src="https://img1.wsimg.com/cdnassets/m/10a7927656dae92f/original/img-hp-airo-logo.svg"
      alt="GoDaddy Airo Logo"
      className="h-6"
    />
  </div>

  {/* Heading */}
  <h1 className="text-5xl font-extrabold leading-snug font-serif mb-2 tracking-tight">
    Buy a domain and <br /> get online fast with <br /> AI.
  </h1>

  {/* Description */}
  <p className="text-black-800 font-semibold leading-relaxed mb-4">
    Buy a new domain and get GoDaddy Airo™, our <br />
    customizable, AI-powered solution that can easily <br />
    deliver a website, logo, and more.^
  </p>

  {/* Button */}
  <button
    type="button"
    className="relative bg-black text-white w-48 h-12 font-medium px-6 py-2 rounded-md border border-black group overflow-hidden transition-all duration-300 ease-in-out hover:w-52 hover:translate-x-1 flex items-center justify-center pl-4"
  >
    <span className="transition-all duration-300 group-hover:pl-2">Learn More</span>
    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 translate-x-4 opacity-0 text-white text-lg scale-100 transition-all duration-300 group-hover:translate-x-0 group-hover:scale-125 group-hover:opacity-100">
      →
    </span>
  </button>
</div>

      </div>
{/* Right Section: 1/4 of the screen */}
<div className="md:w-1/4 w-full bg-black p-8 flex flex-col justify-center items-center rounded-3xl space-y-4">
<span className="block text-sm font-bold w-36 text-center text-black-400 mb-2 bg-purple-300 rounded-sm">
    GoDaddy AIRO<sup>TM</sup>
  </span>

  <h2 className="text-2xl font-bold leading-snug mb-2 text-white text-center">
    Get a .com with <br /> Airo™ — only ₹ <br />1.00*/1st yr
  </h2>
  <p className="text-white leading-relaxed mb-4 text-center">
    3-year purchase required. Additional years ₹ 1,499.00*
  </p>
  <button
    type="button"
    className="relative bg-white text-black font-medium px-4 py-2 rounded-md border border-black group overflow-hidden transition-all duration-300 ease-in-out w-52 hover:w-60 hover:translate-x-1 flex items-center justify-center pl-2"
  >
    <span className="transition-all duration-300 group-hover:pl-2">Try AI Domain Search</span>
    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 translate-x-4 opacity-0 text-black text-lg scale-100 transition-all duration-300 group-hover:translate-x-0 group-hover:scale-125 group-hover:opacity-100">
      →
    </span>
  </button>
</div>

    </div>
  );
};

export default Image;

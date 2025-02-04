import React from "react";

const Image = () => {
  return (
    <div className="section">
    <div className="container mx-auto py-6">
      {/* Layout adjustments based on screen size */}
      <div className="flex flex-col w-full gap-4 md:flex-col lg:flex-row gap-6 h-auto lg:h-[80vh] sm:flex-col sm:gap-4">
        {/* Left Section */}
        <div
          className="w-full p-8 relative overflow-hidden rounded-3xl lg:w-3/4 sm:h-[70vh] md:h-[80vh] lg:h-auto"
          style={{
            backgroundImage: `url('https://img1.wsimg.com/cdnassets/transform/f9daf493-516d-43e7-afa6-24c3f79cbf49/mrq-hp-airo-tablet')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="text-center sm:text-center md:text-left lg:text-left p-6 rounded-lg">
            <span className="block text-sm font-bold bg-white text-black w-12 pl-2 mb-2 justify-center ">NEW</span>
            <div className="flex justify-center items-center gap-2 mb-4 md:justify-start">
              <img
                src="https://img1.wsimg.com/cdnassets/m/10a7927656dae92f/original/img-hp-airo-logo.svg"
                alt="GoDaddy Airo Logo"
                className="h-6"
              />
            </div>
            <h3 className="text-3xl font-extrabold leading-snug font-serif mb-2 tracking-tight md:text-5xl">
              Buy a domain and <br /> get online fast with <br /> AI.
            </h3>
            <p className="text-black font-semibold leading-relaxed mb-4 text-sm md:text-base">
              Buy a new domain and get GoDaddy Airo™, our <br /> customizable, AI-powered solution that can easily <br />
              deliver a website, logo, and more.^
            </p>
            <button
              type="button"
              className="relative bg-black text-white w-full md:w-36 h-12 font-medium px-6 py-2 rounded-md border border-black group overflow-hidden transition-all duration-300 ease-in-out hover:w-52 hover:translate-x-1 flex items-center justify-center"
            >
              <span className="transition-all duration-300 group-hover:pl-2">Learn More</span>
              <span className="absolute right-4 top-1/2 transform -translate-y-1/2 translate-x-4 opacity-0 text-white text-lg transition-all duration-300 group-hover:translate-x-0 group-hover:scale-125 group-hover:opacity-100">
                →
              </span>
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/4 bg-black p-8 flex flex-col justify-center items-center rounded-3xl space-y-4 sm:w-full sm:order-2 text-center sm:text-center md:text-left sm:justify-left lg:text-left">
          <span className="block text-sm font-bold w-36 text-center text-gray-600 mb-2 bg-purple-300 rounded-sm">
            GoDaddy AIRO<sup>TM</sup>
          </span>
          <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-2 text-white">
            Get a .com with <br /> Airo™ — only ₹ <br />1.00*/1st yr
          </h2>
          <p className="text-white leading-relaxed mb-4 text-sm md:text-base">
            3-year purchase required. Additional years ₹ 1,499.00*
          </p>
          <button
            type="button"
            className="relative bg-white text-black font-medium px-4 py-2 rounded-md border border-black group overflow-hidden transition-all duration-300 ease-in-out w-full md:w-52 hover:w-60 hover:translate-x-1 flex items-center justify-center"
          >
            <span className="transition-all duration-300 group-hover:pl-2">Try AI Domain Search</span>
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 translate-x-4 opacity-0 text-black text-lg transition-all duration-300 group-hover:translate-x-0 group-hover:scale-125 group-hover:opacity-100">
              →
            </span>
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Image;
import React, { useState } from 'react';

const ImageSlider = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const images = [
    "https://img1.wsimg.com/cdnassets/transform/2640ac6f-d6cf-46e4-8186-2bab99ae0675/komusicmusicianbttemplate_desktop",
    "https://img1.wsimg.com/cdnassets/transform/5be08aac-da26-4a95-816b-e5b5abe1c46b/retailsingleproduct_mobile",
    "https://img1.wsimg.com/cdnassets/transform/c5ec380c-f411-41f0-8d20-eb469ad39b05/koartgallerytemplate1_desktop",
    "https://img1.wsimg.com/cdnassets/transform/d196e84d-26d6-47d0-b4df-b3e493a3934c/kohealthalternativetemplate_mobile",
    "https://img1.wsimg.com/cdnassets/transform/2024302c-7976-4f9a-b878-578f3d2fc2dc/kobookstoretemplate_desktop",
    "https://img1.wsimg.com/cdnassets/transform/a4beaca9-862a-416c-a247-abc591413f9d/koretailfurnituretemplate_mobile",
    "https://img1.wsimg.com/cdnassets/transform/cfb06d21-498d-4421-9355-167d720e015b/kohomehousewarestemplate_desktop"
  ];

  return (
    
    <div className="overflow-hidden w-full bg-gray-100 py-6 font-sans">
      <div className="text-center mb-4">
        <div className="heading text-4xl font-bold">
          <span>Templates designed to sell.</span>
        </div>
        <div className="sub-heading text-s mt-2">
          <span>Choose from 100s of designs for every idea and industry.</span>
        </div>
      </div>
      <br />
      <div
        className={`flex space-x-4 ${isPaused ? '' : 'animate-marquee'}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{
          width: `${images.length * 150}%`, 
          animationDuration: "540s" 
        }}
      >
        {/* Display original images */}
        {[...images, ...images].map((src, index) => (
          <div key={`${src}-${index}`} className="relative flex-shrink-0">
            <img
              src={src}
              alt={`${index + 1}`}
              className="w-full h-[300px] md:h-[350px] md:w-[150%] object-cover rounded-lg transition-all duration-300"
            />
            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 flex flex-col justify-center items-center">
              <button className="px-4 py-2 bg-white text-black font-semibold text-sm rounded shadow-lg mb-2">
                Start Editing
              </button>
              <a href="/#" className="text-white text-sm font-semibold hover:text-cyan-500 hover:underline">
                Preview
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Browse All Templates Button */}
      <div className="text-center mt-8">
        <button
          className={`px-6 py-3 bg-black text-white font-bold text-xs rounded-lg transition-all duration-300 whitespace-nowrap 
            ${isButtonHovered ? "w-56" : "w-48"} flex items-center justify-center mx-auto`}
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
        >
          Browse All Templates {isButtonHovered && <span className="ml-2">→</span>}
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;

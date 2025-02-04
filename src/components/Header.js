import React, { useState } from "react";

// UPPER SECTION
const Section = () => {
  return (
    <section className="w-full text-white py-4 text-center">
      <div className="text-left">
        <p className="text-black pl-10 inline-block text-4xl font-semibold">
          Trusted by 20+ million <br />
          customers around the world.
        </p>
      </div>
    </section>
  );
};

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      title: "The support person has good knowledge...",
      description:
        "The support person has good knowledge and helped with good suggestions on improving my setting. That is extraordinary.",
      image: "star.png",
      text: "Chandrashekar Mhaskar",
    },
    {
      title: "10 ON 10 CUSTOMER SUPPORT",
      description:
        "The support provided by GoDaddy is the best in the industry with knowledgeable customer agents and best practices. They offer the best rates upfront over the call.",
      image: "star.png",
      text: "Niraj Singh",
    },
    {
      title: "Good Communication Skill by Support Assistant",
      description: "Great Product and Service Customer Support Assistance from Godadddy Support Team",
      image: "star.png",
      text: "John Doe",
    },
    {
      title: "Good Communication Skill by Support Assistant",
      description: "Great Product and Service Customer Support Assistance from Godadddy Support Team",
      image: "star.png",
      text: "John Doe",
    },
    {
      title: "Good Communication Skill by Support Assistant",
      description: "Great Product and Service Customer Support Assistance from Godadddy Support Team",
      image: "star.png",
      text: "John Doe",
    },
    {
      title: "Good Communication Skill by Support Assistant",
      description: "Great Product and Service Customer Support Assistance from Godadddy Support Team",
      image: "star.png",
      text: "John Doe",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  // Function to calculate the translateX value based on the device screen width
  const transformValue = () => {
    if (window.innerWidth <= 768) {
      return currentIndex * 100; // Mobile devices: Move 100% for one card
    } else {
      return currentIndex * 50; // Desktop devices: Move 50% for two cards
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-10 overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${transformValue()}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full sm:w-1/2 flex-shrink-0 px-2">
            <div className="bg-gray-100 p-6 flex-1 rounded-lg shadow-lg min-h-[80vh] sm:h-full lg:h-96 md:h-80 xl:h-64 relative">
              <p className="font-semibold text-sm">{slide.title}</p>
              <div className="flex gap-0.5 pt-4">
                {[...Array(5)].map((_, i) => (
                  <img key={i} className="w-5 h-5" src={slide.image} alt="star" />
                ))}
              </div>
              <p className="font-semibold text-2xl mt-3">{slide.description}</p>
              <h1 className="absolute bottom-6 font-semibold text-sm">{slide.text}</h1>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        &gt;
      </button>
    </div>
  );
};

export default function App() {
  return (
    <div>
      {/* UPPER SECTION */}
      <Section />

      {/* Slider */}
      <Slider />
    </div>
  );
}

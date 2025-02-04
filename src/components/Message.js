import React, { useState } from "react";
import { motion } from "framer-motion";

const Message = () => {
  const [hoveredCard, setHoveredCard] = useState(0);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const images = [
    "https://img1.wsimg.com/cdnassets/transform/475af367-8a35-4d15-a838-37d8114ea080/intl-img-bl-prod-feature-get-online-fast-desktop",
    "https://img1.wsimg.com/cdnassets/transform/589acd99-ccfd-439a-88cb-1b5d7ee5f99f/intl-img-bl-prod-feature-build-trust-desktop",
    "https://img1.wsimg.com/cdnassets/transform/305e0fdd-0043-42cd-851e-5a6a00df7576/intl-img-bl-prod-feature-engage-with-marketing-desktop"
  ];

  const cards = [
    {
      title: "Get online fast. \nNo design skills needed.",
      desc: "Build your site in minutes. Choose from 100s of \nbeautiful, mobile-friendly templates with our Website \nBuilder, many with ecommerce features."
    },
    {
      title: "Build trust with email that \nmatches your domain.",
      desc: "Help boost your credibility with customers with free \nProfessional Email that’s identical to your domain \nname."
    },
    {
      title: "Engage with marketing tools",
      desc: "Help your audience find you with built-in SEO and \npromote your business with social media and email \nmarketing tools."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="font-sans flex flex-col items-center justify-center min-h-screen p-6 overflow-hidden w-full"
    >
      <h1 className="text-3xl leading-none font-semibold text-center mb-8">
        Grow your brand with Websites + Marketing.
      </h1>

      {/* Dynamic Image Section */}
      <div className="max-w-[119rem] max-w-5xl mb-6">
        <motion.img
          src={hoveredCard !== null ? images[hoveredCard] : images[0]}
          className="w-full h-[400px] object-cover rounded-lg shadow-lg transition-all duration-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Cards Section for Desktop */}
      <div className="hidden md:flex justify-center gap-4 w-full max-w-[91rem]">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className={`p-6 rounded-xl w-1/3 h-auto w-full transition-all duration-300 cursor-pointer flex flex-col justify-start text-left
            ${hoveredCard === index ? "bg-gray-200 shadow-xl" : "bg-white"}`}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-bold leading-tight whitespace-pre-line">{card.title}</h3>
            <p className="font-medium mt-2 text-base whitespace-pre-line">{card.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Responsive Section for 375px - 768px (Mobile & Tablet) */}
      <div className="md:hidden flex overflow-x-auto gap-4 w-full max-w-[91rem] py-4 no-scrollbar snap-x snap-mandatory">
        {images.map((src, index) => (
          <div key={index} className="flex-shrink-0 w-80 snap-center">
            <motion.img
              src={src}
              className="w-full h-48 object-cover rounded-lg shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            <motion.div
              className="p-4 rounded-lg bg-gray-200 shadow-md text-center mt-4 "
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <h3 className="text-lg font-bold leading-tight whitespace-pre-line">
                {cards[index].title}
              </h3>
              <p className="text-sm font-medium mt-2 whitespace-pre-line">
                {cards[index].desc}
              </p>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Start for Free Button */}
      <motion.button
        className={`mt-8 px-6 py-3 bg-black text-white text-sm font-bold rounded-lg transition-all duration-300 
          ${isButtonHovered ? "w-52" : "w-48"} flex items-center justify-center`}
        onMouseEnter={() => setIsButtonHovered(true)}
        onMouseLeave={() => setIsButtonHovered(false)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        Start for Free {isButtonHovered && <span className="ml-2">→</span>}
      </motion.button>
    </motion.div>
  );
};

export default Message;
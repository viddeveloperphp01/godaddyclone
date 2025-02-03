import React, { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion

const Message = () => {
  const [hoveredCard, setHoveredCard] = useState(0); // Set first card as default hovered
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const images = [
    "https://img1.wsimg.com/cdnassets/transform/475af367-8a35-4d15-a838-37d8114ea080/intl-img-bl-prod-feature-get-online-fast-desktop",
    "https://img1.wsimg.com/cdnassets/transform/589acd99-ccfd-439a-88cb-1b5d7ee5f99f/intl-img-bl-prod-feature-build-trust-desktop",
    "https://img1.wsimg.com/cdnassets/transform/305e0fdd-0043-42cd-851e-5a6a00df7576/intl-img-bl-prod-feature-engage-with-marketing-desktop"
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }} // Start from below
      animate={{ opacity: 1, y: 0 }} // Animate to normal position
      transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
      className="font-sans flex flex-col items-center justify-center min-h-screen p-6"
    >
      {/* Title */}
      <h1 className="text-4xl font-semibold text-center mb-8">
        Grow your brand with Websites + Marketing.
      </h1>

      {/* Dynamic Image Section */}
      <div className="w-full max-w-5xl mb-6">
        <motion.img
          src={hoveredCard !== null ? images[hoveredCard] : images[0]}
          className="w-full h-[400px] object-cover rounded-lg shadow-lg transition-all duration-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Cards Section */}
      <div className="flex justify-center gap-4 w-full max-w-5xl">
        {[
          {
            title: "Get online fast. No design skills needed.",
            desc: "Build your site in minutes. Choose from 100s of beautiful, mobile-friendly templates with our Website Builder, many with ecommerce features."
          },
          {
            title: "Build trust with email that matches your domain.",
            desc: "Help boost your credibility with customers with free Professional Email that’s identical to your domain name."
          },
          {
            title: "Engage with marketing tools.",
            desc: "Help your audience find you with built-in SEO and promote your business with social media and email marketing tools."
          }
        ].map((card, index) => (
          <motion.div
            key={index}
            className={`p-6 rounded-xl w-[350px] h-[150px] transition-all duration-300 cursor-pointer flex flex-col justify-start text-left
            ${hoveredCard === index ? "bg-gray-200 shadow-xl" : "bg-white"}`} // Default white bg, on hover gray bg and shadow
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
            initial={{ opacity: 0, y: 50 }} // Cards start from below
            animate={{ opacity: 1, y: 0 }} // Animate upwards
            transition={{ duration: 0.8, delay: index * 0.2 }} // Staggered effect
          >
            <h3 className="text-lg font-bold leading-tight">{card.title}</h3>
            <p className="font-medium mt-2 text-xs">{card.desc}</p>
          </motion.div>
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

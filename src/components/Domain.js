import React, { useState } from "react";

const contentData = {
  recommended: [
    {
      image:
        "https://img1.wsimg.com/cdnassets/transform/92e362f9-74bd-4ea0-bd98-f8a3ad7a4590/intl-img-hp-recore-prof-email-large-portrait",
      title: "Professional Email ₹ 39.00  per user/mo",
      description:
        "Earn trust from your customers with an email address that matches your domain.",
      link: "#",
      buttonText: "Get Started",
    },
    {
      image:
        "https://img1.wsimg.com/cdnassets/transform/e4fa5375-387e-4fa8-af29-ac79d6cf5d83/intl-img-hp-recore-wsb-small",
      title: "Websites ₹ 249.00/mo",
      description:
        "Start for free and quickly design a beautiful, mobile-friendly site.",
     link: "#",
      buttonText: "Create Your Site",
    },
    {
      image:
        "https://img1.wsimg.com/cdnassets/transform/6132afd7-7dd1-4f00-84bb-88cf0d54d02c/intl-img-hp-recore-web-hosting-small",
      title: "Web Hosting ₹ 89.00/mo",
      description: "Get fast load times and 99.9% uptime guaranteed.***",
      link: "#",
      buttonText: "View Plans and Pricing",
    },
  ],
  domains: [
    {
      image:
        "https://img1.wsimg.com/cdnassets/transform/3343fa4c-902b-4658-9299-dce12e1467e6/intl-img-hp-recore-domains",
      title: "Domains",
      description:
        "Get started with the perfect domain, which comes with free domain privacy protection forever.",
      link: "#",
      buttonText: "Search Domains",
    },
    {
      image:
        "https://img1.wsimg.com/cdnassets/transform/b995ec90-4697-4152-ad93-5cfe75b3cab4/img-hp-recore-co-large-portrait",
      title: ".co for ‪₹ 1.00‬/1st year",
      description: "Ensure your company and website stand out with a .co domain. 3-year purchase required. Additional year(s) ‪₹ 3,299.00‬.",
      link: "#",
      buttonText: "Find Your Domain",
    },
    {
      image:
        "https://img1.wsimg.com/cdnassets/transform/ab758ae9-0592-4e88-8623-409257c378fc/intl-img-hp-recore-cctld-small",
      title: ".in ‪₹ 1.00‬/1st yr",
      description: "Boost your local impact with our localized top-level domains.",
     link: "#",
      buttonText: "Get started",
    },
  ],

  wordpress: [
    {
      image:
        "https://img1.wsimg.com/cdnassets/transform/bea9dece-19fc-4084-a021-988106642eab/intl-img-hp-recore-wp-large-portrait",
      title: "WordPress ₹ 329.00/mo",
      description: "Let AI quickly build a fully-managed website that's always up to date, with no worries.",
      link: "#",
      buttonText: "Explore WordPress Plans",
    },
    {
      image:
        "https://img1.wsimg.com/cdnassets/transform/618303b0-5d4f-40f0-b64a-1fe80b1f9c2e/img-bl-hp-recore-ssl-large-portrait",
      title: "SSL Certificates  ₹ 3,299.00/yr",
      description: "Help keep sensitive data secure on your site and boost search ranking with an SSL Certificate.",
      link: "#",
      buttonText: "View Plans and Pricing",
    },
  ],
};
const Domain = () => {
  const [activeSection, setActiveSection] = useState("recommended");

  return (
    <div className="min-h-screen bg-white p-6">
      {/* Section Tabs */}
      <div className="flex space-x-4 mb-8 justify-center">
        {Object.keys(contentData).map((section) => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            className={`relative px-6 py-3 rounded-full flex items-center space-x-2 transition-all duration-300
              ${
                activeSection === section
                  ? "bg-black text-white"
                  : "bg-white text-black border border-gray-400"
              }
              hover:border-black hover:scale-105
            `}
          >
            <span className="font-medium">
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </span>
          </button>
        ))}
      </div>

      {/* Section Content */}
      <div className="w-full ml-36 mr-28  items-center max-w-7xl mx-auto">
        {activeSection === "wordpress" ? (
          // WordPress-specific layout
          <div className="grid grid-cols-2 h-[600px] w-[90%] gap-6">
  {contentData[activeSection].map((card, index) => (
    <div key={index} className="relative rounded-lg overflow-hidden bg-[#e7f0f0] shadow-md transition-all duration-300 hover:shadow-xl">
      
      {/* Image shifted towards right and up */}
      <img 
        src={card.image} 
        alt={card.title} 
        className="absolute inset-0 w-full h-full object-cover object-right scale-110 translate-y-[-20%]"
      />
      
      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <h3 className="text-2xl font-bold text-black w-60 h-[72px]">
          {card.title}
        </h3>
        <p className="text-black text-md mb-4 w-80 h-[60px]">
          {card.description}
        </p>
        <a
          href={card.link}
          rel="noopener noreferrer"
          className="text-white bg-black text-center w-48 h-12 font-bold px-3 py-3 text-sm rounded-lg shadow transition-all hover:scale-110"
        >
          {card.buttonText}
        </a>
      </div>
      
    </div>
  ))}
</div>

        ) : (
          // Recommended and Domains Layout
          <div className="grid grid-cols-3 ml-24 gap-4 space-x-24 w-full">
{/* Large Left Card */}
<div className="relative col-span-1 w-[500px] row-span-2 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
  
  {/* Background color for areas without image */}
  <div className="absolute inset-0 bg-[#EEE8E3] "></div>
  <div
    className={`absolute inset-0 ${
      activeSection === "recommended"
        ? "bg-[#EEE8E3]" // Background for 'recommended'
        : activeSection === "domains"
        ? "bg-[#dbedee]" // Background for 'domains'
        : "bg-[#F0F4C3]" // Background for other sections (e.g., 'wordpress')
    }`}
  ></div>


  {/* Image fully at the top */}
  <img
    src={contentData[activeSection][0].image}
    alt={contentData[activeSection][0].title}
    className="absolute top-0 right-0 w-full h-full object-cover object-[90%_10%] translate-y-[-20%] "
  />

  {/* Content Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-Isabelline via-transparent to-transparent p-6 flex flex-col justify-end">
    <h3 className="text-lg font-bold text-gray-800 w-60 h-[80px]">
      {contentData[activeSection][0].title}
    </h3>
    <p className="text-black text-sm font-semibold  mb-4 w-60 h-[60px]">
      {contentData[activeSection][0].description}
    </p>
    <a
      href={contentData[activeSection][0].link}
      rel="noopener noreferrer"
      className="text-white bg-black text-center px-3 py-3 w-36 h-12 font-bold text-sm rounded-lg shadow transition-all hover:scale-105"
    >
      {contentData[activeSection][0].buttonText}
    </a>
  </div>
</div>



  {/* Top Right Card */}
  <div className="relative col-span-2 w-[60%] h-[250px] bg-gray-100 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
    <img
      src={contentData[activeSection][1].image}
      alt={contentData[activeSection][1].title}
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0  p-4 flex flex-col justify-end">
      <h3 className="text-lg font-bold  text-gray-800 w-40    h-[60px]">
        {contentData[activeSection][1].title}
      </h3>
      <p className="text-black text-sm font-semibold mb-4 w-56    h-[30px]">
        {contentData[activeSection][1].description}
      </p>
      <a
        href={contentData[activeSection][1].link}
        rel="noopener noreferrer"
        className="text-white bg-black  w-36 h-12 font-bold text-center px-3 py-3 text-sm rounded-lg shadow transition-all hover:scale-105"
      >
        {contentData[activeSection][1].buttonText}
      </a>
    </div>
  </div>

  {/* Bottom Right Card */}
  <div className="relative col-span-2 w-[60%] h-[250px] bg-gray-100 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
    <img
      src={contentData[activeSection][2].image}
      alt={contentData[activeSection][2].title}
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0  p-4 flex flex-col justify-end">
      <h3 className="text-lg font-bold  text-gray-800 w-40    h-[60px]">
        {contentData[activeSection][2].title}
      </h3>
      <p className="text-black text-sm font-semibold mb-4 w-56    h-[30px]">
        {contentData[activeSection][2].description}
      </p>
      <a
        href={contentData[activeSection][2].link}
        rel="noopener noreferrer"
        className="text-white bg-black text-center px-3 py-3 w-48 h-12 text-sm font-bold rounded-lg transition-all hover:scale-105"
      >
        {contentData[activeSection][2].buttonText}
      </a>
    </div>
  </div>
</div>

        )}
      </div>
    </div>
  );
};

export default Domain;
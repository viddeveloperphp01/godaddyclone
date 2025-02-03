import go_daddy from "./go_daddy.svg";
import {
  ChevronDown,
  Search,
  List,
  Globe,
  CircleUser,
  Tag,
  Hammer,
  ArrowLeftRight,
  DollarSign,
  Lock,
  ShieldCheck,
  FileLock2,
  Megaphone,
  WandSparkles,
  Image,
  Database,
  ShoppingCart,
  X,
} from "lucide-react";
import React, { useState, useEffect } from "react";

const Mainheader = () => {
  const [activeDropdown, setActiveDropdown] = useState("");
  // const [signInDropdown, setSignInDropdown] = useState(false);

  // Dropdown content for different sections
  const dropdownContents = {
    domains: {
      sections: [
        {
          section: "FIND A DOMAIN",
          items: [
            { icon: <Search />, label: "Search for Domain Names" },
            { icon: <ArrowLeftRight />, label: "Transfer Domain Names" },
            { icon: <List />, label: "gTLD Domain Extensions" },
          ],
        },
        {
          section: "AUCTIONS FOR DOMAINS",
          items: [
            { icon: <Hammer />, label: "Auctions for Domain Names" },
            { icon: <DollarSign />, label: "Appraise Domain Name Value" },
            { icon: <Tag />, label: "Discount Domain Club" },
          ],
        },
        {
          section: "DOMAIN TOOLS AND SERVICES",
          items: [
            {
              icon: <Tag />,
              label: "Generate Domain Names",
              tag: "AI-POWERED",
            },
            { icon: <Globe />, label: "Find a Domain Owner (WHOIS)" },
            { icon: <CircleUser />, label: "Domain Broker Service" },
          ],
        },
      ],
      image: {
        src: "https://img1.wsimg.com/cdnassets/transform/439199f2-6368-4a61-86f7-0c8f259d6639/img-meganav-domains-2",
        alt: "Domain Registration",
        caption: "Register Your Domain Now",
      },
    },
    marketing: {
      sections: [
        {
          section: "MARKETING TOOLS",
          items: [
            { icon: <Megaphone />, label: "Digital Marketing" },
            {
              icon: <WandSparkles />,
              label: "Logo Maker",
              tag: "AI-POWERED",
            },

            { icon: <Image />, label: "Content & Photo Creator" },
          ],
        },
      ],
      image: {
        src: "https://img1.wsimg.com/cdnassets/transform/e67cfce2-4ac7-4faf-a6c6-fc9eaf1a9090/img-connect-grow-a-jpg",
        alt: "Marketing Tools",
        caption: "All Marketing Options",
      },
    },
    websitesHosting: {
      sections: [
        {
          section: "WEBSITES",
          items: [
            {
              icon: <Globe />,
              label: "Website Builder",
              tag: "FREE TRIAL",
            },
            { icon: <CircleUser />, label: "Online Store" },
            { label: "All Website Options" },
          ],
        },
        {
          section: "HOSTING",
          items: [
            { icon: <Search />, label: "Web Hosting" },
            { icon: <List />, label: "WordPress Hosting" },
            { icon: <Database />, label: "VPS Hosting" },
            { label: "All Hosting Options" },
          ],
        },
        {
          section: "GODADDY PRO",
          items: [{ icon: <Search />, label: "GoDaddy Hub Client Dashboard" }],
        },
      ],
      image: {
        src: "https://img1.wsimg.com/cdnassets/transform/4bb63964-e152-412b-aa4d-6debb2e475a1/img-meganav-ecommerce-hosting",
        alt: "Websites and Hosting",
        caption: "Sell Online With WordPress Ecommerce Hosting",
      },
    },
    security: {
      sections: [
        {
          section: "SSL Certificates",
          items: [
            { icon:  <FileLock2 />, label: "SSL Certificates" },
            { icon: <Lock />, label: "Managed SSL Certificates" },
          ],
        },
        {
          section: "WEB Security",
          items: [{ icon: <ShieldCheck />, label: "Website Security" },
            { label: "Website Security" }
          ],
        },
      ],
      image: {
        src: "https://img1.wsimg.com/cdnassets/transform/a00296a4-9b10-470e-9845-1124f28b7d51/img-meganav-website-backup",
        alt: "Security Services",
        caption: "All Web Security Options",
      },
    },

    signIn: {
      sections: [
        {
          section: "Registered Users",
          items: [
            { label: "Have An Account Sign In Now" },
            { label: "Sign In", link: "#", highlight: true },
          ],
        },
        {
          section: "New Customer",
          items: [
            {
              label: "New to GoDaddy? Create an account to get started today.",
            },
            { label: "Create an Account", link: "#", highlight: true },
          ],
        },
        {
          section: "Inbox Links",
          items: [
            {
              label: "Sign in to Office 365 Email",
              link: "#",
              highlight: true,
            },
            { label: "Sign in to GoDaddy Webmail", link: "#", highlight: true },
          ],
        },
      ],
    },
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? "" : dropdown);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) =>{
      if (!event.target.closest(".dropdown-container")) {
      setActiveDropdown("");
    } };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const renderDropdown = (content) => (
    <div
      className={`absolute left-0 w-full shadow-lg z-50 transition-all duration-300
        ${activeDropdown
          ? "bg-white text-black top-[70px] opacity-100 h-[440px] transform translate-y-0"
          : "bg-transparent text-white top-[64px] opacity-0 pointer-events-none h-0 transform translate-y-[-20px]"
        }`}
    >
      {/* Dropdown Arrow (Visible when active) */}
      <div
        className={`absolute left-10 top-full w-4 h-0 border-l-8 border-r-8 border-b-8 border-transparent 
          ${activeDropdown ? "border-b-white" : "border-b-transparent"} transition-transform duration-300`}
      />
      
      {/* Content Section */}
      <div
        className={`grid grid-cols-4 text-sm gap-4 p-6 mr-8 ml-8 transition-all duration-300
          ${activeDropdown ? "transform translate-x-0" : "transform translate-x-[100%] opacity-0"}
        `}
      >
    {/* Left Content Section */}
<div className="col-span-3 grid grid-cols-3 gap-8 mr-8">
  {content.sections.map((section) => (
    <div key={section.section}>
      <h3 className="text-gray-700 font-semibold p-2 rounded-md mb-4">
        {section.section}
      </h3>
      {section.items.map(({ icon, label, tag }) => (
        <div
          key={label}
          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100  hover:text-purple-600 cursor-pointer transition-all duration-200"
        >
          {/* Render icon only if it exists */}
          {icon && (
            <span className="flex items-center justify-center w-12 h-12 bg-blue-100 text-black rounded-lg">
              {icon}
            </span>
          )}
          <span className="text-sm font-medium flex items-center">
            {label}
            {tag && (
              <span className="ml-2 px-2 py-1 text-xs text-purple-600 bg-purple-100 rounded-md">
                {tag}
              </span>
            )}
          </span>
        </div>
      ))}
    </div>
  ))}
</div>




  
        {/* Right Image Section */}
        <div className="col-span-1 flex flex-col justify-center group">
          <div className="overflow-hidden rounded-lg items-center shadow-md mb-4">
            <img
              src={content.image.src}
              alt={content.image.alt}
              className="transition-transform duration-300 ease-out transform group-hover:scale-110"
            />
          </div>
          <h4 className="text-left text-lg font-medium transition-all group-hover:underline">
            {content.image.caption}
          </h4>
        </div>
      </div>
    </div>
  );
  
  const renderSignInDropdown = () => (
    <div className="absolute right-8 mt-6 w-64 bg-white shadow-lg rounded-lg text-black z-50 p-4 top-[64px] ">
      {/* Close Button (X) */}
      <button
        className="absolute top-2 right-2 text-black hover:text-black"
        onClick={(e) => {
          e.stopPropagation(); // Prevent closing other dropdowns
          setActiveDropdown(""); // Close the dropdown
        }}
      >
        <X />
      </button>
      {dropdownContents.signIn.sections.map((section, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-gray-700 font-semibold">{section.section}</h3>
          <div className="mt-2 text-gray-700 font-semibold">
            {section.items.map((item, i) => (
              <a
                key={i}
                href={item.link}
                className={`block  px-2 py-2 text-sm rounded-lg ${
                  item.highlight ? "text-blue-400 font-medium" : "text-gray-700"
                } hover:underline`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
  return (
    <header className="bg-gray-900 text-white flex flex-col h-16 relative">
      {/* Top Header */}
      <div className="flex justify-between items-center w-lg gap-2 mr-16 ml-16">
        {/* Logo Section */}
        <div className="flex items-center relative space-x-3  fill-white">
  <img
    src={go_daddy}
    alt="GoDaddy"
    className="h-12 fill-white bg-cover bg-center"
  />
  <span className="text-xl  font-bold ">GoDaddy</span>
  <span className="text-sm absolute -bottom-2 right-0">India</span>
</div>


        <nav className="flex  w-[900px]  text-md  font-bold">
        <div className="relative">
        {activeDropdown === "domains" && (
    <div className="fixed top-[60px]  inset-0 bg-gray-500 bg-opacity-10 backdrop-blur-sm transition-all duration-300 z-10"></div>
  )}
     </div>
     
          <div
            className={`flex items-center space-x-1 h-10 w-28 px-3 py-3 top-1 text-md cursor-pointer rounded-md relative 
    ${
      activeDropdown === "domains" ? "bg-white text-black" : "hover:bg-gray-700"
    }
  `}
            onClick={(e) => {
              e.stopPropagation();
              toggleDropdown("domains");
            }}
          >
            <span>Domains</span>
            <ChevronDown
              size={16}
              className={`transition-transform duration-300 ${
                activeDropdown === "domains" ? "rotate-180" : ""
              }`}
            />
          </div>
          <div className="relative">
        {activeDropdown === "websitesHosting" && (
    <div className="fixed top-[60px] inset-0 bg-gray-500 bg-opacity-10 backdrop-blur-md transition-all duration-300 z-10"></div>
  )}
     </div>
          <div
            className={`flex items-center space-x-1 h-10 w-48 px-3 py-3 top-1 text-sm cursor-pointer rounded-md relative  ${
              activeDropdown === "websitesHosting"
                ? "bg-white text-black"
                : "hover:bg-gray-700"
            }
  `}
            onClick={(e) => {
              e.stopPropagation();
              toggleDropdown("websitesHosting");
            }}
          >
            <span>Websites and Hosting</span>
            <ChevronDown
              size={16}
              className={`transition-transform duration-300 ${
                activeDropdown === "websitesHosting" ? "rotate-180" : ""
              }`}
            />
          </div>

          {["Email"].map((item) => (
            <span
              key={item}
              className=" items-center space-x-2  h-10 w-24 px-6 py-2 top-1 text-md  font-semibold cursor-pointer rounded-md relative hover:bg-gray-700"
            >
              {item}
            </span>
          ))}
          <div className="relative">
        {activeDropdown === "security" && (
    <div className="fixed top-[60px] inset-0 bg-gray-500 bg-opacity-10 backdrop-blur-md transition-all duration-300 z-10"></div>
  )}
     </div>
          <div
            className={`flex items-center space-x-2 h-10 w-28 px-3 py-3 top-1 text-sm cursor-pointer rounded-md relative ${
              activeDropdown === "security"
                ? "bg-white text-black"
                : "hover:bg-gray-700"
            }`}
            onClick={(e) => {
              e.stopPropagation();
              toggleDropdown("security");
            }}
          >
            <span>Security</span>
            <ChevronDown
              size={16}
              className={`transition-transform duration-300 ${
                activeDropdown === "security" ? "rotate-180" : ""
              }`}
            />
          </div>
          <div className="relative">
        {activeDropdown === "marketing" && (
    <div className="fixed top-[60px] inset-0 bg-gray-500 bg-opacity-10 backdrop-blur-md transition-all duration-300 z-10"></div>
  )}
     </div>
          <div
            className={`flex items-center space-x-2 h-10 w-28 px-3 py-3 top-1 text-sm cursor-pointer rounded-md relative ${
              activeDropdown === "marketing"
                ? "bg-white text-black"
                : "hover:bg-gray-700"
            }`}
            onClick={(e) => {
              e.stopPropagation();
              toggleDropdown("marketing");
            }}
          >
            <span>Marketing</span>
            <ChevronDown
              size={16}
              className={`transition-transform duration-300 ${
                activeDropdown === "marketing" ? "rotate-180" : ""
              }`}
            />
          </div>

          {["Pricing"].map((item) => (
            <span
              key={item}
              className=" items-center space-x-2 h-10 w-24 px-6 py-2 top-1 text-md  font-semibold cursor-pointer rounded-md relative hover:bg-gray-700"
            >
              {item}
            </span>
          ))}
        </nav>

        {/* Right-side Links */}
        <div className="flex  items-center relative text-md  font-bold">
          {["Contact Us"].map((item) => (
            <span
              key={item}
              className="items-center space-x-2  h-10 w-24 px-3 py-3 top-1 text-sm  font-semibold cursor-pointer rounded-md relative hover:bg-gray-700"
            >
              {item}
            </span>
          ))}
          {[ "Help"].map((item) => (
            <span
              key={item}
              className="items-center space-x-2  h-10 w-20 px-3 py-3 top-1 text-sm  font-semibold cursor-pointer rounded-md relative hover:bg-gray-700"
            >
              {item}
            </span>
          ))}
          {/* Sign In Dropdown */}
          <div className="relative">
            <div
              className={`flex items-center space-x-2  h-10 w-24 px-3 py-3 top-1 text-sm cursor-pointer rounded-md relative ${
                activeDropdown === "signIn"
                  ? "bg-white text-black"
                  : "hover:bg-gray-700"
              }`}
              onClick={(e) => {
                e.stopPropagation();
                toggleDropdown("signIn");
              }}
            >
              <span>Sign In</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${
                  activeDropdown === "signIn" ? "rotate-180" : ""
                }`}
              />
            </div>
          </div>

          {/* Shopping Cart Icon */}
          <ShoppingCart
            className="cursor-pointer hover:text-gray-400"
            size={24}
          />
        </div>
      </div>

      {/* Dropdown Menus */}
      {activeDropdown &&
        activeDropdown !== "signIn" &&
        renderDropdown(dropdownContents[activeDropdown])}
      {activeDropdown === "signIn" && renderSignInDropdown()}
    </header>
  );
};

export default Mainheader;

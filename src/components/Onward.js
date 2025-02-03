import React, { useState, useEffect } from "react";
import { Search, Store, Shield } from 'lucide-react';

function Onward() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const hasAnimated = localStorage.getItem("hasAnimated");

    if (!hasAnimated) {
      setTimeout(() => {
        setShowContent(true);
        localStorage.setItem("hasAnimated", "true");
      }, 2000);
    } else {
      setShowContent(true);
    }

    return () => {
      localStorage.removeItem("hasAnimated");
    };
  }, []);

  return (
    <div className="font-sans">
      <div className="main-text pt-10">
        <div className="text-left pl-8 pt-6">
          <p className="font-semibold text-4xl">
            <span>Onward and upward with </span>
            <br />
            <span>our customers.</span>
          </p>
        </div>
      </div>

      <div className="image-div pt-8">
        <div className="relative w-full h-[600px] overflow-hidden">
          {/* Background Image with Pop-up Animation */}
          <img
            src="https://img1.wsimg.com/cdnassets/transform/03790a5c-4503-450f-8786-bbdacfb66dc0/Raheim-Thompson-M"
            alt="Raheim Thompson"
            className={`absolute left-0 object-cover transition-all duration-1000 ${
              showContent ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
            style={{
              width: "120%",
              height: "700px",
              transform: "translate(-250px, -50px)",
              objectPosition: "top center",
            }}
          />

          {/* Bottom-left Text (Smaller, Not Bold) */}
          <div className="absolute bottom-4 left-4 text-black text-sm">
            <p>Raheim Thompson</p>
            <p>roletape.com</p>
          </div>

          {/* Cropped Left Part Placed on Right */}
          <div
            className={`absolute right-0 top-0 h-[600px] w-[250px] overflow-hidden transition-all duration-1000 ${
              showContent ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
            style={{
              backgroundImage:
                "url(https://img1.wsimg.com/cdnassets/transform/03790a5c-4503-450f-8786-bbdacfb66dc0/Raheim-Thompson-M)",
              backgroundPosition: "top left",
              backgroundSize: "cover",
            }}
          ></div>

          {/* Static Overlay Box */}
          <div className="absolute top-10 right-8 bg-white p-8 max-w-xl min-h-[510px] shadow-lg rounded-lg flex flex-col justify-center space-y-4">
            <p className="text-3xl font-semibold leading-tight text-gray-900 mb-12">
              “GoDaddy's Website Builder is <br />
              super-convenient for somebody <br />
              who has an idea of what they're <br />
              trying to create, but might not have <br />
              any technical skills.”
            </p>

            {/* Image & Products Used (Flex Row) */}
            <div className="Main flex items-center justify-between">
              <div className="mt-4">
                <p className="text-sm">
                  Products used by{" "}
                  <span className="font-semibold text-sm block">Roletape:</span>
                </p>
                <ul className="mt-2 space-y-2 text-[16px]">
                  <li className="flex items-center space-x-2 cursor-pointer">
                    <Search className="bg-cyan-600 text-white text-xl p-2 rounded-full" />
                    <a
                      href="/#"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-cyan-600 hover:underline text-[16px]"
                      style={{ fontSize: "14px" }}
                    >
                      Domain
                    </a>
                  </li>
                  <li className="flex items-center space-x-2 cursor-pointer">
                    <Store className="bg-cyan-600 text-white text-xl p-2 rounded-full" />
                    <a
                      href="/#"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-cyan-600 hover:underline text-[16px]"
                      style={{ fontSize: "14px" }}
                    >
                      Online Store
                    </a>
                  </li>
                  <li className="flex items-center space-x-2 cursor-pointer">
                    <Shield className="bg-cyan-600 text-white text-xl p-2 rounded-full" />
                    <a
                      href="/#"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-cyan-600 hover:underline text-[16px]"
                      style={{ fontSize: "14px" }}
                    >
                      SSL Certificates
                    </a>
                  </li>
                </ul>
              </div>

              {/* Image Inside Box */}
              <div className="flex justify-end mt-4">
                <img
                  src="https://img1.wsimg.com/cdnassets/transform/bc4b4bee-f709-4f8b-b606-a92a74286ae2/Raheim-Thompson-site"
                  alt="Website Preview"
                  className="w-80 h-48 object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Onward;

import React from "react";

const Header = () => {
  return (
    <>
      <header className="w-full  text-white py-4 text-center">
        <div className="text-left">
          <p className="text-black pl-10 inline-block text-4xl font-semibold">
            Trusted by 20+ million <br />
            customers around the world.
          </p>
        </div>
      </header>

      {/* Full-Screen Card Container */}
      <div className="min-h-screen bg-white pl-10 pr-4">
        <div className="flex flex-col sm:flex-row w-full h-screen gap-6 ">
          {/* Card 1 */}
          <div className="bg-gray-100 p-6 flex-1 rounded-lg shadow-lg h-full relative">
            <p className="uppercase font-semibold text-sm">The support person has good knowledge...</p>
            {/* <h1 className="mt-3">⭐⭐⭐⭐⭐</h1> */}
            <div className="flex gap-0.5 pt-4">
            <img className="w-5 h-5" src="star.png" alt="svg"/>
            <img className="w-5 h-5" src="star.png" alt="svg"/>
            <img className="w-5 h-5" src="star.png" alt="svg"/>
            <img className="w-5 h-5" src="star.png" alt="svg"/>
            <img className="w-5 h-5" src="star.png" alt="svg"/>

            
            </div>
            <p className="font-semibold text-2xl mt-3">
              The support person has good knowledge and helped with good suggestions on improving my setting. That is extraordinary.
            </p>
            <h1 className="absolute bottom-6 font-semibold text-sm">Niraj Singh</h1>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-100 p-6 flex-1  rounded-lg shadow-lg h-full relative">
            <p className="font-semibold text-sm">10 ON 10 CUSTOMER SUPPORT</p>
            {/* <h1 className="mt-3">⭐⭐⭐⭐⭐</h1> */}
            <div className="flex gap-0.5 pt-4">
            <img className="w-5 h-5" src="star.png" alt="svg"/>
            <img className="w-5 h-5" src="star.png" alt="svg"/>
            <img className="w-5 h-5" src="star.png" alt="svg"/>
            <img className="w-5 h-5" src="star.png" alt="svg"/>
            <img className="w-5 h-5" src="star.png" alt="svg"/>

            
            </div>

            <p className="font-semibold text-2xl mt-3">The support provided by GoDaddy is the best in the industry with knowledgeable customer agents and best practices. They offer the best rates upfront over the call.</p>
            <h1 className="absolute bottom-6 font-semibold text-sm">Chandrashekar Mhaskar</h1>
          </div>
        </div>
        <div>
          {/* last cart rat */}
          <div className="mt-10">
            <img src="download.png" className="w-40" alt="svg"/>

            <p className="font-semibold ">
              4.6 out of 5 stars based on 113,125 reviews <br />
              Showing our 4 and 5 stars reviews.
            </p>
            <div>


            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

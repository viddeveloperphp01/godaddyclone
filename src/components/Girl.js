import React from "react";

const Girl = () => {
    return (
        <div className="flex flex-col sm:flex-col lg:flex-row bg-blue-100 h-auto lg:h-[450px] relative">
            
            {/* Name & Role (Absolute on Desktop) */}
            <div className="absolute left-6 top-10 p-5 sm:absolute left-6 top-5">
                <p className="font-semibold text-sm">Suraiya J.</p>
                <p className="text-sm">GoDaddy Guide</p>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-2/3">
                <img className="w-full h-full lg:h-[450px] object-cover" src="girl.webp" alt="Girl" />
            </div>
            
            {/* Content Section */}
            <div className="w-full lg:w-1/3 bg-blue-100 pt-10 p-6 text-center lg:text-left">
                <div className="flex justify-center lg:justify-start">
                    <img src="GoDaddy-Guides-Logo.svg" alt="GoDaddy Logo" />
                </div>
                <h1 className="pt-5 text-4xl lg:text-5xl font-bold">
                    Why go with GoDaddy?
                </h1>
                <p className="pt-5 font-semibold">
                    Because we know that even the best technology is only as good as the people behind it. That’s why we offer expert support, plus a lot more.
                </p>
                <div className="pt-5 flex justify-center lg:justify-start">
                    <p className="bg-black text-white w-40 text-center p-3 rounded font-semibold group relative overflow-hidden">
                        Get Help
                        <span className="absolute right-6 top-1/2 transform translate-x-4 -translate-y-1/2 
                        text-2xl opacity-0 group-hover:opacity-100 group-hover:translate-x-2 
                        transition-all duration-300 ease-in-out">
                            →
                        </span>
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Girl;

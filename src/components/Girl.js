import React from "react";

const Girl = () => {
    return (
        <>
            <div className="flex  bg-blue-100 h-[450px] relative">
                <div className="absolute left-6 top-10 p-5">
                <p className=" font-semibold text-sm p">Suraiya J.</p>
                <p className="text-sm">GoDaddy Guide</p>
                </div>
                <div className="w-2/3">
                    <img className="w-full h-full object-cover" src="girl.webp" alt="Girl" />
                </div>
                
                {/* second div */}
                <div className="w-1/3 bg-blue-100 pt-10 ">
                    <div>
                        <img src="GoDaddy-Guides-Logo.svg" alt="svg"/>
                    </div>
                    <div className="pt-5 text-5xl">
                        <h1 className="font-bold">Why go with GoDaddy?</h1>
                    </div>

                    <div className="pt-5">
                        <p className="font-semibold">Because we know that even the best technology is only as good as the people behind it. That’s why we offer expert support, plus a lot more.</p>
                    </div>
                    <div className="pt-5 rounded">
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
        </>
    );
};

export default Girl;

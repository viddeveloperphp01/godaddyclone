import React from "react";

const Homepage = () => {
    return (
        <>
            <div className="bg-white p-8">
                <div className="text-center"><h1 className=" text-4xl font-bold">Why work with GoDaddy?</h1>
                    <p className="mt-6 text-lg font-semibold">   84+ million domains, 22 million customers, millions of websites,<br /> email and security — we help grow businesses.</p>
                </div>
                {/* *********** card here ***************** */}
                <div className="flex flex-col gap-4 mt-10 justify-center sm:flex-row">
                    {/* first card  */}
                    <div className="relative text-white rounded-lg shadow-lg flex-1">
                        <img src="search.png" className="rounded-lg" alt="svg" />
                        <div className="absolute top-8 left-8 font-semibold text-2xl text-white"><p className="text-white">.com to .xyz — a huge <br /> selection from the <br />largest domain<br /> registrar.</p></div>
                    </div>
                    {/* two card  */}
                    <div className="relative text-white  rounded-lg shadow-lg flex-1">
                        <img src="img-hp-rtb-security (1).webp" className="rounded-lg" alt="svg" />
                        <div className="absolute top-8 left-8 font-semibold text-2xl text-white"><p className="text-white">Zzzz... security to help <br />you sleep easy every<br />night.</p></div>
                    </div>
                    {/* card three  */}
                    <div className="bg-gray-100 text-white rounded-lg shadow-lg flex-1 flex justify-center items-center">
                        <div className="p-5 font-semibold text-2xl text-black ">
                            <img src="globe-green-1 (3).svg" className="w-10" alt="svg" />
                            <div><p> More than URLs. 21+ million trust us for their domains and more.</p></div>
                        </div>
                    </div>
                    {/* <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-lg flex-1">Card 4</div> */}
                </div>

                <div className="flex flex-col sm:flex-col lg:flex-row justify-center w-full gap-4 mt-10">

                    {/* Box 1 (Support Section) */}
                    <div className="bg-gray-100 text-white rounded-lg w-full lg:w-1/3 shadow-lg flex justify-center items-center">
                        <div className="p-5 pr-20 font-semibold text-2xl text-black sm:p-2 w-full">
                            <img src="icon-phone-green.svg" className="w-10 bg-gray-100" alt="svg" />
                            <div>
                                <p>
                                    We're here with the help and advice you need. Call us for award-winning <br />
                                    support.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Box 2 (Image + Text Section) */}
                    <div className="flex flex-col sm:flex-col lg:flex-row justify-center w-full lg:w-2/3 relative">
                        <div className="w-full sm:h-full flex justify-center">
                            <img
                                src="img-hp-rtb-tools-for-every-first-landscape.webp"
                                className="w-full h-80 object-cover"
                                alt="svg"
                            />
                        </div>
                        <div className="w-full sm:w-80 p-6 text-2xl absolute top-12 left-0 font-semibold md:absolute top-2 lg:top-6">
                            <p className="pt-10">Tools for every small business first—websites, email, marketing, and more.</p>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
};

export default Homepage;
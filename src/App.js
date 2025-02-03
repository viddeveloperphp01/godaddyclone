import React from "react";
import Image from "./components/Image";
import Search from "./components/Search";
import Domain from "./components/Domain";
import Mainheader from "./components/Mainheader";
import Message from "./components/Message";
import ImageSlider from "./components/ImageSlider";
import Onward from "./components/Onward";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Girl from "./components/Girl";
import About from "./components/About";
import Footer from "./components/Footer";

const HomePage = () => {

  return (
    <>
    <Mainheader />
    <Search />
    <Image />
    <Domain />
    <Message />
    <ImageSlider />
    <Onward />
    <Header />   {/* This renders the header */}
    <Homepage /> {/* This renders the default homepage content */}
    <Girl />     {/* This renders the image of the girl */}
    <About />
    <Footer/>
    </>
  );
};

export default HomePage;

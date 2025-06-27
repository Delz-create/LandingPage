import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import CTA1 from "./components/CTA-1";
import Upcoming from "./components/Upcoming";
import FashionCreator from "./components/FashionCreator";
import Features from "./components/Features";
import Trends from "./components/Trends";
import VideoSection from "./components/Video";
import CTA2Waitlist from "./components/CTA-2";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <CTA1 />
      <Upcoming />
      <FashionCreator />
      <Features />
      <Trends />
      <VideoSection />
      <CTA2Waitlist />
      <Footer />
    </>
  );
}

export default App;

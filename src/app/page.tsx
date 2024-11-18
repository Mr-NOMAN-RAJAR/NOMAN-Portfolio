import About from "@/components/About/page";
import Contact from "@/components/ContectMe/page";
import Footer from "@/components/Footer/page";
import Header from "@/components/Header/page";
import HeroSection from "@/components/HeroSection/page";
import Project from "@/components/Projects1/page";
import Services from "@/components/Services1/page";
import React from "react";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <About />
      <Project />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;

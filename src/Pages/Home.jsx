import React from "react";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import About from "./About";
import Services from "./Services";
import Prices from "./Prices";
import Contact from "./Contact";
import Footer from "../components/Footer";

import BackToTopButton from "../components/BackToBottom";

const Home = () => {
  return (
    <>
      <div className="w-full h-screen bg-cover bg-center">
        <header className="w-full py-4 px-6 shadow-md fixed top-0 left-0 bg-black z-50">
          <div className="flex items-center justify-center">
            <h1 className="text-2xl font-bold text-yellow-500">
              LUMORA HOTELS
            </h1>
          </div>
          <NavBar />
        </header>
        <section id="home" className="scroll-mt-24 ">
          <Hero />
        </section>

        <section id="about" className="scroll-mt-24">
          <About />
        </section>
        <section id="services" className="scroll-mt-24">
          <Services />
        </section>
        <section id="pricing" className="scroll-mt-24">
          <Prices />
        </section>
        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>

        <BackToTopButton />
        <Footer />
      </div>
    </>
  );
};

export default Home;

import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Services from "../Components/Services";
import Projects from "../Components/Projects";
import Feedbacks from "../Components/Feedbacks";
import Footer from "../Components/Footer";
import Planos from "../Components/Planos";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Feedbacks />
      {/* <Planos /> */}
      <Footer />
    </>
  );
}

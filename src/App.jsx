import React from "react";
import Navbar from "./components/navbar";
import Hero from "./sections/hero";
import Testimonials from "./sections/testimonials";
import Footer from "./components/footer";
import About from "./sections/about";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import Services from "./sections/services";
import Teams from "./sections/teams";
import Project from "./sections/projects";
import Process from "./sections/process";
import Collections from "./sections/collections";
import Ready from './sections/ready'; 
import Contact from "./sections/contact";


export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: true,     
    });
  }, []);

  return (
    <>
    <div className="mainContainer">
     <Navbar/>
     <Hero />
     <About />
      <Services />
     <Process/>
      <Project/>
      <Collections/>
    <Teams /> 
     <Testimonials />  
     <Ready />
      <Contact />
     <Footer />
     </div>
    </>
  );
}

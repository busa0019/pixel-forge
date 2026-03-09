import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/navbar";
import Hero from "./sections/hero";
import Testimonials from "./sections/testimonials";
import Footer from "./components/footer";
import About from "./sections/about";
import Services from "./sections/services";
import Teams from "./sections/teams";
import Project from "./sections/projects";
import Process from "./sections/process";
import Collections from "./sections/collections";
import Ready from "./sections/ready";
import Contact from "./sections/contact";

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    // if we have a hash, scroll to that element
    if (location.hash) {
      const id = location.hash.replace("#", "");
      // wait a tick for the page to render
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 0);
    } else {
      // otherwise normal route change scroll to top
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return null;
}

function HomeLayout() {
  return (
    <div className="mainContainer">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Process />
      <Project />
      <Collections />
      <Teams />
      <Testimonials />
      <Ready />
      <Footer />
    </div>
  );
}

function ContactLayout() {
  return (
    <div className="mainContainer">
      <Navbar />
      <Contact />
      <Footer />
    </div>
  );
}

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/contact" element={<ContactLayout />} />
      </Routes>
    </>
  );
}
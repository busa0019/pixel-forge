import React, { useEffect } from "react";
import { FaSearch, FaLightbulb,FaPencilRuler,FaCode,  FaCubes, FaTools, FaCheckCircle, FaPaperPlane, FaUsers, FaRocket} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Process() {
  useEffect(() => {
    AOS.init({ duration: 100, once: true });
  }, []);

  const steps = [
    {
      id: 1,
      title: "Discovery & Strategy",
      desc: "We start by understanding your business goals, target audience, and unique value proposition through detailed consultation and market research.",
      icon: <FaSearch className="text-blue text-3xl" />,
    },
    {
      id: 2,
       title: "Research & Planning",
      desc: "Our team conducts competitor analysis, user research, and develops a comprehensive project roadmap with clear milestones and deliverables.",
      icon: <FaLightbulb className="text-blue text-3xl" />,
    },
    {
      id: 3,
       title: "Design & Wireframing",
      desc: "We create wireframes, mockups, and interactive prototypes that visualize the user journey and establish the foundation for your digital product.",
      icon: <FaPencilRuler className="text-blue text-3xl" />,
    },
    {
      id: 4,
      title: "Development & Implementation",
      desc: "Our developers bring designs to life with clean, efficient code, ensuring responsive functionality and optimal performance across all devices.",
      icon: <FaCode className="text-blue text-3xl" />,
    },
    {
      id: 5,
      title: "Testing & Launch",
      desc: "Rigorous testing across multiple browsers and devices ensures quality, followed by a strategic launch plan and deployment.",
      icon: <FaCheckCircle className="text-blue text-3xl" />,
    },
    {
      id: 6,
      title: "Ready to Elevate Your Digital Presence?",
      desc: "Whether you need a complete brand overhaul, a new website, or ongoing design support, our team is ready to bring your vision to life.",
      icon: <FaPaperPlane className="text-white text-3xl" />,
      cta: true,
      ctaLink:"#contact", 
    },
  ];

  return (
     <section id="process" className="w-full py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-white to-gray-100">

      {/* Header */}
      <div className="text-center mb-16" data-aos="fade-up">
        <h2 className="text-3xl md:text-5xl boldText mb-4 leading-tight"> Our Design Process</h2>
        <p className="italic text-lg text-[#666] mb-4">
           "Great design is invisible; great experiences are unforgettable."
        </p>
        <p className="max-w-3xl mx-auto text-black text-base/8 text-center">
          From initial concept to final launch, our structured design process ensures that every project is executed with precision, creativity, and a focus on delivering exceptional results that align with your business goals.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" id="process">
        {steps.map((step) => {
          const isCTA = step.cta;
          return (
            <div
              key={step.id}
              className={`rounded-2xl p-8 flex flex-col justify-between transition-all duration-500 border border-gray-100 shadow-md hover:shadow-lg ${
                isCTA
                  ? "bg-blue text-white hover:border-2 hover:border-white"
                  : "bg-white hover:border-2 hover:border-blue"
              }`}
           
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.05) 0px 0px 6px 0px, rgba(0, 0, 0, 0.05) 0px 0px 2px 0px",
              }}
            >
              {/* Icon + Number (skip number for CTA card if desired) */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-4 rounded-xl ${isCTA ? "bg-white/20" : "bg-[#f5deb3]/20"}`}>
                  {step.icon}
                </div>
                {!isCTA && (
                  <span className="text-4xl font-bold text-blue/20">{`0${step.id}`}</span>
                )}
              </div>

              {/* Title + Description */}
              <div className={`${isCTA ? "flex-grow" : ""}`}>
                <h3 className={`text-xl boldText mb-3 ${isCTA ? "text-white" : "text-[#111]"}`}>
                  {step.title}
                </h3>
                <p className={`${isCTA ? "text-white/90" : "text-black"} text-justify leading-relaxed text-base`}>
                  {step.desc}
                </p>
              </div>

              {/* CTA button at bottom if present */}
              {isCTA && (
                <a
                  href="#contact"
                  className="mt-6 inline-block bg-white text-blue px-4 py-3 rounded-3xl semiboldText text-center hover:bg-white/90 transition"
                >
                  Contact Us
                </a>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

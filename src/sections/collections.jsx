import React, { useState } from "react";
import { FaBookOpen } from "react-icons/fa";



const designStyles  = [
  {
    name: "Minimalist Design",
    image: "/img-40.jpg",
    description: "Clean, simple, and focused designs that emphasize clarity and purpose."
  },
  {
     name: "Modern & Bold",
    image: "/img-41.jpg",
    description: "Vibrant colors, strong typography, and dynamic layouts that make an impact."
  },
  {
     name: "Corporate Professional",
     image: "/img-42.jpg",
     description: "Sophisticated designs that convey trust, stability, and professionalism."
  },
  {
    name: "Creative & Artistic",
    image: "/img-43.jpg",
     description: "Innovative designs that push boundaries and showcase unique creativity."
  },
  {
    name: "E-commerce Focused",
    image: "/img-44.jpg",
    description: "User-friendly designs optimized for conversions and seamless shopping."
  },
  {
    name: "Responsive Web Design",
    image: "/img-45.jpg",
    description: "Adaptive designs that work flawlessly across all devices and screen sizes."
  },

];

const brandIdentity = [
 {
     name: "Logo Design",
    image: "/img-47.png",
     description: "Unique and memorable logos that capture brand essence."
  },
 
  {
     name: "Brand Guidelines",
    image: "/img-48.png",
    description: "Comprehensive brand manuals ensuring consistent visual identity."
  },

   {
   name: "Color Palette Systems",
    image: "/img-49.png",
     description: "Strategic color schemes that evoke specific emotions and recognition."
  },
  {
    name: "Typography Systems",
    image: "/img-50.png",
     description: "Carefully selected fonts that enhance readability and brand personality."
  },
   {
    name: "Visual Identity Suite",
    image: "/img-51.png",
    description: "Complete visual systems including icons, patterns, and graphic elements."
  },
   {
    name: "Brand Collateral",
    image: "/img-52.png",
    description: "Business cards, letterheads, and marketing materials that align with brand identity."
  }, 
];

const Collections = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsToShow =
     selectedCategory === "designStyles"
      ? designStyles
      : selectedCategory === "brandIdentity"
      ? brandIdentity
      : [];

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === itemsToShow.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? itemsToShow.length - 1 : prev - 1));

  return (
    <>
      {/* Main Cards */}
      <section className="py-20 px-6 md:px-16 lg:px-20 bg-gradient-to-b from-white to-gray-50 text-center">
        <h2 className="text-3xl md:text-5xl boldText mb-4 text-center">
          Our Design Collections
        </h2>
         <p className="text-[#333333] max-w-3xl mx-auto mt-4 text-sm mb-16 text-center mediumText leading-relaxed">
            Explore our curated design collections, each crafted to meet specific business needs and aesthetic preferences. From modern brand identities to functional web designs, we have a solution for every vision.
        </p>


        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {/* Design Styles Card */}
          <div
            onClick={() => { setSelectedCategory("designStyles"); setCurrentIndex(0); }}
            className="w-full md:w-1/2 cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
          >
            <img
              src="/img-53.jpg"
              alt="Blinds"
              className="w-full h-80 object-cover"
            />
            <div className="bg-[#4B3F28] text-white py-4 font-semibold text-lg">
                Design Styles
            </div>
          </div>

            {/* Brand Identity Card */}
          <div
            onClick={() => { setSelectedCategory("brandIdentity"); setCurrentIndex(0); }}
            className="w-full md:w-1/2 cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
          >
            <img
              src="/img-54.jpg"
              alt="Curtains"
              className="w-full h-80 object-cover"
            />
            <div className="bg-[#4B3F28] text-white py-4 font-semibold text-lg">
              Brand Identity
            </div>
          </div>
        </div>

         {/* Additional Info */}
        <div className="mt-12 max-w-3xl mx-auto">
          <p className="text-[#666666] text-sm italic">
            Click on any collection to view detailed examples and learn how each design approach can benefit your business.
          </p>
        </div>
      </section>

      {/* Modal Carousel */}
     {selectedCategory && (
  <div
    className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
    onClick={() => setSelectedCategory(null)}
  >
    <div
      className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden relative shadow-xl"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close Button */}
      <button
        onClick={() => setSelectedCategory(null)}
        className="absolute top-4 right-4 text-[#4b3f28] text-2xl font-bold hover:text-[#3b311d]"
        aria-label="Close the cards"
      >
        &times;
      </button>

      {/* Item Info */}
      <div className="text-center mt-8">
        <h3 className="text-black text-center font-bold text-xl">
          {itemsToShow[currentIndex].name}
        </h3>
      </div>

      <div className="flex flex-col items-center gap-6 p-6 sm:p-8">
        {/* Image Slider */}
        <div className="flex items-center justify-center w-full gap-3 md:gap-6">
          <button
            className="text-3xl font-bold text-[#4b3f28]/80 hover:text-[#4b3f28]"
            onClick={prevSlide}
            aria-label="Go to previous slide"
          >
            ‹
          </button>

          <img
            src={itemsToShow[currentIndex].image}
            alt={itemsToShow[currentIndex].name}
            className="w-[85%] sm:w-[90%] h-[260px] sm:h-[360px] object-cover rounded-xl shadow-md"
          />

          <button
            className="text-3xl font-bold text-[#4b3f28]/80 hover:text-[#4b3f28]"
            onClick={nextSlide}
            aria-label="Go to next slide"
          >
            ›
          </button>
        </div>

        {/* CTA Button */}
        <div className="mt-4 text-center">
          <button
            className="flex items-center justify-center gap-2 bg-[#4B3F28] text-white px-6 py-3 rounded-full font-medium hover:bg-[#3b311d] transition mx-auto"
             onClick={() => {
                    const designName = itemsToShow[currentIndex].name;
                    const categoryName = selectedCategory === "designStyles" ? "Design Styles" : "Brand Identity";
                    const phoneNumber = "14165557890"; // Toronto number format
                    const message = `Hi PixelForge Studio, I'm interested in learning more about ${designName} from your ${categoryName} collection. Can you share more details and pricing?`;
                    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                      message
                    )}`;
                    window.open(whatsappLink, "_blank");
                  }}
                  aria-label={`Request details for ${itemsToShow[currentIndex].name}`}
                >
            <FaBookOpen className="text-lg" />
            Request for Catalog
          </button>
           <p className="text-[#666666] text-xs mt-2">
                  Get pricing and more information about this design style
                </p>
        </div>

        {/* Image Dots */}
         <div className="flex justify-center mt-2 gap-2">
                {itemsToShow.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      idx === currentIndex
                        ? "bg-[#4b3f28] scale-125"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`View item ${idx + 1}`}
                  ></button>
                ))}
              </div>
              
              {/* Progress Indicator */}
              <div className="text-[#666666] text-sm">
                {currentIndex + 1} of {itemsToShow.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Collections;
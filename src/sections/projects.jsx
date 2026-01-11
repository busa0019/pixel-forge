import React, { useState } from "react";

const projects = [
  {
    id: 1,
    type: "TechNova Solutions",
    title: "Complete Brand Identity & Website Redesign",
    cover: "/img-10.png",
    images: [
      "/img-12.png",
      "/img-29.png",
      "/img-11.jpg",
      "/img-13.jpg",
      "/img-15.png",
      "/img-14.jpg",
    ],
    desc: "Complete brand transformation including new logo, color system, typography, and responsive website. The redesign resulted in a 40% increase in user engagement and 65% faster page load times. We implemented a modern design system that improved conversion rates by 45%.",
    category: "Brand Identity + Web Design",
    results: ["40% ↑ Engagement", "65% Faster Load", "45% ↑ Conversions"]
  },
  {
    id: 2,
    type: "Bloom & Grow",
    title: "E-commerce Platform & UI/UX Design",
    cover: "/img-21.jpg",
    images: [
      "/img-19.png",
      "/img-28.png",
      "/img-20.png",
      "/img-18.png",
      "/img-16.png",
    ],
     desc: "Designed and developed a modern e-commerce platform with intuitive user experience and seamless checkout process. Implemented responsive design, product filtering, and personalized recommendations. The platform saw a 120% increase in mobile conversions and 85% improvement in user retention.",
    category: "E-commerce + UI/UX",
    results: ["120% ↑ Mobile Conversions", "85% ↑ Retention", "30% ↓ Bounce Rate"]
  },
  {
    id: 3,
    type: "Artisan Coffee Co.",
    title: "Visual Identity & Packaging Design",
    cover: "/img-22.png",
    images: [
      "/img-23.png",
      "/img-24.png",
      "/img-25.png",
      "/img-26.png",
      "/img-27.png",
    ],
    desc: "Developed a comprehensive brand identity system including logo, packaging design, and marketing materials for a premium coffee brand. The design reflects the brand's commitment to quality and sustainability, resulting in a 200% increase in retail partnerships and 70% brand recognition improvement.",
    category: "Branding + Packaging",
    results: ["200% ↑ Partnerships", "70% ↑ Brand Recognition", "50% ↑ Sales"]
  },
  {
    id: 4,
    type: "Luna Cosmetics",
    title: "Product Launch Campaign & Motion Graphics",
    cover: "/img-30.jpg",
    images: [
      "/img-31.png",
      "/img-32.png",
      "/img-33.png",
      "/img-34.png",
      "/img-35.png",
      "/img-36.png",
      "/img-37.png",
      "/vid-1.mp4",
      "/vid-2.mp4",
      "/vid-3.mp4",
    ],
     desc: "Created a complete digital campaign including social media animations, product reveal videos, and interactive web elements. The motion graphics and animated content resulted in 300% increase in social media engagement and 85% higher email click-through rates during the product launch period.",
    category: "Motion Graphics + Campaign",
    results: ["300% ↑ Engagement", "85% ↑ CTR", "2M+ Views"]
  },
];

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  return (
    <>
      <section
        className="px-6 md:px-20 py-16"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-sine"
        id="projects"
      >
        <h2 className="text-3xl md:text-5xl boldText mb-4 text-center">
          Featured Projects
        </h2>
        <p className="text-[#333333] max-w-3xl mx-auto mt-4 text-sm mb-16 text-center mediumText leading-relaxed">
           Explore our portfolio of successful digital design projects that have helped businesses 
          transform their online presence and achieve measurable results.
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[250px]">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`relative overflow-hidden rounded-xl shadow-md hover:shadow-xl cursor-pointer ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              } ${index === 1 ? "md:row-span-2" : ""}`}
              onClick={() => {
                setSelectedProject(project);
                setCurrentIndex(0);
              }}
            >
              <img
                src={project.cover}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-black/50 w-full text-white p-3">
                 <div className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full mb-2">
                  <span className="text-sm font-medium">{project.category}</span>
                </div>
                <h2 className="boldText text-2xl">{project.type}</h2>
                <span className="mediumText text-base/6">{project.title}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/*  Modal placed outside section to make overlay full height */}

{selectedProject && (
  <div
    className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
    data-aos="zoom-in"
    onClick={() => setSelectedProject(null)}
  >
    <div
      className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden relative shadow-xl"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close Button */}
      <button
        onClick={() => setSelectedProject(null)}
        className="absolute top-4 right-4 text-[#4b3f28] text-2xl font-bold hover:text-[#3b311d]"
        aria-label="Close the card"
      >
        &times;
      </button>

      <div className="flex flex-col items-center gap-6 p-6 sm:p-8">
        {/* Category Badge */}
        <div className="self-start">
          <span className="px-3 py-1 bg-[#4b3f28]/10 text-[#4b3f28] rounded-full text-sm font-medium">
            {selectedProject.category}
          </span>
        </div>

        {/* Title */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedProject.type}</h3>
          <p className="text-gray-600 text-sm italic">{selectedProject.title}</p>
        </div>

        {/* Image Slider */}
        <div className="flex items-center justify-center w-full gap-3 md:gap-6">
          <button
            className="text-3xl font-bold text-[#4b3f28]/80 hover:text-[#4b3f28] w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#4b3f28]/10"
            onClick={prevSlide}
            aria-label="Show previous slide"
          >
            ‹
          </button>

          <img
            src={selectedProject.images[currentIndex]}
            alt={selectedProject.title}
            className="w-[85%] sm:w-[90%] h-[260px] sm:h-[300px] object-cover rounded-xl shadow-md"
          />

          <button
            className="text-3xl font-bold text-[#4b3f28]/80 hover:text-[#4b3f28] w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#4b3f28]/10"
            onClick={nextSlide}
            aria-label="Show next slide"
          >
            ›
          </button>
        </div>

        {/* Project Info */}
        <div className="text-center">
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            {selectedProject.desc}
          </p>
          
          {/* Results */}
          <div className="mt-4">
            <h4 className="font-bold text-gray-900 mb-3">Results Achieved</h4>
            <div className="flex flex-wrap justify-center gap-2">
              {selectedProject.results.map((result, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                >
                  {result}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Image Dots */}
        <div className="flex justify-center mt-2 gap-2">
          {selectedProject.images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "bg-[#4b3f28] scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`View image ${idx + 1}`}
            ></button>
          ))}
        </div>
        
        {/* CTA Button */}
        <button
          onClick={() => {
            setSelectedProject(null);
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="w-full bg-[#4b3f28] text-white py-3 rounded-lg font-medium hover:bg-[#3b311d] transition-colors"
        >
          Start Similar Project
        </button>
              </div>
            </div>
          </div>
        
      )}
    </>
  );
};

export default Project;
import React from "react";

export default function About() {
  return (
    <div
      id="about"
      className="w-full py-20 px-8 md:px-16 lg:px-20 flex flex-col-reverse lg:flex-row items-center text-center md:text-start justify-between gap-12"
      data-aos="fade-up"
    >
      

      {/* Left Side - content */}
       <div className="w-full lg:w-1/2" data-aos="fade-right">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
          About PixelForge 
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-gray-500 to-[#E5C8A6] mb-8"></div>

         <p className="text-gray-700 text-lg mb-6 leading-relaxed">
          We are a Toronto-based digital design studio focused on creating 
          exceptional visual experiences. Our approach combines strategic thinking 
          with creative execution to deliver designs that not only look stunning 
          but also achieve business objectives.
        </p>

                <p className="text-gray-700 text-lg mb-8 leading-relaxed">
          Specializing in brand identity, web design, and digital innovation, 
          we partner with forward-thinking companies to elevate their digital 
          presence and connect with their audience in meaningful ways.
        </p>
         <div className="space-y-4">
          <div className="flex items-start">
            <div className="mt-1 mr-4">
              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#4b3f28]"></div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Digital-First Approach</h3>
              <p className="text-gray-600">Designing for today's connected world</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="mt-1 mr-4">
              <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#4b3f28]"></div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Collaborative Process</h3>
              <p className="text-gray-600">Working together to achieve your vision</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="mt-1 mr-4">
              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#4b3f28]"></div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Results-Driven</h3>
              <p className="text-gray-600">Design that delivers measurable impact</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - image */}
      <div
        className="w-full lg:w-1/2  "
        data-aos="fade-left"
      >
        <img
          src="/img-2.png"
          alt="Creative Digital Design Process"
          className="rounded  w-full h-full"
        />
      <div className="absolute -bottom-4 -right-4 bg-white p-6 rounded-lg shadow-lg max-w-xs">
            <p className="text-gray-800 font-medium">"Design is intelligence made visible."</p>
            <p className="text-gray-500 text-sm mt-2">— Alina Wheeler</p>
          </div>
        </div>
      </div>
  );
}

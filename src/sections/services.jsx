import React from "react";


export default function Services() {
  const services = [
    {
      id: 1,
      title: "Brand Identity Design",
      desc: "Complete brand development including logos, color systems, typography, and comprehensive brand guidelines.",
      img: "/img-3.jpg",
      category: "Branding"
    },
    {
      id: 2,
      title: "Web Design & Development",
      desc: "Custom responsive websites with modern design, optimal performance, and seamless user experiences.",
      img: "/img-4.jpg",
      category: "Development"
    },
    {
      id: 3,
       title: "UI/UX Design",
      desc: "User-centered interface design for web and mobile applications with intuitive navigation and engaging interactions.",
      img: "/img-5.jpg",
      category: "Interface"
    },
    {
      id: 4,
      title: "Motion Graphics & Animation",
      desc: "Engaging animations for websites, social media, and marketing campaigns that bring brands to life.",
      img: "/img-6.jpg",
      category: "Animation"
    },
     {
      id: 5,
      title: "Marketing Collateral",
      desc: "Design of business cards, brochures, social media graphics, and promotional materials that stand out.",
      img: "/img-7.jpg",
      category: "Print"
    },
    {
      id: 6,
      title: "Digital Strategy",
      desc: "Comprehensive digital marketing strategies including social media design, email campaigns, and digital advertising.",
      img: "/img-8.jpg",
      category: "Strategy"
    }


  ];

  return (
    <section
      id="services"
      className="w-full py-20 px-6 md:px-16 lg:px-24 bg-[#f9f6f1]"
    >
      {/* Section Header */}
      <div  className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          Design Services
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed">
          We combine strategic thinking with creative execution to deliver 
          digital solutions that drive results and elevate brands.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={service.id}
            data-aos="fade-up"
            data-aos-delay={index * 200}
           className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2"
          >
            {/* Background Image */}
             <div className="relative h-64 md:h-80 w-full">
            <img
              src={service.img}
              alt={service.title}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-500"></div>
            

             {/* Category Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-800">
                  {service.category}
                </span>
              </div>
              
             

              {/* Text Content */}
              <div className="absolute bottom-0 p-6 text-white z-10">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  {service.title}
                </h3>
                <p className="text-white/90 text-sm md:text-base leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
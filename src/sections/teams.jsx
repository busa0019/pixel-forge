import { useState, useEffect, useRef } from "react";

export default function Teams() {
  const teamMembers = [
    {
      name: "Alex Morgan",
      role: "Creative Director & Founder",
      degree: "B.F.A. Digital Media, 10+ years experience",
      description:
        "With over a decade in digital design, Alex leads our creative vision with a passion for blending aesthetics with functionality. His expertise spans brand identity, UI/UX, and motion design, ensuring every project tells a compelling visual story.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      expertise: ["Brand Strategy", "UI/UX", "Motion Design"],
      contact: {
        phone: "+1 (416) 555-7890",
        email: "alex@pixelforgestudio.com"
      }
    },
    {
      name: "Sarah Chen",
      role: "Lead UI/UX Designer",
      degree: "M.Sc. Human-Computer Interaction",
      description:
        "Sarah specializes in creating intuitive user experiences through data-driven design. With a background in HCI, she bridges the gap between user needs and business goals, crafting interfaces that are both beautiful and functional.",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      expertise: ["User Research", "Wireframing", "Prototyping"],
      contact: {
        phone: "+1 (416) 555-7891",
        email: "sarah@pixelforgestudio.com"
      }
    },
    {
      name: "Marcus Rodriguez",
      role: "Lead Developer",
      degree: "B.Sc. Computer Science",
      description:
        "Marcus brings technical excellence to every project, specializing in responsive web development and performance optimization. He ensures our designs translate seamlessly into fast, efficient, and scalable digital experiences.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      expertise: ["Frontend Development", "Performance", "Web Standards"],
      contact: {
        phone: "+1 (416) 555-7892",
        email: "marcus@pixelforgestudio.com"
      }
    },
    {
      name: "Jasmine Williams",
      role: "Brand Strategist",
      degree: "B.A. Marketing & Design",
      description:
        "Jasmine develops comprehensive brand strategies that resonate with target audiences. Her background in both marketing and design allows her to create cohesive brand narratives that drive engagement and growth.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      expertise: ["Brand Development", "Market Research", "Digital Strategy"],
      contact: {
        phone: "+1 (416) 555-7893",
        email: "jasmine@pixelforgestudio.com"
      }
    },
  ];

  const [selectedMember, setSelectedMember] = useState(null);
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const animationRef = useRef(null);

  // Counter animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Start counter animation when stats are in view
          const targets = {
            projects: 50,
            rating: 4.9,
            years: 10,
            retention: 100
          };

          let currentCount = 0;
          const duration = 2000; // 2 seconds
          const increment = 1;

          const animate = () => {
            currentCount += increment;
            if (currentCount <= 100) { // Animate to 100%
              setCount(currentCount);
              animationRef.current = requestAnimationFrame(animate);
            }
          };

          animationRef.current = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  return (
    <section id="team" className="py-20  overflow-hidden">
      <div className="md:px-20 mx-auto px-6 text-center">
        {/* Header */}
        <div data-aos="flip-up" className="mb-8">
          <h2 className="text-3xl md:text-5xl boldText mb-4">
            Our Creative Team
          </h2>
          <i className="text-[#4b3f28]/90 max-w-2xl mediumText mx-auto text-base md:text-lg leading-relaxed block">
            Passionate designers, developers, and strategists creating digital excellence.
          </i>
        </div>

        <p
          data-aos="fade-zoom-in"
          data-aos-delay="200"
          className="text-[#333333] max-w-3xl mx-auto mt-4 text-sm mediumText leading-relaxed"
        >
          At PixelForge, our team is our greatest asset. Comprising seasoned designers, developers, and strategists, we bring diverse expertise and a shared passion for crafting exceptional digital experiences. Together, we collaborate closely with our clients to transform ideas into impactful designs that resonate and deliver results.
        </p>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={index * 150}
              onClick={() => setSelectedMember(member)}
              className="cursor-pointer group relative overflow-hidden rounded-2xl shadow-lg transition-transform duration-500 hover:-translate-y-1"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Gradient Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#4b3f28]/100 via-[#4b3f28]/60 to-transparent p-6 text-left">
                <h3 className="text-white text-2xl font-bold">{member.name}</h3>
                <p className="text-white/90 text-sm">{member.role}</p>
                
                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-1 mt-2">
                  {member.expertise.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="px-2 py-0.5 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white/90"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Info */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#4b3f28]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div>
                  <button className="mt-3 text-xs font-medium text-white underline hover:no-underline transition-all">
                    View Profile →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Animated Stats Section */}
        <div 
          ref={countRef}
          className="mt-20 relative overflow-hidden"
          data-aos="fade-up"
        >
          {/* Infinite Scrolling Background */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="animate-scroll-left inline-flex whitespace-nowrap">
              
            </div>
          </div>

          {/* Stats Grid */}
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {/* Project Counter */}
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-[#4b3f28] mb-2 relative">
                <div className="animate-pulse-slow absolute inset-0 bg-gradient-to-r from-transparent via-[#4b3f28]/10 to-transparent"></div>
                <span className="relative">
                  <span className="animate-count-up">50</span>+
                </span>
              </div>
              <div className="text-[#333333] text-sm">Projects Completed</div>
            </div>

            {/* Rating Counter */}
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-[#4b3f28] mb-2 relative">
                <div className="animate-pulse-slow absolute inset-0 bg-gradient-to-r from-transparent via-[#4b3f28]/10 to-transparent"></div>
                <span className="relative">
                  <span className="animate-count-up">4.9</span>
                  <span className="text-2xl text-[#4b3f28]/60">/5</span>
                </span>
              </div>
              <div className="text-[#333333] text-sm">Client Rating</div>
            </div>

            {/* Years Counter */}
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-[#4b3f28] mb-2 relative">
                <div className="animate-pulse-slow absolute inset-0 bg-gradient-to-r from-transparent via-[#4b3f28]/10 to-transparent"></div>
                <span className="relative">
                  <span className="animate-count-up">10</span>+
                </span>
              </div>
              <div className="text-[#333333] text-sm">Years Combined</div>
            </div>

            {/* Retention Counter with Animation */}
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-[#4b3f28] mb-2 relative">
                <div className="animate-pulse-slow absolute inset-0 bg-gradient-to-r from-transparent via-[#4b3f28]/10 to-transparent"></div>
                <span className="relative animate-spin-slow">
                  <span className="block">{count}%</span>
                </span>
              </div>
              <div className="text-[#333333] text-sm">Client Retention</div>
            </div>
          </div>

          {/* Infinite Scrolling Testimonials */}
          <div className="mt-12 relative overflow-hidden">
            <div className="animate-scroll-right inline-flex whitespace-nowrap">
              {[...Array(8)].map((_, i) => (
                <span key={i} className="text-[#4b3f28]/30 text-2xl font-semibold mx-6">
                  Exceptional Design • Pixel Perfect • Creative Excellence • Professional Team • Great Results •
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedMember && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          data-aos="zoom-in"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden relative shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 text-[#4b3f28] text-2xl font-bold hover:text-[#3b311d]"
            >
              &times;
            </button>

            <div className="flex flex-col md:flex-row items-center gap-6 p-8">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-64 h-64 object-cover rounded-xl shadow-md"
              />
              <div className="text-left">
                <h3 className="text-2xl font-bold text-[#4b3f28]">
                  {selectedMember.name}
                </h3>
                <p className="text-[#4b3f28]/80 font-medium mt-1">
                  {selectedMember.role}
                </p>
                <p className="italic text-sm text-[#4b3f28]/70 mt-1">
                  {selectedMember.degree}
                </p>
                <p className="mt-4 text-[#4b3f28]/90 leading-relaxed text-sm md:text-base">
                  {selectedMember.description}
                </p>
                
                {/* Contact Info */}
                <div className="mt-8 pt-6 border-t border-[#e8e2d6]">
                  <h4 className="font-bold text-[#4b3f28] mb-3">Contact Information</h4>
                  
                  {/* Phone Number */}
                  <div className="flex items-center gap-3 mb-3">
                    <svg className="w-5 h-5 text-[#4b3f28]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a 
                      href={`tel:${selectedMember.contact.phone.replace(/\D/g, '')}`}
                      className="text-[#4b3f28] hover:text-[#3b311d] hover:underline transition-colors"
                    >
                      {selectedMember.contact.phone}
                    </a>
                  </div>
                  
                  {/* Email */}
                  <div className="flex items-center gap-3 mb-4">
                    <svg className="w-5 h-5 text-[#4b3f28]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a 
                      href={`mailto:${selectedMember.contact.email}`}
                      className="text-[#4b3f28] hover:text-[#3b311d] hover:underline transition-colors"
                    >
                      {selectedMember.contact.email}
                    </a>
                  </div>
                  
                  {/* Professional Links */}
                  <div className="flex items-center gap-4 mt-6">
                    <a 
                      href="#projects"
                      onClick={() => {
                        setSelectedMember(null);
                        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="px-6 py-2 bg-[#4b3f28] text-white rounded-lg hover:bg-[#3b311d] transition-colors"
                    >
                      View Our Work
                    </a>
                    <a 
                      href="https://linkedin.com/company/pixelforgestudio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 border border-[#4b3f28] text-[#4b3f28] rounded-lg hover:bg-[#f9f6f1] transition-colors"
                    >
                      Follow on LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      
    </section>
  );
}
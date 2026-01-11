import React, { useEffect, useRef, useState } from "react";
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "PixelForge completely transformed our brand identity and website. Their attention to detail and strategic approach resulted in a 40% increase in user engagement within the first month. Their team understood our vision perfectly and delivered beyond expectations.",
      name: "Michael Chen",
      role: "CEO, TechNova Solutions",
      rating: 5,
      company: "tech company"
    },
    {
      id: 2,
      text: "Working with PixelForge was a game-changer for our digital presence. Their UI/UX design not only looks stunning but also improved our conversion rates by 65%. Their collaborative approach made the entire process seamless and enjoyable.",
      name: "Sarah Johnson",
      role: "Marketing Director, Bloom & Grow",
      rating: 5,
      company: "e-commerce platform"
    },
    {
      id: 3,
      text: "The team at PixelForge took our outdated website and turned it into a modern, responsive masterpiece. Their development expertise and design sensibility created an exceptional user experience that perfectly represents our brand.",
      name: "David Rodriguez",
      role: "Founder, Artisan Coffee Co.",
      rating: 5,
      company: "retail brand"
    },
    {
      id: 4,
      text: "Their motion graphics and animation work brought our product to life in ways we never imagined. The engagement on our social media campaigns increased by 300% after implementing their designs. Truly outstanding creative work!",
      name: "Lisa Wang",
      role: "Creative Director, Luna Cosmetics",
      rating: 5,
      company: "beauty brand"
    },
    {
      id: 5,
      text: "PixelForge's strategic approach to our rebranding project was exceptional. They delivered a cohesive brand identity that resonates with our target audience and has significantly boosted our market presence. Professional, talented, and reliable.",
      name: "Robert Kim",
      role: "VP of Operations, FinTrust Bank",
      rating: 5,
      company: "financial services"
    },
    {
      id: 6,
      text: "The responsive web design they created for our startup has been instrumental in securing investor funding. Their ability to translate complex ideas into intuitive designs is remarkable. Highly recommend their services!",
      name: "Amanda Park",
      role: "Co-founder, HealthTrack AI",
      rating: 5,
      company: "health tech startup"
    }
  ];

  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-scroll functionality
  useEffect(() => {
    if (isHovered) return; // Pause auto-scroll when hovered

    const container = scrollRef.current;
    if (!container) return;

    const scrollToNext = () => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % testimonials.length;
        const cardWidth = container.scrollWidth / testimonials.length;
        
        if (next === 0) {
          // Reset to start for smooth infinite scroll
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollTo({
            left: next * cardWidth,
            behavior: "smooth",
          });
        }
        return next;
      });
    };

    const scrollInterval = setInterval(scrollToNext, 5000); // 5 seconds per scroll

    return () => clearInterval(scrollInterval);
  }, [testimonials.length, isHovered]);

  // Track scroll position for dot highlighting
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.scrollWidth / testimonials.length;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(index, testimonials.length - 1));
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [testimonials.length]);

  // Manual navigation functions
  const scrollToIndex = (index) => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = container.scrollWidth / testimonials.length;
    container.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  const nextTestimonial = () => {
    const nextIndex = (activeIndex + 1) % testimonials.length;
    scrollToIndex(nextIndex);
  };

  const prevTestimonial = () => {
    const prevIndex = (activeIndex - 1 + testimonials.length) % testimonials.length;
    scrollToIndex(prevIndex);
  };

  // Render star ratings
  const renderStars = (rating) => {
    return (
      <div className="flex gap-1 mb-3">
        {[...Array(rating)].map((_, i) => (
          <FaStar key={i} className="text-yellow-400 text-sm" />
        ))}
      </div>
    );
  };
  return (
    <section
      id="testimonials"
      className="w-full py-20 px-6 md:px-16 lg:px-20 bg-[#f9f6f1]"
      data-aos="fade-up"
    >
{/* Section Header */}
      <div
        className="mb-14 text-center"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          Client Success Stories
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Hear from businesses we've helped transform through exceptional digital design.
        </p>
      </div>

      {/* Stats Bar */}
      <div className="max-w-4xl mx-auto mb-12 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="text-center p-4 bg-white rounded-xl shadow-sm">
          <div className="text-3xl font-bold text-[#4b3f28]">4.9/5</div>
          <div className="text-gray-600 text-sm">Average Rating</div>
        </div>
        <div className="text-center p-4 bg-white rounded-xl shadow-sm">
          <div className="text-3xl font-bold text-[#4b3f28]">50+</div>
          <div className="text-gray-600 text-sm">Happy Clients</div>
        </div>
        <div className="text-center p-4 bg-white rounded-xl shadow-sm">
          <div className="text-3xl font-bold text-[#4b3f28]">95%</div>
          <div className="text-gray-600 text-sm">Repeat Business</div>
        </div>
        <div className="text-center p-4 bg-white rounded-xl shadow-sm">
          <div className="text-3xl font-bold text-[#4b3f28]">100%</div>
          <div className="text-gray-600 text-sm">On-Time Delivery</div>
        </div>
      </div>

      {/* Testimonials Slider Container */}
      <div className="relative max-w-6xl mx-auto">
        {/* Navigation Buttons */}
        <button
          onClick={prevTestimonial}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center hover:bg-gray-50 transition-colors"
          aria-label="Previous testimonial"
        >
          <FaChevronLeft className="text-[#4b3f28]" />
        </button>
        
        <button
          onClick={nextTestimonial}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center hover:bg-gray-50 transition-colors"
          aria-label="Next testimonial"
        >
          <FaChevronRight className="text-[#4b3f28]" />
        </button>

        {/* Testimonials Slider */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 scroll-smooth px-4 md:px-0"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`min-w-[85%] md:min-w-[45%] lg:min-w-[30%] bg-white rounded-2xl p-8 flex flex-col shadow-lg hover:shadow-xl transition-all duration-500 snap-start border border-gray-100 ${
                activeIndex === index ? 'border-[#4b3f28]/20' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <FaQuoteLeft className="text-[#4b3f28] text-3xl opacity-30" />
                <span className="text-xs font-medium px-3 py-1 bg-[#4b3f28]/10 text-[#4b3f28] rounded-full">
                  {testimonial.company}
                </span>
              </div>

              <div className="mb-6 flex-grow">
                {renderStars(testimonial.rating)}
                <p className="text-gray-700 text-base/7 leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <h4 className="font-bold text-lg text-gray-900 mb-1">
                  {testimonial.name}
                </h4>
                <p className="text-gray-600 text-sm">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Dots & Navigation for Mobile */}
        <div className="flex flex-col items-center gap-4 mt-8">
          {/* Dots */}
          <div className="flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === i
                    ? "bg-[#4b3f28] scale-110"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              ></button>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden gap-4">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft className="text-[#4b3f28]" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Next testimonial"
            >
              <FaChevronRight className="text-[#4b3f28]" />
            </button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-3xl mx-auto mt-16 text-center">
        <div className="bg-gradient-to-r from-[#4b3f28]/5 to-[#4b3f28]/10 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to See What We Can Do for You?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join our growing list of satisfied clients who have transformed their digital presence.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-[#4b3f28] text-white font-semibold rounded-lg hover:bg-[#3b311d] transition-colors shadow-md hover:shadow-lg"
          >
            Start Your Project
          </a>
        </div>
      </div>

      {/* Hide scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
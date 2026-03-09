import { IoMdArrowDropright } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div
      className="heroSection flex flex-col md:flex-row items-center justify-center md:justify-between 
      px-6 md:px-16 lg:px-20  h-auto relative overflow-hidden
      pt-[calc(10rem+env(safe-area-inset-top))] md:pt-0"
      id="hero"
      data-aos="fade-up"
    >
      {/* Left Side - Text */}
      <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left w-full md:w-1/2 z-10">
        <h1 className="text-white font-bold text-3xl md:text-6xl leading-tight md:leading-tighter tracking-normal">
          <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            Crafting Digital Experiences
          </span>
          <br />
          <span className="text-white">That Drive Results</span>
        </h1>

        <p className="mt-4 text-white text-md md:text-lg mediumText max-w-md">
          We transform ideas into compelling digital designs that captivate audiences and elevate brands.
        </p>

        <Link
          to="/contact"
          className="inline-flex bg-white text-blue items-center semiboldText justify-center gap-2 mt-6 
          hover:border hover:border-white px-6 py-3 rounded-3xl shadow-xl 
          hover:bg-transparent hover:text-white transition duration-300 group"
        >
          Book Consultation
          <IoMdArrowDropright className="text-blue group-hover:text-white transition" />
        </Link>
      </div>

      {/* CTA Section */}
      <div className="md:absolute md:right-24 md:bottom-10 w-full md:w-[580px] transform rotate-[-0deg] mt-8">
        <div
          className="flex flex-col md:flex-row items-center md:items-center justify-between 
          backdrop-blur-md bg-black/5 border border-white/10 rounded-2xl 
          p-6 md:p-6 gap-6 md:gap-10 max-w-4xl w-full"
        >
          {/* Left Image */}
          <div className="w-full md:w-1/2 overflow-hidden rounded-xl">
            <img
              src="https://www.frezza.com/wp-content/uploads/2024/11/semplicita-ed-eleganza-idee-e-ispirazioni-per-un-arredo-ufficio-in-stile-minimal-min-2000x1100-c-center.webp"
              alt="Digital Design Workspace"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Right Text Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2 space-y-6">
            <p className="text-white mediumText">
              We craft exceptional digital experiences through strategic design, innovative web solutions, and compelling brand storytelling.
            </p>

            <Link
              to="/#projects"
              className="text-[#E5C8A6] semiboldText py-3 inline-flex items-center justify-center gap-2
              hover:border-b-4 hover:border-[#E5C8A6] transition duration-300"
            >
              <span>View Our Works</span>
              <GoArrowUpRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
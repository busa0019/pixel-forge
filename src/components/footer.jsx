import React from "react";
import {
   FaFacebookF,
  FaInstagram,
  FaLocationDot,
  FaLinkedinIn,
  FaXTwitter,
  FaDribbble,
  FaBehance,
  FaTiktok,
} from "react-icons/fa6";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import logo from "/pfs-2.png";

export default function Footer() {
   const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f9f6f1] text-black py-16 px-6 md:px-16 lg:px-24 mt-10">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr_1fr] gap-8 lg:gap-12 items-start">
        {/* Brand & Tagline - First Column */}
        <div className="flex flex-col items-start text-left space-y-3">
          <img
            src={logo}
            alt="PixelForge Studio Logo"
            className="w-36 object-contain mb-2"
          />
          <p className="text-md leading-relaxed italic">
            "Where pixels meet purpose, brands are born."
          </p>
          <p className="semiboldText text-base/6 text-[#333333]">
             We transform ideas into compelling digital experiences that captivate audiences and elevate brands.
          </p>
        </div>

        {/* Quick Links - Second Column */}
        <div className="flex flex-col items-start lg:ml-12">
          <h4 className="text-lg boldText mb-4 text-black">Quick Links</h4>
          <ul className="space-y-3 text-[#333333] semiboldText text-base/6">
            <li>
              <a href="#home" className="hover:text-blue transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue transition">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-blue transition">
                Services
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue transition">
                Contact
              </a>
            </li>
          </ul>
        </div>
         <div className="flex flex-col items-start">
          <h4 className="text-lg boldText mb-4 text-black">Legal</h4>
          <ul className="space-y-3 text-[#333333] semiboldText text-base/6">
            <li>
              <a href="#terms" className="hover:text-blue transition">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#privacy" className="hover:text-blue transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#cookies" className="hover:text-blue transition">
                Cookie Policy
              </a>
            </li>
            <li>
              <a href="#disclaimer" className="hover:text-blue transition">
                Disclaimer
              </a>
            </li>
          </ul>
        </div>
        {/* Contact Info - Third Column */}
        <div className="flex flex-col items-start">
          <h4 className="text-lg boldText mb-4 text-black">Contact</h4>
          <ul className="space-y-3 text-[#333333] semiboldText text-base/6">
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-blue" />
              <a
                href="mailto:hello@pixelforgestudio.com"
                className="hover:text-black transition mt-0"
              >
                hello@pixelforgestudio.com
              </a>
            </li>
             <li className="flex items-start gap-3">
              <FaPhoneAlt className="text-[#4b3f28] mt-1 flex-shrink-0" />
              <a
                href="tel:+14165557890"
                className="hover:text-[#4b3f28] transition-colors duration-300"
              >
                +1 (416) 555-7890
              </a>
            </li>
             <li className="flex items-start gap-3">
              <FaLocationDot className="text-[#4b3f28] mt-1 flex-shrink-0" />
              <span className="text-[#333333]">
                123 Design District,<br />
                Toronto, ON M5V 2T6<br />
                Canada
              </span>
            </li>
          </ul>
        </div>

 {/* Social Media & Newsletter - Fourth Column */}
  <div className="flex flex-col items-start">
    <h4 className="text-lg font-bold mb-4 text-[#4b3f28]">Connect With Us</h4>
    
    {/* Social Icons - Consistent styling */}
    <div className="flex items-center gap-3 mb-6 flex-wrap">
      <a
        href="https://linkedin.com/company/pixelforgestudios"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 text-white flex items-center justify-center bg-[#4b3f28] rounded-full hover:bg-[#3b311d] transition-colors duration-300"
        aria-label="LinkedIn"
      >
        <FaLinkedinIn />
      </a>
      <a
        href="https://instagram.com/pixelforgestudios"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 text-white flex items-center justify-center bg-[#4b3f28] rounded-full hover:bg-[#3b311d] transition-colors duration-300"
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>
      <a
        href="https://dribbble.com/pixelforgestudios"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 text-white flex items-center justify-center bg-[#4b3f28] rounded-full hover:bg-[#3b311d] transition-colors duration-300"
        aria-label="Dribbble"
      >
        <FaDribbble />
      </a>
      <a
        href="https://behance.net/pixelforgestudios"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 text-white flex items-center justify-center bg-[#4b3f28] rounded-full hover:bg-[#3b311d] transition-colors duration-300"
        aria-label="Behance"
      >
        <FaBehance />
      </a>
      <a
        href="https://twitter.com/pixelforgestudios"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 text-white flex items-center justify-center bg-[#4b3f28] rounded-full hover:bg-[#3b311d] transition-colors duration-300"
        aria-label="Twitter"
      >
        <FaXTwitter />
      </a>
    </div>
    
  </div>
  {/* Newsletter Signup */}
     <div className="flex flex-col items-start lg:ml-12"></div>
    <div className="w-full">
      <h4 className="text-lg boldText mb-4 text-black">Newsletter</h4>
      <p className="text-sm text-[#666] mb-2">Get exclusive design content</p>
      <form className="flex gap-2">
        <input
          type="email"
          placeholder="Your email"
          className="flex-grow px-4 py-2 rounded-lg border border-[#4b3f28]/30 focus:outline-none focus:border-[#4b3f28] text-sm"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-[#4b3f28] text-white rounded-lg hover:bg-[#3b311d] transition-colors duration-300 text-sm font-medium"
        >
          Subscribe
        </button>
      </form>
    </div>
</div>


    

      {/* Divider & Copyright */}
      <div className="border-t border-gray-300 mt-12 pt-6 text-center text-gray-600 text-sm">
     <p className="text-gray-600 text-sm">
          © {currentYear} PixelForge Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

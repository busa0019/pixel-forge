import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="flex justify-between items-center py-6 md:px-20 px-8 md:space-x-8 lg:space-x-6 bg-white shadow w-full fixed z-50">
      <Link to="/" onClick={() => setOpenMenu(false)}>
        <div className="Logo">
          <img src="/pfs.png" alt="PixelForge Studio" className="w-30" />
        </div>
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex md:mx-10 lg:flex space-x-12 lg:space-x-10 md:space-x-6">
        <li>
          <Link to="/" className="text-black hover:text-blue semiboldText">
            Home
          </Link>
        </li>
        <li>
          <Link to="/#about" className="text-black hover:text-blue semiboldText">
            About
          </Link>
        </li>
        <li>
          <Link to="/#services" className="text-black hover:text-blue semiboldText">
            Services
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-black hover:text-blue semiboldText">
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="text-white bg-blue px-8 py-3 rounded-3xl shadow-xl semiboldText
              border border-transparent hover:border-2 hover:border-blue
              hover:bg-white hover:text-black transition duration-300"
          >
            Book Consultation
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <button
        className="lg:hidden md:hidden"
        aria-label="open menu"
        onClick={() => setOpenMenu(!openMenu)}
        type="button"
      >
        {openMenu ? <IoCloseOutline className="w-8 h-8" /> : <RiMenu3Fill className="w-8 h-8" />}
      </button>

      {/* Mobile Menu */}
      {openMenu && (
        <ul className="fixed top-16 left-0 w-full bg-white shadow-lg flex flex-col items-start px-10 space-y-6 py-8 md:hidden z-50">
          <li>
            <Link to="/" className="text-black hover:text-blue semiboldText" onClick={() => setOpenMenu(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/#about" className="text-black hover:text-blue semiboldText" onClick={() => setOpenMenu(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/#services" className="text-black hover:text-blue semiboldText" onClick={() => setOpenMenu(false)}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-black hover:text-blue semiboldText" onClick={() => setOpenMenu(false)}>
              Contact
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="text-white bg-blue px-6 py-3 rounded-3xl shadow-xl semiboldText
                border border-transparent hover:border-2 hover:border-blue
                hover:bg-white hover:text-black transition duration-300 font-bold"
              onClick={() => setOpenMenu(false)}
            >
              Book Consultation
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
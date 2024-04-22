import React, { useState } from "react";
import Logo from "../assests/main-logo.png";
import { FaBars, FaTimes, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-scroll";

export const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  // 0a192f
  return (
    <div className="fixed w-full h-[70px] flex justify-between items-center px-16 bg-[#0a192f] text-gray-300 ">
      <div>
        <img src={Logo} alt="main logo" style={{ width: "45px" }} />
      </div>

      {/* Menu */}
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={400}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={400}>
            About
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={400} offset={-90}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={400}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute w-full h-screen top-0 left-0 bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6  text-4xl">Home</li>
        <li className="py-6  text-4xl">About</li>
        <li className="py-6  text-4xl">Work</li>
        <li className="py-6  text-4xl">Contact</li>
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[150px] h-[50px] flex justify-between itens-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#4267B2]">
            <a
              className="flex justify-between items-center text-gray-300 w-full font-bold pl-1"
              href="https://www.linkedin.com/in/huzaifa-roomaney-38a145185/"
            >
              LinkedIn
              <span className="pl-4">
                <FaLinkedin size={30} />
              </span>
            </a>
          </li>
          <li className="w-[150px] h-[50px] flex justify-between itens-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#E1306C]">
            <a
              className="flex justify-between items-center text-gray-300 w-full font-bold pl-1"
              href="https://www.instagram.com/huzaifa_roomaney/"
            >
              Instagram
              <span className="pl-2">
                <FaInstagram size={30} />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 border-b-2 border-pink-600 z-30">
      <div>
        <Link to="home" smooth="true">
          <img
            src={Logo}
            alt="Logo"
            style={{ width: "50px", cursor: "pointer" }}
          />
        </Link>
      </div>

      {/* MENU */}
      <ul className="hidden md:flex">
        <li>
          <Link
            className="hover:border-b-2 border-pink-600"
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="hover:border-b-2 border-pink-600"
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="hover:border-b-2 border-pink-600"
            to="skills"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            className="hover:border-b-2 border-pink-600"
            to="work"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            className="hover:border-b-2 border-pink-600"
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* HAMBURGER */}
      <div className="md:hidden z-20" onClick={handleClick}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* MOBILE MENU */}

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center z-10"
        }
      >
        <li className="py-6 text-4xl">
          <Link
            className="hover:border-b-2 border-pink-600"
            onClick={handleClick}
            to="home"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            className="hover:border-b-2 border-pink-600"
            onClick={handleClick}
            to="about"
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            className="hover:border-b-2 border-pink-600"
            onClick={handleClick}
            to="skills"
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            className="hover:border-b-2 border-pink-600"
            onClick={handleClick}
            to="work"
            smooth={true}
            duration={500}
          >
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            className="hover:border-b-2 border-pink-600"
            onClick={handleClick}
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* SOCIAL ICONS */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/ealsa"
              target="_blank"
              rel="noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#6fc2b0]">
            <Link
              className="flex justify-between items-center w-full text-gray-300"
              to="contact"
              smooth={true}
            >
              Email <HiOutlineMail size={30} />
            </Link>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

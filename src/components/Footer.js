import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { saveFile } from "./Navbar";

const Footer = () => {
  return (
    <div className="lg:hidden w-full mx-auto h-[120px] flex justify-center items-center px-4 bg-[#0a192f] text-gray-300 border-t-2 border-pink-600">
      <ul className="flex justify-center items-center w-[100%]">
        <li className="w-[160px] h-[60px] flex justify-center items-center">
          <a
            className="flex justify-center items-center w-[90%] h-full text-yellow-200 bg-black font-bold rounded-xl"
            href="https://github.com/ealsa"
            target="_blank"
            rel="noreferrer"
          >
            <span className="px-1 text-xs">Github</span> <FaGithub size={20} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-center items-center">
          <a
            className="flex justify-center items-center w-[90%] h-full text-yellow-200 bg-black font-bold rounded-xl"
            href="https://www.linkedin.com/in/ec-alsancak/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="px-1 text-xs">LinkedIn</span>{" "}
            <FaLinkedin size={20} />
          </a>
        </li>
        <li className="flex justify-center items-center w-[160px] h-[60px] border-2 border-pink-600">
          <button
            className="flex justify-center items-center w-[90%] h-full text-yellow-200 bg-black font-bold rounded-xl"
            onClick={saveFile}
          >
            <span className="text-xs px-1">Resume</span>{" "}
            <BsFillPersonLinesFill size={20} />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Footer;

import React from "react";
import { AiFillGithub } from "react-icons/ai";
import works from "./Works";

const Work = () => {
  return (
    <div name="work" className="bg-[#0a192f] md:h-screen text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        {/* Container */}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Grid */}
          {works.map((el) => (
            <div
              key={el.id}
              style={{ backgroundImage: `url(${el.img})` }}
              className="shadow-lg shadow-[#1b3b61] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-110 transition-all duration-500 ease-out z-0"
            >
              {/* Hover effects */}
              <div className="opacity-0 group-hover:opacity-100 duration-700">
                <div className="w-full text-2xl font-bold text-yellow-200 tracking-wider flex justify-center items-center flex-col">
                  <span className="p-4">{el.title}</span>
                  <span>{el.name}</span>
                </div>
                <div className="pt-8 text-center">
                  <a href={el.demoLink} target="_blank" rel="noreferrer">
                    <button className="transition-all duration-500 ease-out border border-yellow-200 hover:scale-110 text-center rounded-lg px-4 py-3 m-2 bg-black text-yellow-200 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a href={el.gitLink} target="_blank" rel="noreferrer">
                    <button className="transition-all duration-500 ease-out hover:scale-110 text-center rounded-lg px-4 py-3 m-2 ml-10 border border-yellow-200 bg-black text-yellow-200 font-bold text-lg">
                      <span className="flex justify-center items-center">
                        Source
                        <AiFillGithub
                          style={{
                            width: "20px",
                            color: "red",
                            marginLeft: "10px",
                          }}
                        />
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* <div
            style={{ backgroundImage: `url(${realEstate})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            Hover effects
            <div className="opacity-0 group-hover:opacity-100 duration-700">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Source
                  </button>
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Work;

import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-8">
          <div className="sm:text-right text-4xl font-bold text-white">
            <p>Hi. I'm Emre, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p className="pt-2 text-white leading-7 text-lg">
              I am a solution oriented Front-End Developer. I'm passionate about
              problem solving, building accessible and responsive web
              applications that improves the lives of those around me.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

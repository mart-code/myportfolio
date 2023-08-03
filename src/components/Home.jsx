import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className=" w-full h-screen bg-slate-950">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto py-8 px-8 flex flex-col justify-center h-full">
        <p className="text-blue-700">My name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-gray-100">
          Ayanfeoluwa Adewoyin
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-gray-500">
          I'm a FullStack Developer
        </h2>
        <p className="text-gray-500 py-4 max-w-[700px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
          voluptates voluptatem hic mollitia alias ex, doloribus quod sit omnis
          modi.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-700 hover:border-blue-700 duration-100">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

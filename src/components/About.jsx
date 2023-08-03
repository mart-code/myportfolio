import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-slate-950 text-gray-300 mb-20"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-blue-700">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full sm:grid grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi, I'm Ayanfeoluwa, nice to meet you, Please take a look around
            </p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem dolorum placeat quos magnam adipisci molestiae vitae
              quibusdam quidem, amet dolor officiis reiciendis, quas sit nisi
              repellat tempora praesentium dolores nostrum dicta. Quidem velit
              vitae expedita eos quibusdam enim doloremque magnam?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

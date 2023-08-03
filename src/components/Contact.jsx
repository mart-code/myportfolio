import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-slate-950 flex justify-center items-center p-4"
    >
      <form
        action="https://getform.io/f/2d261742-b46d-4c28-9e9e-f6394e7d1351"
        method="POST"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-blue-700 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or shoot me an email - aamadewoyin@gmail.com
          </p>
        </div>
        <input
          className="p-2 bg-[#ccd6f6]"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          name="message"
          className=" bg-[#ccd6f6] p-2"
          placeholder="Message"
          rows="10"
        ></textarea>
        <button className="text-white border-2 hover:bg-blue-700 hover:border-blue-700 px-4 py-3 my-8 mx-auto flex items-center duration-100">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;

import React from "react";

const Contact = () => {
  return (
    <>
      <div className="w-11/12 mx-auto">
      <h1 className="text-white text-2xl sm:text-5xl font-bold text-center my-12">
      Contact Us
        </h1>
        <div className="text-white w-full flex gap-10 mt-10 flex-wrap">
          <div className="flex flex-col sm:w-[48%] gap-6 w-full">
            <input
              type="text"
              placeholder="Enter Your name"
              className="h-10 rounded-md px-3 bg-[#1a1a1a] outline-none border border-opacity-20 border-white text-sm"
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              className="h-10 rounded-md px-3 bg-[#1a1a1a] outline-none border border-opacity-20 border-white text-sm"
            />
            <input
              type="phone"
              placeholder="Enter you Phone"
              className="h-10 rounded-md px-3 bg-[#1a1a1a] outline-none border border-opacity-20 border-white text-sm"
            />
            <textarea
              placeholder="Enter message here"
              cols={20}
              rows={6}
              className="rounded-md px-3 py-2 bg-[#1a1a1a] outline-none border border-opacity-20 border-white text-sm"
            />
            <button className="border p-3 rounded-md hover:bg-white hover:text-black font-bold">Submit</button>
          </div>
          <div className="sm:w-[48%] w-full flex flex-col gap-8">
            <p className="text-white flex gap-3 items-center">
              <i class="fa-solid fa-envelope"></i>
              ibderrahman356@gmail.com
            </p>
            <p className="text-white flex gap-3 items-center">
              <i class="fa-solid fa-location-dot"></i>
              Riverside Building, County Hall, London SE1 7PB, United Kingdom{" "}
            </p>
            <p className="text-white flex gap-3 items-center">
              <i class="fa-solid fa-phone"></i>
              +44 5421234560{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

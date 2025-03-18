import { React, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="w-11/12 mx-auto flex items-center justify-between text-white px-5 py-3 ">
        <img src="/img/logo.png" alt="logo" className="logo w-auto h-auto" />
        <ul className="flex items-center justify-between gap-8 list_items">
          <li>
            <a href="/" className="hover:border-b hover:border-white translate-y-1">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:border-b hover:border-white translate-y-1">About</a>
          </li>
          <li>
            <a href="#project" className="hover:border-b hover:border-white translate-y-1">Projects</a>
          </li>
          <li>
            <a href="#career" className="hover:border-b hover:border-white translate-y-1">Career</a>
          </li>
          <li>
            <a href="#contact" className="hover:border-b hover:border-white translate-y-1">Contact</a>
          </li>
        </ul>
        <img
          src="/img/a.png"
          alt="menu"
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        />
      </nav>
      <div className="relative">
        <ul
          className={`md:hidden absolute top-0 right-0 z-50 flex flex-col rounded-md bg-white text-black w-1/2 space-y-4 p-4 shadow-lg transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <li>
            <a
              href="/"
              className="block border-b border-blue-200 w-full hover:font-bold text-sm"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block border-b border-blue-200 w-full hover:font-bold text-sm"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#project"
              className="block border-b border-blue-200 w-full hover:font-bold text-sm"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block border-b border-blue-200 w-full hover:font-bold text-sm"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;

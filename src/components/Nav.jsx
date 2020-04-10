// eslint-disable-next-line no-unused-vars
import React from 'react';

const Nav = () => (
  <nav className="flex items-center sm:justify-between flex-wrap bg-pink-100 p-6">
    <div className="flex items-center justify-between flex-shrink-0 text-pink-700 mr-6">
      <a href="mailto:elizabeth.villalejos@gmail.com?subject=Website%20Inquiry">
        <span className="font-semibold tracking-tight cursive text-xl">
          Dulce&apos;s wooden shop
        </span>
      </a>
    </div>
    <div className="w-full sm:block flex-grow lg:flex lg:items-center lg:w-auto">
      <div className="lg:flex-grow">
        <a href="#about" className="sm:inline-block mt-4 lg:inline-block lg:mt-0 text-pink-500 hover:text-pink-400 mr-4">
          About
        </a>
        <a href="#showcase" className="sm:inline-block mt-4 lg:inline-block lg:mt-0 text-pink-500 hover:text-pink-400 mr-4">
          Showcase
        </a>
        <a href="#contact" className="sm:inline-block mt-4 lg:inline-block lg:mt-0 text-pink-500 hover:text-pink-400">
          Contact
        </a>
      </div>
    </div>
  </nav>
);

export default Nav;

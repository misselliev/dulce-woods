import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => (
  <div id="contact">
    <div className="w-48 mx-auto pt-2 mb-2 border-b-2 border-purple-200 text-center text-gray-600 pt-1 cursive">Contact</div>
    <div className="flex items-center justify-center flex-wrap bg-pink-100 p-6">
      <div className="items-center">
        <div className="text-sm lg:flex-grow">
          <a href="https://github.com/misselliev" target="_blank" rel="noreferrer noopener" className="sm:inline-block mt-4 lg:inline-block lg:mt-0 text-pink-500 hover:text-pink-400 mr-4 text-2xl">
            <i className="fab fa-github" />
          </a>
          <a href="https://www.linkedin.com/in/ellievillalejos/" target="_blank" rel="noreferrer noopener" className="sm:inline-block mt-4 lg:inline-block lg:mt-0 text-pink-500 hover:text-pink-400 mr-4 text-2xl">
            <i className="fab fa-linkedin" />
          </a>
          <a href="mailto:elizabeth.villalejos@gmail.com?subject=Website%20Inquiry" className="sm:inline-block mt-4 lg:inline-block lg:mt-0 text-pink-500 hover:text-pink-400 mr-4 text-2xl">
            <i className="fas fa-envelope" />
          </a>
        </div>
      </div>
    </div>
  </div>

);

export default Footer;

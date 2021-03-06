import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
  <section id="contact">
    <div className="w-48 mx-auto pt-2 mb-2 border-b-2 border-yellow-500 text-center text-yellow-900 pt-1 cursive">Contact</div>
    <div className="flex items-center justify-center flex-wrap bg-yellow-100 p-6">
      <div className="items-center">
        <div className="text-sm lg:flex-grow">
          <a href="https://github.com/misselliev" target="_blank" rel="noreferrer noopener" className="sm:inline-block mt-4 lg:inline-block lg:mt-0 text-yellow-700 hover:text-pink-400 mr-4 text-2xl">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/ellievillalejos/" target="_blank" rel="noreferrer noopener" className="sm:inline-block mt-4 lg:inline-block lg:mt-0 text-yellow-700 hover:text-pink-400 mr-4 text-2xl">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="mailto:elizabeth.villalejos@gmail.com?subject=Website%20Inquiry" className="sm:inline-block mt-4 lg:inline-block lg:mt-0 text-yellow-700 hover:text-pink-400 mr-4 text-2xl">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
    </div>
  </section>

);

export default Footer;

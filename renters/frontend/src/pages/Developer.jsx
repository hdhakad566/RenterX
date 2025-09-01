import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Developer = () => {
  return (
    <section className="bg-gray-100 py-16 md:py-36">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-4">
        {/* Image Section */}
        <div
          className="lg:w-1/2 w-full mb-8 lg:mb-0 flex justify-center"
          data-aos="fade-right"
        >
          <img
            src="images/IMG_20230412_114521.jpg"
            alt="Developer"
            className="rounded-lg shadow-lg w-80 h-100 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Text and Social Section */}
        <div
          className="lg:w-1/2 w-full text-center lg:text-left"
          data-aos="fade-left"
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Hariom Dhakad
          </h1>
          <p className="text-indigo-600 text-lg font-semibold mb-4">
            Full-Stack and BlockChain Developer 
            
          </p>
           
          <p className="text-gray-600 mb-6">
            Hi, A passionate Developer specializing in DeFi and DApp development. Skilled in building secure, scalable smart contracts
with Solidity. Proficient in MERN stack, utilizing SQL for efficient data management. Committed to innovation, security,
and exploring emerging trends. Eager to contribute my skills to a forward-thinking company, taking on forefront roles.
          </p>
          <div className="flex justify-center lg:justify-start space-x-6">
            <a
              href="https://github.com/hdhakad566/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-600 transition-colors"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://linkedin.com/in/hariom-dhakad-/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-500 transition-colors"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://x.com/kumarpraveer3?t=s-r4AAAheb9JaG9UBN70og&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 transition-colors"
            >
              <FaTwitter size={30} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Developer;

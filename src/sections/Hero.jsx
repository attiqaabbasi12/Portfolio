import React from "react";
import Navbar from "../components/Navbar";
import profileImg from "../assets/profile_img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <>
      <div id="hero" className="bg-gray-900 h-screen w-full px-32">
        <section className="flex flex-row bg-gray-900">
          <div className="text-white w-[50%] font-bold pr-8 pt-32">
            <h2 className="text-3xl mb-2">Hello, It's Me!</h2>
            <h1 className="text-6xl text-blue-300 mb-3">Attiqa Abbasi</h1>
            <h2 className="text-4xl mb-6">Jr. React Developer</h2>
            <p className="font-normal text-lg">
              Turning ideas into interactive user interfaces with React
            </p>
            <div className="flex space-x-4 mt-8">
              <a
                href="https://linkedin.com/in/attiqaabbasi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="lg"
                  className="text-blue-300 hover:text-black border-2 border-blue-300 p-2 rounded-full hover:bg-blue-300 transition-colors duration-200"
                />
              </a>
              <a
                href="https://github.com/attiqaabbasi12"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  size="lg"
                  className="text-blue-300 hover:text-black border-2 border-blue-300 p-2 rounded-full hover:bg-blue-300 transition-colors duration-200"
                />
              </a>
              <a
                href="https://x.com/attiqaaabbasi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faXTwitter}
                  size="lg"
                  className="text-blue-300 hover:text-black border-2 border-blue-300 p-2 rounded-full hover:bg-blue-300 transition-colors duration-200"
                />
              </a>
            </div>
            <a
              href="#about"
              className="mt-8 inline-block px-4 py-2 bg-blue-300 text-gray-900 rounded-xl hover:bg-blue-400 transition-colors duration-200"
            >
              Explore More
            </a>
          </div>
          <div className="w-[50%] flex justify-end items-center pt-16">
            <img
              src={profileImg}
              alt="Profile"
              className="w-half h-half rounded-full border-4 border-blue-300 shadow-2xl shadow-blue-300/100"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;

import React from "react";
import profileImg from '../assets/profile_img.jpg' 

const About = () => {
  return (
    <>
      <div className="bg-gray-700 h-screen w-full">
        <section className="flex flex-row items-center justify-center h-full text-white p-8">
          <div className="profile w-half px-16">
            <img
              src={profileImg}
              alt="Profile"
              className="w-128 h-128 rounded-full border-4 border-blue-300 shadow-2xl shadow-blue-300/100"
            />
          </div>
          <div className="about w-half px-16">
            <h1 className="text-4xl font-bold mb-4">About <span className="text-4xl font-bold mb-4 text-blue-300">Me</span></h1>
            <p className="text-lg max-w-2xl">
              I am a passionate React developer with a keen interest in building
              dynamic and responsive web applications. My journey in web
              development has been fueled by a love for creating intuitive user
              experiences and solving complex problems.
            </p>
            <a
              href="/cv.pdf"
              download
              className="mt-6 inline-block px-6 py-2 bg-blue-300 text-gray-900 font-semibold rounded shadow hover:bg-blue-400 hover:text-white transition-colors duration-300"
            >
              View CV
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;

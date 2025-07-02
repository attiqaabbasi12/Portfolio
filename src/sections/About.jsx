import React from "react";
import profileImg from "../assets/profile_img.jpg";

const About = () => {
  return (
    <>
      <div id="about" className="bg-gray-700 h-screen w-full id='about'">
        <section className="flex flex-row items-center justify-center h-full text-white p-8">
          <div className="profile w-half px-16">
            <img
              src={profileImg}
              alt="Profile"
              className="w-128 h-128 rounded-full border-4 border-blue-300 shadow-2xl shadow-blue-300/100"
            />
          </div>
          <div className="about w-half px-16">
            <h1 className="text-4xl font-bold mb-4">
              About{"   "}
              <span className="text-4xl font-bold mb-4 text-blue-300">Me</span>
            </h1>
            <p className="text-lg max-w-2xl">
              I am a dedicated CS student at Lahore Garrison
              University with a strong focus on frontend development. I enjoy
              building responsive, user-friendly interfaces that combine
              functionality with visual appeal. Alongside my frontend work, I am
              also actively exploring the field of Machine Learning, aiming to
              bridge the gap between intelligent systems and user-centric
              design. My academic projects and personal initiatives reflect a
              commitment to clean code, problem-solving, and continuous growth.
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

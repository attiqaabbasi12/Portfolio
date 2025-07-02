import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Contact = () => {
  return (
    <>
      <section id="contact" className="bg-gray-900 text-white py-10 id='contact'">
        <h1 className="text-center text-blue-300 font-bold text-4xl">
          Contact Me
        </h1>
        <p className="mt-8 text-center max-w-2xl mx-auto text-lg">
          Feel free to reach out for collaborations, project inquiries, or just to connect, I’d love to hear from you.
        </p>
        <div className="flex space-x-4 mt-8 justify-center">
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
            href="mailto:attiqaabbasi55@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
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
      </section>
    </>
  );
};

export default Contact;

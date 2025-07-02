import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons"; 

const ScrollToTopArrow = () => (
  <a
    href="#navbar"
    className="fixed bottom-8 right-8 z-50 bg-blue-300 text-gray-900 p-2 rounded-full shadow-lg hover:bg-blue-400 transition-colors duration-300 flex items-center justify-center"
    aria-label="Scroll to top"
  >
    <FontAwesomeIcon icon={faArrowAltCircleUp} size="2x" />
  </a>
);

export default ScrollToTopArrow;
import React from 'react'

const ProjectsCard = ({ image, description, link }) => {
  return (
    <div className="relative h-60 rounded-2xl overflow-hidden shadow-lg group w-[35vw] mx-auto">
      <img
        src={image}
        alt="Project"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-blue-300 bg-opacity-80 flex flex-col justify-center items-center px-10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
        <p className="text-gray-900 font-semibold mb-4 text-center">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-white text-blue-700 font-bold rounded shadow hover:bg-blue-100 transition-colors duration-200"
        >
          View Project
        </a>
      </div>
    </div>
  )
}

export default ProjectsCard
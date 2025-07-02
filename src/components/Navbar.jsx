import React from 'react'

const Navbar = () => {
  return (
    <>
    <div id='navbar' className='bg-gray-900 text-white px-32 py-2 w-full'>
     <nav className='pt-6 text-blue-300 flex justify-between items-center'>
          <h2 className='text-2xl font-bold'>Portfolio</h2>
            <ul className='text-lg flex space-x-6 justify-end hover:cursor-pointer'>
                <li className='relative group'>
                  <a href="#hero" className="hover:text-white transition-colors duration-200">
                    Home
                  </a>
                  <span className="absolute left-0 -bottom-1 w-0 h-1 bg-white rounded group-hover:w-full group-hover:font-bold transition-all duration-300"></span>
                </li>
                <li className='relative group'>
                  <a href="#about" className="hover:text-white transition-colors duration-200">
                    About
                  </a>
                  <span className="absolute left-0 -bottom-1 w-0 h-1 bg-white rounded group-hover:w-full group-hover:font-bold transition-all duration-300"></span>
                </li>
                <li className='relative group'>
                  <a href="#skills" className="hover:text-white transition-colors duration-200">
                    Skills
                  </a>
                  <span className="absolute left-0 -bottom-1 w-0 h-1 bg-white rounded group-hover:w-full group-hover:font-bold transition-all duration-300"></span>
                </li>
                <li className='relative group'>
                  <a href="#projects" className="hover:text-white transition-colors duration-200">
                    Projects
                  </a>
                  <span className="absolute left-0 -bottom-1 w-0 h-1 bg-white rounded group-hover:w-full group-hover:font-bold transition-all duration-300"></span>
                </li>
                <li className='relative group'>
                  <a href="#contact" className="hover:text-white transition-colors duration-200">
                    Contact
                  </a>
                  <span className="absolute left-0 -bottom-1 w-0 h-1 bg-white rounded group-hover:w-full group-hover:font-bold transition-all duration-300"></span>
                </li>
            </ul>
        </nav>
        </div>
    </>
  )
}

export default Navbar
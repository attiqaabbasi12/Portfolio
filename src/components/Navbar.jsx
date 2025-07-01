import React from 'react'

const Navbar = () => {
  return (
    <>
     <nav className='pt-6 text-blue-300 flex justify-between items-center'>
          <h2 className='text-2xl font-bold'>Portfolio</h2>
            <ul className='text-lg flex space-x-6 justify-end hover:cursor-pointer'>
                <li className='relative group'>
                  <span className="hover:text-white transition-colors duration-200">Home</span>
                  <span className="absolute left-0 -bottom-1 w-0 h-1 bg-white rounded group-hover:w-full group-hover:font-bold transition-all duration-300"></span>
                </li>
                <li className='relative group'>
                  <span className="hover:text-white transition-colors duration-200">About</span>
                  <span className="absolute left-0 -bottom-1 w-0 h-1 bg-white rounded group-hover:w-full group-hover:font-bold transition-all duration-300"></span>
                </li>
                <li className='relative group'>
                  <span className="hover:text-white transition-colors duration-200">Skills</span>
                  <span className="absolute left-0 -bottom-1 w-0 h-1 bg-white rounded group-hover:w-full group-hover:font-bold transition-all duration-300"></span>
                </li>
                <li className='relative group'>
                  <span className="hover:text-white transition-colors duration-200">Projects</span>
                  <span className="absolute left-0 -bottom-1 w-0 h-1 bg-white rounded group-hover:w-full group-hover:font-bold transition-all duration-300"></span>
                </li>
                <li className='relative group'>
                  <span className="hover:text-white transition-colors duration-200">Contact</span>
                  <span className="absolute left-0 -bottom-1 w-0 h-1 bg-white rounded group-hover:w-full group-hover:font-bold transition-all duration-300"></span>
                </li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar
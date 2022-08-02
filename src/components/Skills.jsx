/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Sass from '../assets/Sass.png';
import Bootstrap from '../assets/Bootstrap.png';
import Git from '../assets/git.png';
import Tailwind from '../assets/tailwind.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#fff] text-[#0768a0]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-[#ffcc00] '>Skills</p>
              <p className='py-6 pb-0'>// These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>

              <div className='shadow shadow-gray-400 hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto mt-3' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow  shadow-gray-400 hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto mt-3' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow  shadow-gray-400 hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto mt-3' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow  shadow-gray-400 hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto mt-3' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow  shadow-gray-400 hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto mt-3' src={Git} alt="HTML icon" />
                  <p className='my-4'>GIT</p>
              </div>
              <div className='shadow  shadow-gray-400 hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto mt-3' src={Sass} alt="HTML icon" />
                  <p className='my-4'>SASS</p>
              </div>
              <div className='shadow  shadow-gray-400 hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto mt-3' src={Bootstrap} alt="HTML icon" />
                  <p className='my-4'>BOOTSTRAP</p>
              </div>
              <div className='shadow shadow-gray-400 hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto mt-3' src={Tailwind} alt="HTML icon" />
                  <p className='my-4'>TAILWIND</p>
              </div>

          </div>
      </div>
    </div>
  );
};

export default Skills;

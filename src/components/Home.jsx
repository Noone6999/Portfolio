import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#fff]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#0768a0] py-4 max-w-[700px]'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#0768a0]'>
          Juan Manuel 
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#ffcc00]'>
          I'm a Front-End Developer.
        </h2>
        <p className='text-[#0768a0] py-4 max-w-[700px]'>
        I am a front-end developer from Tenerife, specialized in creating responsive and interactive web pages.
        </p>
        <div>
          <button className='text-[#0768a0] group border-2 px-6 py-3 my-2 flex items-center bg-[#ffcc00] border-[#ffcc00]'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

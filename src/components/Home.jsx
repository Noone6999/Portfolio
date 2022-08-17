import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Background from '../assets/BackgroundImage.png'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-cover bg-center' style={{ backgroundImage: `url(${Background})` }}>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <div className='border-double border-8 border-white p-4' >
        <h1 className='text-4xl sm:text-7xl font-bold text-[#FD9842]'>
          Juan Manuel
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#20BCFC]'>
          Front-End Developer.
        </h2>
        <p className='text-[#fff] py-4 max-w-[700px]'>
        I am a front-end developer from Tenerife, Spain specialized in creating responsive and interactive web pages.
        </p>
        <div>

          <button className='text-[#20BCFC] group border-2 px-6 py-3 my-2 flex items-center bg-[#ffcc00] border-[#ffcc00]'>
            <a href="#work">
              View Work
            </a>
            <span className='group-hover:rotate-90 duration-300'>
              <a href='#work'>
               <HiArrowNarrowRight className='ml-3 ' />
              </a>
            </span>
          </button>
          
        </div>
        </div>

      </div>
    </div>
  );
};

export default Home;

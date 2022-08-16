import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#FE8AFF] text-white'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#ffcc00]'>
              About Me.
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi! Nice to meet you and thanks for being here. I leave some information about me.</p>
          </div>
          <div>
            <p>I am passionate about the idea of being able to create software that anyone with Internet access can use.
              Today the technology is one of our main tools and I LOVE being a developer. <br/>
              I started a year ago with two of my best friends and they helped me on my way. Thank you very much Eze and Tomi! </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

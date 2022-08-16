/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'

const Contact = () => {
  return (
    <div name='contact' id='contact' className='w-full h-screen bg-[#FF6161] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/d1cd42b1-7b05-4fda-80b4-e000a7adf9dd" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#000] text-[#fff]'>Contact</p>
                <p className='text-[#fff] py-6 pb-0'>// Submit the form below or send me an email - <b>jm.franco.contact@gmail.com</b></p>
            </div>
            <input className='bg-[#fff] p-2 text-[#000] placeholder-black' type="text" placeholder='Name' name='name'/>
            <input className='my-4 p-2 bg-[#fff] text-[#000] placeholder-black' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#fff] p-2 text-[#000] placeholder-black' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-[#fff] border-2 bg-[#000] border-[#000] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact
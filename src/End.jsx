import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function End() {
  return (
    <div className='h-[300px] bg-gray-700 p-[50px] text-white'>
        <div className='flex gap-[10px] ml-[540px]'>
            <div className='h-[40px] w-[40px] bg-white rounded-full text-black flex justify-center items-center'>
              <FaFacebookF />
            </div>
        <div className='h-[40px] w-[40px] bg-white rounded-full text-black flex justify-center items-center'>
          <FaInstagram />
        </div>
        <div className='h-[40px] w-[40px] bg-white rounded-full text-black flex justify-center items-center'>
          <FaLinkedinIn />
        </div>
        </div>
        <br />
        <section className='ml-[350px]'>
            <b>123 Demo Street, New York NY   |   (555) 555-5555   |   email@example.com</b>
        </section>
        <br />
        <section className='ml-[400px]'>
            © 2024 Company Name. All rights reserved. Design by StorySite.
        </section>
    </div>
  )
}

export default End
import React from 'react'
import Combtn from './Combtn'

function Signin() {
  return (
    <div className='h-[400px] bg-gray-300'>
        <br /><br />
        <section className='ml-[400px] text-3xl'>
            <b>How much should my agency spend on design?</b>
        </section>
        <br /><br />
        <section className='ml-[480px]'>
            Give us your name and email address to download our free guide.
        </section>
        <br />
        <div className='flex'>
            <div className='h-[60px] w-[56%] ml-[130px] flex gap-[30px]'>
            <input className=' bg-white p-[20px]'  placeholder='Last Name' type="text" />
            <input className=' bg-white p-[20px]'  placeholder='First Name' type="text" />
            <input className=' bg-white p-[20px]' placeholder='E-mail' type="text" />
        </div>
       <section className='h-[60px] w-[250px] bg-purple-700 rounded-md flex justify-center items-center text-2xl text-white mma'>
         Download Guide
       </section> 
        </div>
    </div>
  )
}

export default Signin
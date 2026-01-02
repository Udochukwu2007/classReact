import React from 'react'
import Btn2 from './btn2'
function Pic() {
  return (
   <div className='move flex justify-center items-center  text-white'>
    <div className='h-[400px] w-[600px] lil p-4'>
        <section className='text-white ml-[250px] mt-5'><b>About Us</b></section>
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Voluptates corrupti harum maxime facere voluptate distinctio, 
         repellendus eius perferendis aliquam sit!
         Lorem ipsum dolor sit amet consectetur adipisicing elit. 
         Placeat alias ab odio quas ex sint unde non eligendi delectus a!
         <section className='ml-[220px] mt-[50px]'>
          <Btn2 run="Read More"/>
         </section>
         
    </div>
   </div>
  )
  
}


export default Pic
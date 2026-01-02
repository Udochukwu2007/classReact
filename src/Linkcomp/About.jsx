import React from 'react'
import Same from '../Same'
import Combtn from '../Combtn'
import Lambo from '../Lambo'
import Signin from '../Signin'
import End from '../End'

function About() {
  return (
   <div>
    <div>
    <Same abd="About"/>
   </div>
   <div className='h-[550px] bg-white flex  items-center'>
     <div className='h-[450px] w-[50%]  monk ml-[200px]'></div>
     <div className='h-[350px] w-[40%] bg-white pee p-[30px]'>
      <b className='text-3xl'>Who We Are</b>
      <br />
      <section>
        Lorem ipsum dolor sit amet, consectetu. <br />
       adipiscing elit, sed do eiusmod tempor <br />
        incididunt ut labore.
      </section>
      <br />
      <section>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  <br />
         Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
      </section>
          <section className='mt-[30px]'>
            <Combtn leg="Schedule a call"/>
          </section>
     </div>
   </div>
   <div className='h-[220vh] bg-gray-800 '>
    <br /><br /><br />
    <section className='ml-[600px] text-3xl text-white'>
      Meet the Team
    </section>
     <div className='flex justify-center gap-[70px]'>
      <Lambo/>
     <Lambo/>
     <Lambo/>

     </div>
   </div>
   <Signin/>
   <div>
    <End/>
   </div>
   </div>
  )
}

export default About
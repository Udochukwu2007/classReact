import React from 'react'
import Combtn from '../Combtn'
import Fam from '../Fam'
import Signin from '../Signin'
import End from '../End'


function Home() {
  return (
    <div>
      <div className='h-[500px] w-[100%] bg-amber-950 flex gap-2  items-center sm:inline-block sm:h-[140vh]  lg:flex lg:h-[500px]'>
      <div className='h-[400px] w-[50%] btr ml-[160px] sm:w-[70%]  sm:mt-[50px] lg:mt-[10px] lg:h-[400px] lg:w-[50%]'></div>
      <div className='h-[360px] w-[37%] bg-black p-[20px] text-white sm:absolute sm:top-[350px] sm:h-[450px] sm:w-[50%] sm:absolute sm:left-[200px] sm:top-[500px]   lg:h-[360px] lg:w-[37%]  lg:ml-[500px] lg:absolute lg:top-[230px] lg:left-[140px]  '>
        <section className='text-5xl'>
          <b>Premium design <br />
          without the price.</b>
        </section>
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <br /> 
        Quasi, quis. Corporis sed modi earum unde distinctio. 
        <br />
         expedita dicta praesentium exercitationem!
         <br />
         <Combtn leg="Schedule a call"/>
      </div>
    </div>
    <div className='h-[80px] w-[100%] bg-gray-200 flex justify-around items-center text-2xl sm:block sm:h-[200px]  sm:w-[100%] lg:h-[80px] lg:w-[100%] lg:flex '>
      <div className=' sm:block sm:ml-[40%] md:block lg:flex lg:gap-[30px] lg:ml-[0] text-orange'>
        <section>
          Get Quality Design</section>
      <section className='sm:mt-[20px] sm:ml-[20px] lg:ml-[0] lg:mt-[0] text-orange-500'>Save Money</section>
      <section className='sm:mt-[20px] lg:mt-[0] text-orange-600'>Grow Your Business</section>
      </div>
    </div>
    <div className='h-[600px] w-[100%]  flex justify-center items-center'>
      <div className='h-[500px] w-[30%]  mood ml-[200px]'></div>
      <div className='h-[500px] w-[50%]'>
        <section className='p-[20px] ml-[50px]'>TAKE IT FROM US</section>
        <section className='text-3xl ml-[50px] p-[20px] text-orange-600'>
          <b>Don’t blow your entire marketing budget on design.</b></section>
          <ul className='ml-[70px] p-[20px]'>
            <li>.Lorem ipsum dolor sit amet consectetur</li>
            <li>.Lorem ipsum dolor sit amet</li>
            <li>.Lorem ipsum dolor sit amet consectetur</li>
            <li>.Lorem ipsum dolor sit amet</li>
          </ul>
          <section className='ml-[60px]'>
            <Combtn sound="Schedule a call"/>
          </section>
      </div>
      
    </div>

    <div className='h-[130vh] w-[100%] bg-gray-950 p-[100px]'>
      <section className='text-2xl ml-[400px] text-white'>
        Instead, get premium + affordable <br /> on-demand design services.
      </section>
      <div className='h-[600px] w-[100%]  mt-[30px] flex justify-center items-center gap-[30px]'>
        <div className='h-[600px] w-[50%] mt-[30px] mon text-white'>
          strategy
          <br />
          make the most of your efforts.
        </div>
        <div className='h-[600px] w-[50%] '>
          <div className='h-[270px] w-[100%] mt-[20px] life'></div>
          <div className='h-[300px] w-[100%] guard mt-[20px]'></div>
        </div>
        
      </div>
    </div>
    <div className='h-[400px] bg-white p-[50px]'>
      <section className='text-orange-600 text-3xl ml-[450px]'>
        Trusted by brands you love
      </section>
      <br />
      <div className='flex justify-center items-center h-[100px] w-[100%] gap-[20px]'>
        <div className='h-[200px] w-[33.3%]  flower'></div>
        <div className='h-[200px] w-[33.3%]  floor'></div>
        <div className='h-[200px] w-[33.3%]  fin'></div>
        <div className='h-[200px] w-[33.3%]  fine'></div>
      </div>
      <section className='flex justify-center mt-[30px]'>
          <Combtn leg="Schedule a call"/>
        </section>
    </div>

     <div className='h-[650px] bg-gray-200 p-[30px]'>
       <section className='text-3xl ml-[500px] mt-[30px]'>
        Packages & Pricing
       </section>
      <div className='h-[400px]  flex gap-[20px] mt-[50px]'>
 <div className='h-[360px] w-[33.33%] bg-white p-[60px]'>
  <b className='ml-[90px] text-2xl'>Basic</b>
 <br />
 <b className='ml-[50px] text-2xl'> $109/month</b>
  <br />
 <section className='ml-[40px]'>
   Lorem ipsum dolor sit amet,<br />
   consectetur adipiscing elit, sed <br /> 
   do eiusmod tempor incididunt <br />
    ut labore et dolore magna aliqua. <br />
     Lorem ipsum dolor sit amet,  <br />
     consectetur adipiscing.
 </section>
 </div>
       <div className='h-[360px] w-[33.33%] bg-white  p-[60px]'>
        <b className='ml-[90px] text-2xl'>Basic</b>
 <br />
 <b className='ml-[50px] text-2xl'> $109/month</b>
  <br />
 <section className='ml-[40px]'>
   Lorem ipsum dolor sit amet,<br />
   consectetur adipiscing elit, sed <br /> 
   do eiusmod tempor incididunt <br />
    ut labore et dolore magna aliqua. <br />
     Lorem ipsum dolor sit amet,  <br />
     consectetur adipiscing.
 </section>
       </div>
       <div className='h-[360px] w-[33.33%] bg-white p-[60px]'>
        <b className='ml-[90px] text-2xl'>Basic</b>
 <br />
 <b className='ml-[50px] text-2xl'> $109/month</b>
  <br />
 <section className='ml-[40px]'>
   Lorem ipsum dolor sit amet,<br />
   consectetur adipiscing elit, sed <br /> 
   do eiusmod tempor incididunt <br />
    ut labore et dolore magna aliqua. <br />
     Lorem ipsum dolor sit amet,  <br />
     consectetur adipiscing.
 </section>
       </div>
      </div>
       <section className='flex justify-center ml-[40px] mt-[30px]'>
          <Combtn leg="Schedule a call"/>
        </section>
     </div>

     <div className='h-[750px] lack'>
      <br /><br /><br /><br />
      <section className=' ml-[580px] text-3xl text-white'>
        How It Works
      </section>
      <Fam lap="1" add="SCHEDULE A CALL"/>
      <Fam mad="2" air="SET YOUR 90 DAY PLAN"/>
      <Fam fake="3" land="GET QUALITY DESIGNS"/>
      <br />
      <section className='ml-[600px]'>
         <Combtn sound="Schedule a call"/>
      </section>
     </div>
     <Signin/>
     <End/>
    </div>
  )
}

export default Home
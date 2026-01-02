import React from 'react'
import Signin from '../Signin'
import End from '../End'
import Combtn from '../Combtn'

function Bagpro() {
  return (
    <div>
      <div className='h-[100vh] bg-white'>
        <section className='h-[60px] w-[60%]  flex items-center ml-[100px]'>
            <section className='text-gray-500'>
                Shop > style 02
            </section>
        </section>
        <div className='flex justify-center items-center ml-[100px]'>
            <div className='h-[500px] w-[50%] kiss2'>
                
            </div>
        <div className='h-[500px] w-[40%] bg-white p-[20px] mr-[30ppx]'>
           <h4 className='text-5xl'>Style 02</h4><br />
            $0.00
            <br /> <br />
            It all begins with an idea. Maybe you want to launch a business. 
             Maybe you want to turn a hobby into something more. Or maybe 
             you have a creative project to share with the world. Whatever it 
              is,the way you tell your story online can make all the difference.
              <br /><br />
              <section className='text-2xl'>
                <Combtn leg="Add To Cart"/>
              </section>
        </div>
        </div>
        
       </div>
       <Signin/>
       <End/>

       
    </div>
  )
}

export default Bagpro
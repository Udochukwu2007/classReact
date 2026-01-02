import React from 'react'
import Same from '../Same'
import Signin from '../Signin'
import End from '../End'

function Blog() {
  return (
    <div>
      <Same chan="Blog"/>
      <div className='h-[450px] bg-white flex gap-[20px] justify-center items-center mt-[60px]'>
        <div className='h-[450px] w-[33.33%]  ml-[50px]'>
          <div className='h-[300px] bg-yellow-400 hat1'></div>
          <div className='h-[150px] '>
            <br />
            <section className='ml-[180px]'>
              3/11/19
            </section>
            <b className='ml-[100px] text-2xl'>blog Post Title One</b>
            <br /><br />
           <section className='ml-[130px]'>
             It all begins with an idea.
           </section>
          </div>
        </div>

        <div className='h-[450px] w-[33.33%] '>
         <div className='h-[300px] bg-yellow-400 hat2'></div>
          <div className='h-[150px] '>
            <br />
            <section className='ml-[180px]'>
              3/11/19
            </section>
            <b className='ml-[100px] text-2xl'>blog Post Title One</b>
            <br /><br />
           <section className='ml-[130px]'>
             It all begins with an idea.
           </section>
          </div>
        </div>

        <div className='h-[450px] w-[33.33%] '>
          <div className='h-[300px] bg-yellow-400 hat2 mr-[60px]'></div>
          <div className='h-[150px] '>
            <br />
            <section className='ml-[180px]'>
              3/11/19
            </section>
            <b className='ml-[100px] text-2xl'>blog Post Title One</b>
            <br /><br />
           <section className='ml-[130px]'>
             It all begins with an idea.
           </section>
          </div>
        </div>

      </div>
      <Signin/>
      <End/>
    </div>
  )
}

export default Blog
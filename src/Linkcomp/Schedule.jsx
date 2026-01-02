import React from 'react'
import Same from '../Same'
import Combtn from '../Combtn'
import Signin from '../Signin'
import End from '../End'

function Schedule() {
  return (
    <div>
        <Same mon="Schedule a Call"/>
        <div className='h-[600px] bg-white flex gap-[10px] justify-center items-center'>
            <div className='h-[500px] w-[30%] bg-white p-[30px]'>
                <section className='text-orange-400 ml-[20px] text-2xl'>
                    Email
                </section>
                <br />
                <section className='ml-[20px]'>
                    email@example.com
                </section>
                <section className='text-orange-400 ml-[20px] text-2xl'>
                    Phone
                </section>
                <br />
                <section className='ml-[20px]'>
                    (555) 555-5555
                </section>
                <section className='text-orange-400 ml-[20px] text-2xl'>
                    Location
                </section>
                <br />
                <section className='ml-[20px]'>
                   123 Demo Street
                   <br />New York, NY 12345
                </section>
            </div>
            <div className='h-[500px] w-[35%] '>
                <section>
                    Name(required)
                </section>
                <div className='h-[100px] w-[500px] flex'>
                    <div className='h-[60px] w-[50%] '>
                        First name
                        <input  className='bg-gray-300 h-[50px]' type="text" />
                    </div>
                    <div className='h-[60px] w-[50%] '>
                        First name
                        <input  className='bg-gray-300 h-[50px]' type="text" />
                    </div>
                    
                </div>
                 <section>
                        Name(required)
                        <br />
                        <input className='bg-gray-300 w-[80%] h-[50px] mt-[10px]' type="text" />
                    </section>
                    <section>
                        Phone
                        <br />
                        <input className='bg-gray-300 w-[80%] h-[50px] mt-[10px]' type="text" />
                    </section>
                    <section>
                        Message
                        <br />
                        <input className='bg-gray-300 w-[80%] h-[100px] mt-[10px]' type="text" />
                    </section>

                    <Combtn leg="Give Your Experience"/>
            </div>
        </div>
       <Signin/>
       <End/>
    </div>
  )
}

export default Schedule
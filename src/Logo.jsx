import React from 'react'
import Clickme from './Clickme'

function Logo() {

   


  return (
    <div className='live flex items-center justify-between'>
        <section className='ml-48 text-6xl'>
            Logo
        </section>
        <section className='flex gap-3 list-none mr-[600px] '>
            <li>Home</li>
            <li>About</li>
        </section>
        <div>
            <Clickme text="Login"/>
           

            
            

        </div>
        </div>
  )
}

export default Logo
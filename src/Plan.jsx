import React from 'react'
import Lap from './Lap'
import Btn2 from './btn2'

function Plan() {
  return (
    <div className='h-[120vh] w-[100%] bg-gray-400'>
        <div><Lap/></div>
        <div className='h-[400px] w-[70%] ml-[200px] flex'>
          <div className=' h-[400px] w-[40%] bg-red-950'>
            <section className='ml-[60px]'>
                <br /><br /><br /><br /><br />
                <b>What We Do</b>
                <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Nostrum facilis tempore molestiae nemo velit.
              nihil quasi quod iusto magnam nulla.
            </section>
                    <section className='ml-[57px] mt-2.5'>
                         <Btn2 run="Read More"/>
                    </section>
          </div>
          <div className='h-[400px] w-[60%] black'></div>
        </div>
    </div>
  )
 
}

export default Plan
import React from 'react'
import Btn from './btn'

function Middle() {
  return (
    <div className='h-[600px] w-[100%] bg-amber-400 flex'>
        <div className='h-[600px] w-[50%] bg-white p-[60px]'>
            <section className='mt-[30px]'><b>About</b></section>
            <section className=''>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Quisquam distinctio vero aliquid! Nemo expedita ea illo, 
                 assumenda incidunt nulla nobis!
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, suscipit?
                 <br />
                 <br />
                 Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ratione voluptatibus culpa earum amet modi accusamus maxime nihil voluptatem dolorem repellendus?
            </section>
        </div>
        <div className='h-[600px] w-[50%] bg-white p-[30px]'>
            <Btn/>
            <br />
            <Btn/>
            <br />
            <Btn/>
           
        </div>
    </div>
  )
}

export default Middle
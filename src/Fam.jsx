import React from 'react'

function Fam({mad,fake,lap,add,air,land}) {
  return (
    <div className='h-[150px] w-[60%] ml-[350px] mt-[20px]'>
        <div className='h-[50px]  flex items-center justify-between'>
            <section className='text-4xl text-white'><b>{lap}{mad}{fake}</b></section>
            <section className=' mr-[500px] text-red-600'>{add}{air}{land}</section>
        </div>
        <div className='h-[100px]  p-[30px]'>
            <section className=' ml-[120px] text-white'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </section>
        </div>
    </div>
  )
}

export default Fam
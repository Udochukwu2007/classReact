import React from 'react'

function Same({on,loc,abd, chan, mon}) {
  return (
   <div className='h-[400px] loud p-[50px]'>
    <section className='text-3xl text-white ml-[200px]'>
      {on}{loc}{abd}{chan}{mon}
      <br /><br />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
      eiusmod tempor incididunt ut labore.
    </section>
   </div>
  )
}

export default Same
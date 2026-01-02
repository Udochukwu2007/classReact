import React from 'react'

function PP({name, cloth}) {
  return (
    <div className='h-[230px] w-[450px]'>
        <div className='h-[60px] bg-blue-600 p-1 text-white'>
           <section className='flex items-center mt-5 ml-5'>
             <b>{cloth}</b>
           </section>
        </div>
        <div className='h-[180px]'>
            <b>{name}</b>
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             A impedit excepturi corporis quos neque asperiores maiores.
              aspernatur laudantium, est obcaecati. Lorem ipsum dolor sit amet, 
              consectetur adipisicing elit. Nisi, officiis.
        </div>
    </div>
  )
}

export default PP
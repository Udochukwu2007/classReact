import React from 'react'

function Combtn({leg,sound}) {
  return (
    <div className='h-[50px] w-[200px] rounded-md bg-orange-400 flex justify-center items-center text-white fly'>{leg}{sound}</div>
  )
}

export default Combtn
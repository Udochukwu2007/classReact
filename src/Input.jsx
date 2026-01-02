import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

function Input({round}) {
  return (
    <div>
        <input  type="password" placeholder='Password' className='h-[50px] w-[300px] bg-gray-600 mt-[20px] pain ' />
        <button onClick={round} className='man'><FaLongArrowAltRight /></button>
    </div>
  )
}

export default Input
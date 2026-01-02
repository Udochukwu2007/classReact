import React from 'react'
import Same from '../Same'
import Rap from './Rap'
import Signin from '../Signin'
import End from '../End'

function Service() {
  return (
    <div>
      <Same on="Service"/>
      <div className='h-[210vh] bg-white'>
        <div className='h-[66.6vh]  flex justify-center items-center'>
          <div className='h-[400px] w-[40%] bg-amber-600 wake'></div>
          <Rap/>
        </div>
        <div className='h-[66.6vh]  flex justify-center items-center'>
          <div className='h-[400px] w-[40%]  mt-[70px] lamp'></div>
           <Rap/>
        </div>
        <div className='h-[66.6vh]   flex justify-center items-center'>
          <div className='h-[400px] w-[40%]  mt-[70px] box'></div>
           <Rap/>
        </div>
      </div>
      <Signin/>
      <End/>
    </div>
  )
}

export default Service
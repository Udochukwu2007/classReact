import React from 'react'
import Same from '../Same'
import Signin from '../Signin'
import End from '../End'


function Shop() {
  return (
    <div>
      <Same loc="Shop"/>
      <section className='text-3xl ml-[630px]'>Shop</section>
      <div className='h-[400px]  flex gap-[20px] mt-[30px]'>
       <div className='h-[400px] w-[33.33%]   ml-[70px]'>
        <div className='h-[300px] bg-red-600 mom'>
          
        <a href="Product" class="procard">
          <img src="glass.jpg" alt="" className="imgd" />
        <img src="glass2.jpg" alt="" className="imgh" />
        </a>
        </div>
        <div className='h-[100px] '>
          <br />
          <section className='ml-[160px] text-2xl'>Style 03</section>
          <section className='ml-[170px] text-2xl'>$0.00</section>

        </div>
       </div>
       <div className='h-[400px] w-[33.33%] '>
        <div className='h-[300px] bg-red-600 mom2'>
          <a href="Bagpro" class="procard">
          <img src="bag.jpg" alt="" className="imgd2" />
        <img src="bag2.jpg" alt="" className="imgh2" />
        </a>
        </div>
        <div className='h-[100px] '>
          <br />
          <section className='ml-[160px] text-2xl'>Style 02</section>
          <section className='ml-[170px] text-2xl'>$0.00</section>

        </div>
       </div>
       <div className='h-[400px] w-[33.33%] mr-[50px] '>
        <div className='h-[300px] bg-gray-400 mom3'>
         <a href="Walletpro" class="procard">
          <img src="wallet.jpg" alt="" className="imgd3" />
        <img src="wallet2.jpg" alt="" className="imgh3" />
        </a>
        </div>
        <div className='h-[100px] '>
          <br />
          <section className='ml-[160px] text-2xl'>Style 01</section>
          <section className='ml-[170px] text-2xl'>$0.00</section>

        </div>
       </div>
      </div>
      <Signin/>
      <End/>
    </div>
  )
}

export default Shop
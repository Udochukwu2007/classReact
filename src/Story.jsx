import React from 'react'
import Input from './Input'
import App from './App'


function Story() {

let mean =()=>{
  if(document.querySelector('input').value === "stone"){
    document.querySelector('.cover').innerHtml = `<div class="han">
    <div class="gold">
    <div class="mm"></div></div></div>`
  }
}
   

       

  return (
    <div className='cover flex justify-center items-center flex-col gap-1'>
        <div className='h-[60px] w-[250px] map'></div>
        <section>Enter the password storysite to view the demo site.</section>
        <Input round={mean}/>
        </div>
  )
}

export default Story
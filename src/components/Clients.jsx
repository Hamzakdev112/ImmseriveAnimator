import React from 'react'
import '../additionalcss/clients.css'

const Clients = () => {
  return (
    <div className='mt-[60px] w-[90%] mx-auto text-[14px] md:text-[16px]'>
        <div>
        <h1 className='text-[#f9c900] text-[2em] font-extrabold text-center mb-[0.6em]'>Our Clients</h1>
        <h3 className='text-[1.1em] font-medium text-[#5d5d5d] text-center w-[60%] md:w-[30%] mx-auto'>We offer our clients guaranteed results within the respective timeline.</h3>
        </div>
        <div className='flex justify-center gap-2 flex-wrap mt-[4em]'>
            <div className='client1 aspect-square w-[240px] lg:w-[280px] xl:w-[300px]'></div>
            <div className='client2 aspect-square w-[240px] lg:w-[280px] xl:w-[300px]'></div>
            <div className='client3 aspect-square w-[240px] lg:w-[280px] xl:w-[300px]'></div>
        </div>
    </div>
  )
}

export default Clients
import React from 'react'
import '../additionalcss/servicecard.css'
import {motion } from 'framer-motion'
import { textVarient } from '../motion/motion'



const ServiceCard = ({title, description, image, index}) => {
  return (
    <div className='service-card-container w-[320px] flex flex-col gap-[1em] items-center text-center p-[1.3em] h-[500px]'>
        
        <div className='h-[40%] flex justify-center items-center'>
        <motion.img
        initial="hidden"
        whileInView="show"
        variants={textVarient(0.060)}
        className='w-[100px] service-img' src={image} alt={title} />
        </div>
        <div className='h-[60%]'>
        <motion.h1
        initial="hidden"
        whileInView="show"
        variants={textVarient(0.060)}
        className='text-[1.5em]  mb-[0.5em] font-bold'>{title}</motion.h1>
        <motion.h4 
        initial="hidden"
        whileInView="show"
        variants={textVarient(0.060)}
        className='text-[#2c2c2c] font-medium'>{description}</motion.h4>
        </div>
    </div>
  )
}

export default ServiceCard
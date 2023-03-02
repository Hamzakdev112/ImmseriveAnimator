import React, { useEffect, useState } from 'react'
import ServiceCard from './ServiceCard'
import data from '../data/services.json'
import {motion} from 'framer-motion'
import {slideIn} from '../motion/motion'
import { useInView } from 'react-intersection-observer';


const Services = () => {
    const [isInView, setIsInView] = useState(false);
    console.log(isInView)
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      setIsInView(true);
    }
  }, [inView]);
  return (
    <div className='xl:mt-[60px] lg:mt-[50px] md:mt-[40px] sm:mt-[30px] mt-[20px] relative xl:text-[16px] lg:text-[14px] md:text-[14px] sm:text-[13px] text-[12px]  '>
        <div className='services-container   w-[100%] h-[100%] absolute z-[-10]'></div>
        <h1 className='text-[#f9c900] text-[2em] font-extrabold text-center mb-[0.6em]'>Our Services</h1>
        <h3 className='text-[1.1em] font-medium text-[#5d5d5d] text-center w-[60%] lg:w-[30%] mx-auto'>We are experts in digital marketing and have a team of experienced professionals who can help you take your business to the next level.</h3>
            <div
                ref={ref}
        className='flex flex-wrap gap-[1em] justify-evenly w-[90%]  min-h-[100px] mx-auto mt-[4em]'    
            >
            {
                data.map((service, index)=>(
        <motion.div
        initial="hidden"
        animate={isInView && 'show'}
        variants={slideIn('right', 'tween', 0.2 * index, 0.7)}
        >
                <ServiceCard {...service} index={index} />
        </motion.div>
            ))
        }
            </div>


    </div>
  )
}

export default Services
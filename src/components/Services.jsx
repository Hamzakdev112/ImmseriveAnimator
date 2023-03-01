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
    <div className='mt-[60px] relative '>
        <div className='services-container bg-[#f9ffa2]  w-[100%] h-[100%] absolute z-[-10]'></div>
        <h1 className='text-[#f9c900] text-[2em] font-extrabold text-center mb-[0.6em]'>Our Services</h1>
        <h3 className='text-[1.1em] font-medium text-[#5d5d5d] text-center w-[30%] mx-auto'>We are experts in digital marketing and have a team of experienced professionals who can help you take your business to the next level.</h3>
            <div
                ref={ref}
        className='flex flex-wrap gap-[1.2em] w-[85%] justify-center min-h-[100px] mx-auto mt-[60px]'    
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
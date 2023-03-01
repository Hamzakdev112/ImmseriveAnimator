import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../additionalcss/Hero.css'
import { AnimatePresence, motion } from 'framer-motion';
import { slideIn } from '../motion/motion';

const Hero = () => {
    const [activeSlide, setActiveSlide] = useState(0)
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 5000,
        autoplay:true,
      };
  return (
    <div className='w-[100%]  overflow-x-hidden'>
        <AnimatePresence>
        <Slider
        beforeChange={(currentSlide,nextSlide)=>{
            setActiveSlide(nextSlide)
        }}
        {...settings}
        >

                        <div className='hero1 w-[100vw] h-[calc(100vh-90px)] !flex text-white font-[Nunito] '>
                <div className="hero1-left w-[50%] h-[100%] flex flex-col gap-[2rem] text-center justify-center items-center ">
                    {
                        activeSlide === 0 && (

                            <motion.h1
                            initial="hidden"
                            whileInView="show"
                            variants={slideIn('left', "tween",0.5, 1, "easeIn")}
                            className='text-[3em] font-extrabold'>Immersive Digital World</motion.h1>
                            )
                        }
                        {
                            activeSlide === 0 && (

                                <motion.h2
                                initial="hidden"
                                whileInView="show"
                                variants={slideIn('up', "tween",0.2, 0.5, "easeOut")}
                                className='text-[1.5em]'>Immersive Design is a design studio that codes, creates, and invents solution for the present and future.</motion.h2>
                                )
                            }
                            {
                                activeSlide === 0 && (

                                    <motion.button
                                    initial="hidden"
                                    whileInView="show"
                                    variants={slideIn('right', "tween",0.5, 1, "easeIn")}
                                    className=' bg-[#f9c900] py-3 px-5 rounded-[5px]'
                                    >
                        READ MORE
                    </motion.button>
                        )
                    }
                </div>
                <div className="hero1-right w-[50%] flex justify-center items-center">
                    <img src="heroimage2.png" alt="" className=' w-[100%]' />
                </div>
            </div>
                        <div className='hero2 w-[100vw] h-[calc(100vh-90px)] !flex text-white font-[Nunito] '>
                <div className="hero1-left w-[50%] h-[100%] flex flex-col gap-[2rem] text-center justify-center items-center ">
                    {
                        activeSlide === 1 && (

                            <motion.h1
                            initial="hidden"
                            whileInView="show"
                            variants={slideIn('left', "tween",0.5, 1, "easeIn")}
                            className='text-[3em] font-extrabold'>Our goal is to make 3D animation accessible to everyone.</motion.h1>
                            )
                        }
                            {
                                activeSlide === 1 && (

                                    <motion.button
                                    initial="hidden"
                                    whileInView="show"
                                    variants={slideIn('up', "tween",0.5, 1, "easeIn")}
                                    className=' bg-[#f9c900] py-3 px-5 rounded-[5px]'
                                    >
                        READ MORE
                    </motion.button>
                        )
                    }
                </div>
                <div className="hero1-right w-[50%] flex justify-center items-center">
                    <img src="babloo.png" alt="" className=' w-[100%]' />
                </div>
            </div>
        </Slider>
            </AnimatePresence>
    </div>
  )
}

export default Hero
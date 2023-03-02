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
    <div className='w-[100%] h-[calc(55vh-90px)]  md:h-[calc(70vh-90px)] lg:h-[calc(80vh-90px)] xl:h-[calc(100vh-90px)] overflow-y-hidden  overflow-x-hidden'>
        <AnimatePresence>
        <Slider
        beforeChange={(currentSlide,nextSlide)=>{
            setActiveSlide(nextSlide)
        }}
        {...settings}
        >

                        <div className='hero1 w-[100%] h-[calc(55vh-90px)] md:h-[calc(70vh-90px)] lg:h-[calc(80vh-90px)] xl:h-[calc(100vh-90px)] !flex text-white font-[Nunito] '>
                <div className="hero1-left p-[50px] w-[100%] sm:w-[50%] h-[100%] flex flex-col gap-[2rem] text-center justify-center items-center ">
                    {
                        activeSlide === 0 && (

                            <motion.h1
                            initial="hidden"
                            whileInView="show"
                            variants={slideIn('left', "tween",0.5, 1, "easeIn")}
                            className='xl:text-[3em] text-[1.4em] md:text-[2em] lg:text-[2.4em] font-extrabold'>Immersive Digital World</motion.h1>
                            )
                        }
                        {
                            activeSlide === 0 && (

                                <motion.h2
                                initial="hidden"
                                whileInView="show"
                                variants={slideIn('up', "tween",0.2, 0.5, "easeOut")}
                                className='xl:text-[1.5em] md:text-[1em] text-[0.8em] lg:text-[1.2em]'>Immersive Design is a design studio that codes, creates, and invents solution for the present and future.</motion.h2>
                                )
                            }
                            {
                                activeSlide === 0 && (

                                    <motion.button
                                    initial="hidden"
                                    whileInView="show"
                                    variants={slideIn('right', "tween",0.5, 1, "easeIn")}
                                    className=' bg-[#f9c900] text-[0.7em] xl:text-[1em] lg:text-[0.8em] py-1 px-2 lg:py-2 lg:px-3 xl:py-3 xl:px-5 rounded-[5px]'
                                    >
                        READ MORE
                    </motion.button>
                        )
                    }
                </div>
                <div className="sm:flex hidden  hero1-right w-[50%]  justify-center items-center">
                    <img src="heroimage2.png" alt="" className=' w-[100%]' />
                </div>
            </div>
                        <div className='hero2 w-[100%] h-[calc(55vh-90px)] md:h-[calc(70vh-90px)] lg:h-[calc(80vh-90px)] xl:h-[calc(100vh-90px)] !flex text-white font-[Nunito]'>
                <div className="hero1-left  w-[100%] sm:w-[50%]  h-[100%] flex flex-col gap-[2rem] text-center justify-center items-center p-[20px] ">
                    {
                        activeSlide === 1 && (

                            <motion.h1
                            initial="hidden"
                            whileInView="show"
                            variants={slideIn('left', "tween",0.5, 1, "easeIn")}
                            className='xl:text-[3em] md:text-[2em] text-[1.4em] lg:text-[2.4em] font-extrabold'>Our goal is to make 3D animation accessible to everyone.</motion.h1>
                            )
                        }
                            {
                                activeSlide === 1 && (
                                    <motion.button
                                    initial="hidden"
                                    whileInView="show"
                                    variants={slideIn('right', "tween",0.5, 1, "easeIn")}
                                    className=' bg-[#f9c900] text-[0.7em] xl:text-[1em] lg:text-[0.8em] py-1 px-2 lg:py-2 lg:px-3 xl:py-3 xl:px-5 rounded-[5px]'
                                    >
                        READ MORE
                    </motion.button>
                        )
                    }
                </div>
                <div className="sm:flex hidden hero1-right w-[50%]  justify-center items-center">
                    <img src="babloo.png" alt="" className=' w-[100%]' />
                </div>
            </div>
        </Slider>
            </AnimatePresence>
    </div>
  )
}

export default Hero
import React, { useState } from 'react'
import '../additionalcss/Navbar.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import MiscellaneousServicesOutlinedIcon from '@mui/icons-material/MiscellaneousServicesOutlined';
import RssFeedOutlinedIcon from '@mui/icons-material/RssFeedOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion';
import { navVariants } from '../motion/motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleNavbar = ()=>{

        setIsOpen(prev=>!prev)

    }
  return (
    <>
    <motion.div
    variants={navVariants}
    initial="hidden"
    animate="show"
    className='nav-container relative w-[100%]  p-3 bg-black text-white font-[Roboto]'>
        <div className={`nav-wrapper w-[90%] mx-auto h-[70px] transition-all w-[100%] flex justify-between items-center`}>
            <div className={`nav-left  flex justify-center items-center`}>
                <img src="logo.png" alt="" className="nav-logo w-[80px]" />
            </div>
            <div className={`nav-center w-[55%] lg:flex hidden justify-between`}>
                <span className=' lg:text-[0.9em] lg:flex  xl:text-[1em] hover:bg-[#f9c900] rounded-[5px] transition-all p-[10px] flex items-center gap-1'><HomeOutlinedIcon />HOME</span>
                <span className=' lg:text-[0.9em] lg:flex  xl:text-[1em] hover:bg-[#f9c900] rounded-[5px] transition-all p-[10px] flex items-center gap-1'><InfoOutlinedIcon/>ABOUT</span>
                <span className=' lg:text-[0.9em] lg:flex  xl:text-[1em] hover:bg-[#f9c900] rounded-[5px] transition-all p-[10px] flex items-center gap-1'><MiscellaneousServicesOutlinedIcon />SERVICES</span>
                <span className=' lg:text-[0.9em] lg:flex  xl:text-[1em] hover:bg-[#f9c900] rounded-[5px] transition-all p-[10px] flex items-center gap-1'><RssFeedOutlinedIcon/>BLOG</span>
                <span className=' lg:text-[0.9em] lg:flex  xl:text-[1em] hover:bg-[#f9c900] rounded-[5px] transition-all p-[10px] flex items-center gap-1'><WorkOutlineOutlinedIcon />CAREER</span>
                <span className=' lg:text-[0.9em] lg:flex  xl:text-[1em] hover:bg-[#f9c900] rounded-[5px] transition-all p-[10px] flex items-center gap-1'><ContactMailOutlinedIcon />CONTACT</span>
            </div>
            <div className="nav-right">
                <button className=' xl:text-[1em] py-1 px-1 hidden lg:block  font-bold text-[15px] nav-button rounded-[5px] xl:py-2 xl:px-3'><CallOutlinedIcon />Call Us Now</button>
                <button onClick={toggleNavbar} className='block lg:hidden'><MenuIcon fontSize='large' /></button>
            </div>
        </div>
    </motion.div>
    <div className={`flex flex-col justify-center lg:hidden bg-[#e9e9e9] mobile-nav ${isOpen ? "h-[280px]" : "h-[0px]"}`}>
                <span className=' lg:text-[0.9em] lg:flex mobile-nav-items   xl:text-[1em] hover:bg-[#f9c900] rounded-[5px] transition-all p-[10px] flex items-center gap-1'><HomeOutlinedIcon />HOME</span>
                <span className=' lg:text-[0.9em] lg:flex mobile-nav-items  xl:text-[1em] hover:bg-[#f9c900] rounded-[5px] transition-all p-[10px] flex items-center gap-1'><InfoOutlinedIcon/>ABOUT</span>
                <span className=' lg:text-[0.9em] lg:flex mobile-nav-items  xl:text-[1em] hover:bg-[#f9c900] rounded-[5px] transition-all p-[10px] flex items-center gap-1'><MiscellaneousServicesOutlinedIcon />SERVICES</span>
                <span className=' lg:text-[0.9em] lg:flex mobile-nav-items  xl:text-[1em] hover:bg-[#f9c900] rounded-[5px] transition-all p-[10px] flex items-center gap-1'><RssFeedOutlinedIcon/>BLOG</span>
                <span className=' lg:text-[0.9em] lg:flex mobile-nav-items  xl:text-[1em] hover:bg-[#f9c900] rounded-[5px] transition-all p-[10px] flex items-center gap-1'><WorkOutlineOutlinedIcon />CAREER</span>
                <span className=' lg:text-[0.9em] lg:flex mobile-nav-items  xl:text-[1em] hover:bg-[#f9c900] rounded-[5px] transition-all p-[10px] flex items-center gap-1'><ContactMailOutlinedIcon />CONTACT</span>
    </div>
    </>
  )
}

export default Navbar
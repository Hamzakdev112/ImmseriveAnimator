import React from 'react'
import '../additionalcss/Navbar.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import MiscellaneousServicesOutlinedIcon from '@mui/icons-material/MiscellaneousServicesOutlined';
import RssFeedOutlinedIcon from '@mui/icons-material/RssFeedOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import { motion } from 'framer-motion';
import { navVariants } from '../motion/motion';

const Navbar = () => {
  return (
    <motion.div
    variants={navVariants}
    initial="hidden"
    animate="show"
    className='nav-container w-[100%]  p-3 bg-black text-white font-[Roboto]'>
        <div className="nav-wrapper h-[70px] w-[100%] flex justify-between items-center">
            <div className="nav-left">
                <img src="logo.png" alt="" className="nav-logo w-[80px]" />
            </div>
            <div className="nav-center flex w-[55%] justify-between">
                <span className='flex items-center gap-1'><HomeOutlinedIcon />HOME</span>
                <span className='flex items-center gap-1'><InfoOutlinedIcon/>ABOUT</span>
                <span className='flex items-center gap-1'><MiscellaneousServicesOutlinedIcon />SERVICES</span>
                <span className='flex items-center gap-1'><RssFeedOutlinedIcon/>BLOG</span>
                <span className='flex items-center gap-1'><WorkOutlineOutlinedIcon />CAREER</span>
                <span className='flex items-center gap-1'><ContactMailOutlinedIcon />CONTACT</span>
            </div>
            <div className="nav-right">
                <button className='  font-bold text-[15px] nav-button rounded-[5px] py-2 px-3'><CallOutlinedIcon />Call Us Now</button>
            </div>
        </div>
    </motion.div>
  )
}

export default Navbar
import React from 'react'

const About = () => {
  return (
    <div className='mt-[60px] w-[85%] mx-auto flex '>
        <div className='w-[50%] flex flex-col gap-[1em]'>
            <div className='w-[80%] flex flex-col gap-[1em]'>
            <span className='text-[#f9c900] font-bold'>GIST OF WHAT WE DO</span>
            <h1 className='leading-[2.4rem]	 text-[gray] text-[2em] font-extrabold'>Groundwork For Business Development</h1>
            </div>
            <div className='text-[gray]'>
            <p>Immersive Animator is a design studio that crafts, interfaces and animates solutions for the present and future. Our processes and opinions vary with the times, but our motto remains constant. We animate to inspire. Our passion for 3D art and animation is at the heart of our software development. We continue to develop new ways to achieve more realistic, life-like animations with less time and effort.</p>
            <p>Our goal is to make 3D animation accessible to everyone. Whether you are a professional animator or just getting started, Immersive Animator has the tools you need to create high-quality animations quickly and easily.</p>
            <p>We believe that animation can inspire people and change the world. With Immersive Animator, you can bring your ideas to life and share them with the world.</p>
            <p>We hope you enjoy using our software as much as we enjoyed creating it!</p>
            </div>
            <button className='bg-[#f9c900] py-[0.7em] px-[2em] rounded-[10px] self-start'>Take Our Service</button>
        </div>
        <div className='w-[50%] flex items-start justify-center'>
            <img src="about.png" alt='about' className='w-[100%]  ' />
        </div>
    </div>
  )
}

export default About
export const navVariants = {
    hidden:{
        // opacity:0,
        y: -80,
        opacity: 0,
        transition:{
            type:"spring",
            stiffness: 300,
            damping: 140,
            
        },
    },
    show:{
        opacity:1,
        y: 0,
        transition:{
            type:"spring",
            stiffness: 80,
            delay: 0,

        },
    },
}
export const staggerContainer =(staggerChildren, delayChildren)=>({
    hidden:{},
    show: {
        transition: {
            staggerChildren,
            delayChildren,
        }
    }
});

export const textVarient = (delay) => ({
    hidden: {
      y: 80,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1,
        delay,
      },
    },
});

export const slideIn = (direction, type, delay, duration,ease) => ({
    hidden: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '150px' : 0,
      y: direction === 'up' ? '150px' : direction === 'down' ? '100%' : 0,
      opacity:0
    },
    show: {
      x: 0,
      opacity:1,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease
      },
    },
  });
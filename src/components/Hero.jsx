import React from 'react'
import heroImage from '../assets/hero-image.png';
import {motion} from 'framer-motion'
import {fadeIn} from '../utils/motion'
import {textVariant} from '../utils/motion'

const Hero = () => {
    return (
        <section id='home' className='container mx-auto flex flex-col md:flex-row justify-between items-center pt-44 pb-6 px-4 sm:px-6 lg:px-8'>

            {/* left col */}
            <div className='w-full md:w-1/2 spacy-y-8'>
                {/* star badge */}
                <motion.div
                    variants={fadeIn('right', 0.2)}
                    initial="hidden"
                    whileInView="show"
                    >
                    <div className='flex items-center gap-2 bg-gray-50 w-fit px-4 py-2 rounded-full hover:bg-gray-100
                        transition-colors cursor-pointer group'>
                        <span className='text-blue-600 group-hover:text-amber-300 group-hover:scale-110 transition-transform'>⭐</span>
                        <span className='text-sm font-medium'>Jump start your growth</span>
                    </div>
                </motion.div>

                {/* heading */}
                <motion.h1 
                    variants={textVariant(0.3)}
                    initial="hidden"
                    whileInView="show"
                    
                    className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
                    We boost the growth for
                    <span className='text-blue-600 relative ml-2'>
                        Startup to Fortune 500
                        <span className='absolute bottom-0 left-0 w-full h-0.5 bg-blue-200/60'></span>
                    </span> Companies
                    <span className='ml-2 animate-pulse'>⏰</span>
                </motion.h1>

                <motion.p 
                    variants={fadeIn('up', 0.4)}
                    initial="hidden"
                    whileInView="show"
                    className='text-gray-600 text-lg md:text-xl max-w-xl'>Get the most accurate leads, sales people training and conversions, tools and more — all within the
                    same one billing.
                </motion.p>

                <motion.div 
                variants={fadeIn('up', 0.5)}
                    initial="hidden"
                    whileInView="show"
                    
                    className='flex gap-4 max-w-md'>
                    <input type="email" placeholder='Email address' className='flex-1 px-6 py-4 border border-gray-200
                    rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all'/>
                    <button className='bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 cursor-pointer transition-all
                    hover:shadow-lg hover:shadow-blue-300'>→</button>
                </motion.div>
            </div>

            {/* right col */}
            <motion.div 
                variants={fadeIn('left', 0.5)}
                initial="hidden"
                whileInView="show"
                className="w-ful md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12">
                <div className='relative'>
                    <img src={heroImage} alt="hero image"className='rounded-lg relative z-10 hover:scale-[1.02]
                    transition-transfom duration-300' />
                </div>
            </motion.div>
        </section>
    )
}

export default Hero
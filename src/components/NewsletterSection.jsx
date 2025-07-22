import React from 'react'
import { HiArrowRight } from 'react-icons/hi';

const NewsletterSection = () => {
  return (
    <section className='container mx-auto px-4 sm:px-6 lg:px-8 py-16'>
      <div className='bg-blue-600 rounded-2xl overflow-hidden relative'>
        {/* gradient background layer */}
        <div className='absolute top-0 right-0 w-1/2 h-full bg-blue-700 clip-path-slant hidden md:block z-0'></div>

        {/* foreground content */}
        <div className='relative z-10 md:px-16 py-16 px-6 md:py-24'>
          <div className='flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12'>
            {/* left content */}
            <div className='text-white max-w-lg text-center md:text-left'>
              <h2 className='text-2xl sm:text-3xl lg:text-4xl font-medium mb-4'>Subscribe newsletter</h2>
              <p className='text-blue-100 text-sm sm:text-base'>
                Best cooks and best delivery guys all at your service. Hot tasty food.
              </p>
            </div>

            {/* right content */}
            <div className='flex flex-col sm:flex-row gap-4 sm:gap-0 w-full max-w-md'>
              <input
                type="email"
                placeholder='Enter your email address'
                className='w-full bg-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-l-xl sm:rounded-r-none focus:outline-none'
              />
              <button className='bg-green-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-l-none sm:rounded-r-lg flex items-center gap-2'>
                <span>Discover</span>
                <HiArrowRight className='size-5' />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>
        {
            /* clip path for slant gradient */
            `.clip-path-slant {
            clip-path:polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)
            }`
        }
      </style>
    </section>
  );
};

export default NewsletterSection;

import React from 'react'
import { FaLocationArrow } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='dark:bg-gray-900 bg-white'>
      <div className='container'>
        <div className='grid md:grid-cols-4 pb-20 pt-5 gap-4'>
            {/* company details */}
            <div className='py-8 px-4'>
                <a href="#"
 className='text-primary font-semibold
 tracking-widest text-2xl sm:text-3xl'>
                    FOODIE
                </a>
                <p className='text-gray-600 lg:pr-24 pt-3'>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed doloremque perspiciatis unde!
                </p>
                <p>Made by Me</p>
                <a href="" className='inline-block bg-primary p-3 rounded-2xl'> Visit us</a>
            </div> 
            <div className='mt-8 flex flex-col gap-4 text-xl '>
                <h1 className=' text-2xl'>Important Links</h1>
                <a href="">Home</a>
                <a href="">about</a>
                <a href="">contact</a>
                <a href="">blog</a>
            </div>
            <div className='mt-8 flex flex-col gap-4 text-xl '>
                <h1 className=' text-2xl'>Quick Links</h1>
                <a href="">Home</a>
                <a href="">about</a>
                <a href="">contact</a>
                <a href="">blog</a>
            </div>
            <div className=' px-4 py-8 col-span-2 sm:col-auto' >
             <div>
             <div className='flex
             items-center  gap-3'>
                <FaLocationArrow/>
                <div>
                    <p>Warangal</p>
                <p>Telangana</p>
                <p>India</p>
                </div>
             </div>
             </div>
            </div>
        </div>
      </div>
        </div>
  )
}

export default Footer
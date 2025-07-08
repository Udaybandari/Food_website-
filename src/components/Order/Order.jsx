import React from 'react'
import {GrSecure} from "react-icons/gr";
import { IoFastFoodOutline } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import myimage4 from '../../assets/biryani5.png';
const Order = () => {
  return (
    <div className='py-10 dark:bg-black dark:text-white bg-gray-100 text-black '>
        <div className='container flex justify-center items-center'>
          <div className='grid grid-cols-1 sm:grid-cols-2 place-items-center'>
           <div>
           <img src={myimage4} className='max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,0.1)]'alt="" />
           </div>
           <div className='flex flex-col  items-center gap-6 sm:pt-0'>
            <h1 className='font-bold  text-3xl sm:text-4xl'>Lorem ipsum dolor </h1>
            <p className='text-sm text-gray-500 tracking-wide leading-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quod fugit aperiam iste, earum sed, autem atque,
                 ex non expedita suscipit quae nihil eveniet aspernatur tempora. Tempore quo nisi laboriosam possimus corporis natus,
                 <br /> <br /> ad itaque, maxime repellendus vero eos nulla, quae quas suscipit ipsum nobis ea iure deserunt fugiat provident eius. Iure dolores molestias quae?</p>
                 <div className='flex flex-row   gap-6 '>
                       <GrSecure  className='text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-100 dark:bg-violet-400'/>
                 <IoFastFoodOutline  className='text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-red-100 dark:bg-red-400' />
                 <GiFoodTruck  className='text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-100 dark:bg-green-400'/>
                 </div>
                 <button className='outlinebutton '>Order now</button>
              
           </div>
          </div>
        </div>
    </div>
  )
}

export default Order
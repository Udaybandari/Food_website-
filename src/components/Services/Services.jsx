import React from 'react'
import myimage2 from '../../assets/biryani2.png';
import myimage3 from '../../assets/biryani3.png';
import myimage4 from '../../assets/biryani5.png';
const Images=[
  {
    id:1,
    imager:myimage2,
    name:"Biryani",
  },
  {
    id:2,
    imager:myimage3,
    name:"Chicken curry",
  },
  {
    id:3,
    imager:myimage4,
    name:"Buttermilk"
  },
]
const Services = () => {
      
  return (
    <div  className='bg-gray-100 dark:bg-gray-950 text-black dark:text-white flex justify-center items-center gap-3   '>
        <div className='container flex  flex-col items-center  justify-center mt-12 gap-1'>
            <div className='flex flex-col items-center justify-center gap-2'>
               <p className='text-primary'>our services</p>
           <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl'>Services</h1>
           <p className='text-sm line-clamp-2 text-gray-500 w-[350px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur odit expedita tempora repellat quo illum.
           </p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-3 place-items-center  w-full mt-22 ' >
                {
                   Images.map((item)=>(
                    <div key={item.id } data-aos="zoom-out" className='w-[330px] dark:bg-gray-700   rounded-2xl hover:bg-primary   h-[200px] m-3   flex flex-col items-center justify-center relative  shadow-2xl  '>
                     
                         <img src={item.imager} className='w-[200px] -top-1/2 absolute translate-y-1 ' alt="" />
                    
                      <h1 className='font-bold  text-xl sm:text-2xl '>{item.name}</h1>
                      <p className='line-clamp-2 w-77'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam aperiam aliquid voluptas.</p>
                    </div>
                   )
                   ) 
                }
            </div>
           
        </div>
    </div>
  )
}

export default Services
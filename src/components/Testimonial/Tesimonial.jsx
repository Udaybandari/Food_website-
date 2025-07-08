import React from 'react'


import image1 from '../../assets/slider1.jpg';
import image2 from '../../assets/slider 2.jpg';
import image3 from '../../assets/slider3.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const Herodata=[
{
 id:1,
 image:image1,
  subtitle:"Prokshan",
 
  description:
  `This headphone works really well you can buy 
  this for any amount that you require donot worry 
  about the price quality matters every time`,
},
{
 id:1,
 image:image2,
  subtitle:"Vivechan",

  description:
  `This headphone works really well you can buy 
  this for any amount that you require donot worry 
  about the price quality matters every time`,
},
{
 id:1,
 image:image3,

  subtitle:"John",
  description:
  `This headphone works really well you can buy 
  this for any amount that you require donot worry 
  about the price quality matters every time`,
},

]
const Tesimonial = () => {
   var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,          // Enable autoplay
  autoplaySpeed: 2000,     // Time between slides in ms (e.g., 2000 = 2 seconds)
};

  return (
    <div className='dark:bg-gray-950 dark:text-white py-10 bg-gray-100 text-black  flex justify-center'>
    <div className=' max-w-[450px] flex flex-col gap-5 space-y-22 items-center justify-center '>
        <div className='flex flex-col items-center justify-center gap-2'>
            <p className='text-primary ' >Testimonial</p>
            <h1 className='font-bold sm:text-3xl text-2xl'>Testimonial</h1>
             <p className=' text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt et neque possimus delectus odit architecto voluptatum! Inventore, beatae.</p> 
        </div>
        <div className='  max-w-[920px]  w-[600px] h-[350px] rounded-md    flex flex-col  my-6     '>
            <Slider {...settings}>
              {
                Herodata.map((d)=>(
                  <div key={d.id}>
                    <div className='flex items-center w-[600px] h-[300px]  space-y-4 flex-col justify-center  pb-18 mb-11 shadow-2xl rounded-md  bg-primary/10 dark:bg-gray-700'>
                        <img src={d.image}  className='block rounded-full ' alt="" />
                     <h1 className='font-bold text-2xl '>{d.subtitle}</h1>
                     <p className='text-sm w-[450px] '>{d.description}</p>
                    </div>
                    
                  </div>
                ))
              }
              </Slider>     
        </div>

     </div>
    </div>
  )
}

export default Tesimonial
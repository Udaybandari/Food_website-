import React from 'react'
import image1 from "../../assets/appstore.png"
import image2 from "../../assets/playstore.png"
import image3 from "../../assets/mobilebike.gif"
const Appstore = () => {
  return (
    <div  data-aos='slide-right' data-aos-duration="1000" 	data-aos-delay="300" className='bg-gray-200 min-h-[300px] py-10 mt-33 '>
    <div className='container '>
        <div className='grid grid-cols-1 sm:grid-cols-2 place-items-center'>
            <div className='space-y-3' >
          <h1 className='font-bold text-gray-500 text-3xl sm:text-4xl'>Food is Available for Android and Ios</h1>
          <div className='flex flex-row'>
                <img src={image2} className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"alt="" />
          <img src={image1} className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]" alt="" />
          </div>
         
            </div>
             <div>
           <img src={image3}  className='max-w-[350px] mx-auto'alt="" />
             </div>
        
        </div>
    </div>
    </div>
  )
}

export default Appstore
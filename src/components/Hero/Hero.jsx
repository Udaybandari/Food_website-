import React from 'react';
import myimage from '../../assets/vector3.png';
import myimage2 from '../../assets/biryani2.png';
import myimage3 from '../../assets/biryani3.png';
import myimage4 from '../../assets/biryani5.png';
const bgimage = {
  backgroundImage: `url(${myimage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '100%',
  width: '100%',
};
const Images=[
  {
    id:1,
    imager:myimage2,
  },
  {
    id:2,
    imager:myimage3,
  },
  {
    id:3,
    imager:myimage4,
  },
]

const Hero = () => {
  const [state,useState]=React.useState(Images)
  return (
    <div
      style={bgimage}
      className="min-h-[550px] sm:min-h-[600px]  bg-gray-100 dark:bg-gray-950 dark:text-white duration-200 flex justify-center items-center"
    >
      <div className="container  pb-8 sm:pb-0">
        <div className=" grid grid-cols-1 sm:grid-cols-2">
          {/* text-section */}
          <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              Welcome to the <span className='text-amber-400'>Foodie</span> Zone
            </h1>
            <p className="text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
              quidem nesciunt autem esse veritatis excepturi rem tempora illo
              veniam unde.
            </p>
            <div>
              <button className="outlinebutton">Order now</button>
            </div>
          </div>

          {/* image section */}
        <div  className="order-1 sm:order-2 min-h-[450px] sm:min-h-[450px] flex justify-center items-center space- relative  ">
            <div className='flex justify-center items-center h-[300px] sm:h-[450px] overflow-hidden '>
            <img
              src={myimage2}
              alt=""
              className="w-[300px] sm:w-[450px] spinner mx-auto"
            />
          </div>
          <div className='absolute flex lg:flex-col items-center   bottom-0 lg:top-1/2  lg:py-2 lg:-translate-y-1/2 right-0  bg-white/30 rounded-full'>
          {state.map((item)=>(
            <img
            key={item.id}
              src={item.imager} 
              alt=""
              className="max-w-[80px] h-[80px]  object-contain inline-block hover:scale-105 duration-200"
            />
          ))}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

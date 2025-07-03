import React from 'react' 
import myimage from '../../assets/vector3.png'
const bgimage=
  {
   backgroundImage:`url(${myimage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat:'no-repeat',
    height: '100%',
    width: '100%',
  }

const Hero = () => {
  
  return (
    <div style={bgimage}  className='sm:min-h-[600px] bg-gray-100  dark:bg-gray-900 dark:text-white duration-200 flex justify-center items-center '>
      <h1>Hello </h1>
    </div>
  )
}

export default Hero
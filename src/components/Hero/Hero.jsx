import React from 'react' 
import myimage from '../../assets/vector3.png'
import myimage2 from '../../assets/biryani2.png'
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
    <div style={bgimage}  className='   sm:min-h-[600px] bg-white  dark:bg-gray-900 dark:text-white duration-200 flex justify-center items-center '>
      <div className='grid grid-cols-2 place-items-center    '>
        <div  className='flex flex-col justify-between items-start space-y-3 gap-2'>
          <h1 className='font-bold  text-7xl w-[220px]'>Welcome to the Foodie Zone
          </h1>
          <p className='line-clamp-3 w-99'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis blanditiis unde repellat quidem quam. Culpa eaque sint aliquid tenetur saepe!</p>
          <button className='outlinebutton'>order now</button>
        </div> 
        <div>
       <img src={myimage2} className='w-[352px] spin' alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero
import React from 'react'
import image1 from '../../assets/navbar1.png'
import image2 from '../../assets/lightbutton.png'
import image3 from '../../assets/darkbutton.png'


const Navbar = () => {
   const[theme,setTheme]=React.useState(
    localStorage.getItem('theme')?localStorage.getItem('theme')
    :
     'light');
     const element=document.documentElement;
    console.log(element)
    React.useEffect(()=>{
      localStorage.setItem("theme",theme)
      if(theme=='dark')
      {
        element.classList.add('dark');
        element.classList.add('dark')
      }
      else{
        element.classList.remove('light');
        element.classList.remove('dark');
      }
    })

console.log(theme)
  
return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200' >
    <div className='container sm:py-0 py-3 '>
      <div className='flex justify-between items-center'> 
          {/* left section */}
         <div  >
          <a href="" className='flex flex-row gap-2 text-2xl sm:text-3xl font-bold'>
            <img src={image1} className='w-10 ' alt="" />
              FOODIE
            </a>
         
     
         </div>
         {/* right section */} 
         <div  className='flex items-center gap-8 '>
            <div >
          <div className="relative">
  <img
  onClick={()=>setTheme(theme=='dark'?'light':'dark')}
    src={image3}
    className={`w-12 absolute top-0 right-0 z-10 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 ${theme === "light" ? "opacity-100" : "opacity-0"}`}
    alt="Dark"
  />
  <img
   onClick={()=>setTheme(theme=='dark'?'light':'dark')}
    src={image2}
    className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 ${theme === "dark" ? "opacity-100" : "opacity-0"}`}
    alt="Light"
  />
</div>


            </div>
            <ul className=' hidden sm:flex  gap-4'>
              <li><a href="" className='py-4 px-4 inline-block hover:text-primary'>HOME</a></li>
              <li><a href="" className='py-4 px-4 inline-block hover:text-primary'>About</a></li>
              <li><a href="" className='py-4 px-4 inline-block hover:text-primary'>contact</a></li>

            </ul>

         </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar
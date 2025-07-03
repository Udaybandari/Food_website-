import React from 'react'
import image2 from '../../assets/lightbutton.png'
import image3 from '../../assets/darkbutton.png'
const Darkbutton = () => {
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
  return (
    <div>
       <div className="relative">
        <img
        onClick={()=>setTheme(theme=='dark'?'light':'dark')}
          src={image3}
          className={`w-10 absolute top-0 right-0 z-10 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 ${theme === "light" ? "opacity-100" : "opacity-0"}`}
          alt="Dark"
        />
        <img
         onClick={()=>setTheme(theme=='dark'?'light':'dark')}
          src={image2}
          className={`w-10 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 ${theme === "dark" ? "opacity-100" : "opacity-0"}`}
          alt="Light"
        />
      </div>
        </div>
  )
}

export default Darkbutton
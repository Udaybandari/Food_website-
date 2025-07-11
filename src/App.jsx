

import React  from 'react';
import Hero from './components/Hero/Hero'

import Navbar from './components/Navbar/Navbar'
import Services from './components/Services/Services'
import AOS from "aos";
import "aos/dist/aos.css"
import Order from './components/Order/Order';
import Appstore from './components/Appstore/Appstore';
import Tesimonial from './components/Testimonial/Tesimonial';
import Footer from './components/Footer/Footer';
function App() {
    React.useEffect(()=>{
        AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });

  })
   return (
   <div>
    <Navbar/>
    <Hero/>
    <Services/>
     <Order/>
     <Appstore/>
     <Tesimonial/>
     <Footer/>
   </div>
  )
}

export default App

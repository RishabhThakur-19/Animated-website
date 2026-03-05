import React from 'react'
import Hero from './Hero.jsx'
import  About  from './About.jsx'
import { Navbar } from './Navbar.jsx'
import Features from './Features.jsx'

 const App = () => {
  return (
   <div className="relative min-h-screen w-screen overflow-x-hidden">
             <Navbar/>
            <Hero/>
           <About/>
          <Features/>
          

   </div> 
  
  )
}
export default App 

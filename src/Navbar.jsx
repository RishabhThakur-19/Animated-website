import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import{useWindowScroll} from 'react-use';
import gsap from "gsap";
import photo from "./photos/logo.png";

const navitmes = ["Nexus", "Vault", "Prologue", "About", "Contact"];
export const Navbar = () => {
  
    const [isAudioPlaying,setisAudioPLaying]=useState(false);
    const [isIndicatorActive,setisIndicatorActive]=useState(false);
    const [lastScrollY,setlastScrollY]=useState(0) 
    const [isNavVisible,setisNavVisible]=useState(true) 

  const audioElementRef=useRef(null);
  const navContainerRef = useRef(null);


  const{y:currentScrollY}=useWindowScroll();

useEffect(()=>{
  if(currentScrollY===0){
    setisNavVisible(true);
    navContainerRef.current.classList.remove("floating-nav");
  }else if(currentScrollY>lastScrollY){
    setisNavVisible(false)
    navContainerRef.current.classList.add("floating-nav");

  }else if(currentScrollY<lastScrollY){
    setisNavVisible(true)
    navContainerRef.current.classList.add("floating-nav");

  }
  setlastScrollY(currentScrollY);

},
[currentScrollY,lastScrollY]
)


useEffect(()=>{
  gsap.to(navContainerRef.current,{
    y:isNavVisible? 0:-100,
    opacity:isNavVisible ?1 :0,
    duration:0.2
  })
},
[isNavVisible])






  const toggleAudioIndicator=()=>{
    setisAudioPLaying((prev)=>!prev);
    setisIndicatorActive((prev)=>!prev);

  }


useEffect(()=>{
  if(isAudioPlaying) {
    audioElementRef.current.play();
  }else{
    audioElementRef.current.pause();
  }
},[isAudioPlaying])




  return (
    
    <div
      ref={navContainerRef}
      className="fixed inset-x-0
     top-4 z-50 h-16 border-none transition-all duration-700 
     sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7 ">
            <img src={photo} alt="logo" className="w-10" />
            <Button
              id="product-button"
              title="Products"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-white md:flex hidden items-center justify-center gap-1"
            />
          </div>
          <div className=" flex h-full items-center">
            <div className=" md:black">
              {navitmes.map((item,index) => (
                <a key={index}
                href={`#${item.toLowerCase()}`}
                  className="relative ms-10
          text-xs uppercase font-bold
         text-blue-50 after:absolute 
        after:-bottom-0.5 after:left-0 
        after:h-[2px] after:w-full
         after:origin-bottom-right
         after:scale-x-0 after:bg-neutral-800 
        after:transition-transform after:duration-300
         after:ease-[cubic-bezier(0.65_0.05_0.36_1)] 
        hover:after:origin-bottom-left
         hover:after:scale-x-100
         dark:after:bg-white 
         cursor-pointer"
                >
                  {item}
                </a>
              ))}
            </div>
            <button className="ml-10 flex items-center space-x-0.5 " onClick={toggleAudioIndicator}
            >
              <audio ref={audioElementRef}
              className="hidden" src="./public/public_audio_loop (1).mp3"
               loop/>
               {
                
                [1,2,3,4].map((bar)=>(
                  <div key={bar}
                  className={`indicator-line
                   ${isIndicatorActive ?"active":" "}`}style={{animationDelay:`${bar *.2 }s`}}>

                  </div>

                ))




               }
              
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

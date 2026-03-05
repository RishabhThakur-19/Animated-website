import gsap from 'gsap';
import React, { useEffect } from 'react'

export const AnimatedTitle = ({title,containerClass}) => {

const containerRef=useRef(null);
useEffect(()=>{
  const ctx=gsap.context(()=>{
    const titleAnimation=gsap.timeline({
      scrollTrigger:{
        trigger:containerRef.current,
        start:"100 bottom",
        end:"center bottom",
        toggleActions:"play none none reverse"
      }
    });
    titleAnimation.to("#word",{
      opacity:1,
      transform:"transalate3d(0,0,0) rotateY(0deg) rotateX(0deg)",
      ease:'power2.inOut',
    })
  },containerRef)
  return()=>ctx.revert();
},);





  return (
    <div
          className={`mt-5 text-center text-4xl 
          uppercase leading-[0.8] md:text-[6rem] ${containerClass}`} 
        >
          {title.split('<br/>').map((Line,index)=>(

          <div key={index} className='flex-center 
          
          max-w-full flex-wrap gap-2 md:gap-3 '>

{Line.split(' ').map((word,i)=>(<span key={i } 
            className='animated-word' id='word'
             dangerouslySetInnerHTML={{__html:word}}/>))}
          </div>
        ))}
      
          </div>
  )
}
export default AnimatedTitle

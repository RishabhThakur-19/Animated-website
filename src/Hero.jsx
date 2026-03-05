import { useRef, useState } from "react";
import { Button } from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import{ScrollTrigger} from "gsap/all"
gsap.registerPlugin(ScrollTrigger)
const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideo, setLoadedVideo] = useState(0);

  const totalVideo = 4;
  const nextVideoRef = useRef(null);

  const handleVideoload = () => {
    setLoadedVideo((prev) => prev + 1);
  };
  const upComingVideo = (currentIndex % totalVideo) + 1;

  const handleMiniVideoClick = () => {
    setCurrentIndex(upComingVideo);
    setHasClicked(true);
  };

  useGSAP(()=>{if(hasClicked){
    gsap.set('#next-Video',{visibility:'visible'});
    gsap.to('#next-Video',{
      transformOrigin:'center center',
      scale:1,
      width:'100%',
      height:'100%',
      duration:0.9,
      ease:'power1.inOut',
      onStart:()=>nextVideoRef.current.play(),

    })
    gsap.from('#current-video',{
      transformOrigin:'center center',
      scale:0,
      duration:1.5,
      ease:'power1.inOut',
      

    })

  }

  },{dependencies:[currentIndex],revertOnUpdate:true})

useGSAP(()=>{
  gsap.set("#video-frame",{
    clipPath: "polygon(4% 1%, 58% 0, 100% 86%, 0% 90%)",
    borderRadius:"0 0 36% 10%"
  })
  gsap.from("#video-frame",{
     clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
     borderRadius:"0 0 0 0",
     ease:"power1.inOut",
     scrollTrigger:{
      trigger:"#video-frame",
      start:"center center",
      end:"bottom center",
      scrub:true,
      
     }
  })
})
   
  const getVideoSrc = (index) => `video/hero-${index}.mp4`;
  const wukong=(index)=>{

   if(index===10){return(
    'text-rose-500')
    }
    // else if(index==3){
    //   return("text-violet-800")

    // }
    // else if(index==4){
    //   return("text-cyan-500")}
    else{
      return(
      'text-white')
    }
  } 
console.log(wukong(upComingVideo))
console.log({upComingVideo})
  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">

      <div
        id="video-frame"
        className="relative z-10 h-dvh  overflow-hidden rounded-lg  text-"
      >
        <div>
          <div
            className="mask-clip-path absolute  top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] 
            z-50 size-60 cursor-pointer overflow-hidden rounded-lg"
          > 
            <div
              onClick={handleMiniVideoClick}
              className="relative flex justify-center items-center scale-50 opacity-0 transition-all 
              duration-500 ease-in hover:scale-100 hover:opacity-100"
            >
              <video
                ref={nextVideoRef}
                src={getVideoSrc(upComingVideo)}
                autoPlay
                loop
                muted
                id="current-video"
                className="origin-center
            size-64 scale-150 object-cover object-center"
                onLoadedData={handleVideoload}
              />
            </div>
          </div>
          <video
            ref={nextVideoRef}
            src={getVideoSrc(currentIndex)}
            autoPlay
            loop
            muted
            id="next-Video"
            className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] invisible  z-20 size-64 object-cover object-center rounded-lg"
            onLoadedData={handleVideoload}
          />
            <video
            src={getVideoSrc(
              currentIndex === totalVideo - 1 ? 3 : currentIndex
            )}
            autoPlay
            loop
            muted
            className="absolute left-0 top-0 size-full object-cover object-center"
            onLoadedData={handleVideoload}
          />
           
        </div>
        <h1 id="heading"
          className={`special-font uppercase font-black 
                  text-5xl
                 sm:right-10 sm:text-7xl md:text-7xl lg:text-[8rem] 
                   ${wukong(upComingVideo)} absolute bottom-5 right-5 z-40 `}
        >
          Gaming
        </h1>
        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 id="heading"
              className={`uppercase font-black 
                  text-5xl 
                 sm:right-10 sm:text-7xl md:text-7xl lg:text-[8rem] 
                   ${wukong(upComingVideo)} `}
            >
              redefine
            </h1>
            <p
              className="font-zentry mb-5 max-w-64  
text-white "
            >
              Enter the Mentagame layer <br />unleash the Play
            </p>

            <Button  id="watch-Trailer" title="watch-Trailer " leftIcon={<TiLocationArrow/>}
            
            containerClass="bg-yellow-300 flex justify-center items-center gap-1"
            />
          </div>
        </div>
      </div>
      <h1
          className="special-font uppercase font-black 
                  text-5xl 
                 sm:right-10 sm:text-7xl md:text-7xl lg:text-[8rem] 
                   text-black absolute bottom-5 right-5 "
        >
          Gaming
        </h1>
    </div >
  );
};
export default Hero;

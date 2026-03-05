import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
export const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center ",
        scrub: 1,
        pin: true,
        pinSpacing: true,
      },
    });
    clipAnimation.to(".mask-clip-path", {
      width: "100%",
      height: "100%",
      borderRadius: 0,
    });
  });

  return (
    <div id="About" className="min-h-screen w-screen ">
      <div
        className="relative mb-8 mt-36 w-full   
            flex flex-col items-center gap-5 "
      >
        <h2
          className="font-general text-sm uppercas
        e md:text-[10px]"
        >
          Welcome To The World
        </h2>
        <div
          className="mt-5 text-center text-4xl  
          uppercase font-bold text-weileading-[0.8] md:text-[6rem]"
        >
          Disc<b>o</b>ver the world's <br />
          <b>l</b>argest adventure
          </div>
          <div
            className="absolute
             bottom-[-70dvh] left-1/2 w-full max-w-80 -translate-x-1/2 text-center  text-10px
            font-circular-web md:max-w-[34rem] md:text-lg md:bottom-[-80dvh] "
          >
            <p>The GAme of GAmes Begins-yours life,now a n epic MMORPG</p>

            <p>Unites Every Player</p>
          </div>
        </div>
        <div className="h-dvh w-screen overflow-x-hidden" id="clip">
          <div
            className="mask-clip-path relative
             left-1/2 top-0.1 z-20 h-[40vh] w-80
             origin-center -translate-x-1/2
             overflow-hidden rounded-3xl md:w-[30vw] md:h-[60dvh]"
          >
            <img
              src="public\photos\about (1).webp"
              alt="about-photo"
              className="relative
                left-0 top-0 size-full object-cover"
            />
          </div>
        </div>
      </div>
    
  );
};
export default About;

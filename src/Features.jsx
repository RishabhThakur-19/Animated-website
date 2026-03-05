import React, { Children, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";


export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};
const Bentocard=({src,title,description,iscomingsoon})=>{
    return(
        <div className="relative size-full ">
            <video
            src={src}

            loop 
            muted
            autoPlay
            className="absolute left-0 top-0 size-full object-cover
            object-center"
            />
            <div className="relative z-10 flex size-full flex-col justify-between p-5 text-white">
                <div>
                    <h1 className="bento-title special-font">{title}</h1>
                    {description&&( <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
                    )}
                </div>
            </div>

        </div>
    );
}


export const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
            <p className="text-lg text-white uppercase ">Into the metagame layer</p>
            
   
        <p className="max-w-md text-lg text-white opacity-50">
IMMerse yourslef in a rich and ever-expanding
 universe where a vibrant array of products converge
  into an interconnected overlay experience on your
   world 

        </p>
             </div>
      <BentoTilt>
      <div className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
<Bentocard
src="./feature-1.mp4"
title={"radiant"}
description="A cross-platform metagame app turning your activities web2 and web3 games into a rewarding adventures"
iscomingsoon={true}
/>
      </div>

      </BentoTilt>

      <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
<BentoTilt className=" bento-tilt_1  border-hsla row-span-1   me-14 md:col-span-1 md:row-span-2">
    <Bentocard
    src="./video/feature-2.mp4"
    title={"CLOUD"}
    description="An Anime and gaming-inspires NFT collection-yhe IP primed for expansion."

    />

</BentoTilt>
<BentoTilt className="bento-tilt_1 border-hsla row-span-1 ms-12 md:ms-0 md:col-span-1 md:me-0">
    <Bentocard
    src="./video/feature-3.mp4"
    title=" NEXUS"
    description="A gamified social hub,adding a new dimension of play to social interaction for Web3 commuties "
    />

</BentoTilt>

<BentoTilt className="bento-tilt_1 border-hsla  md:col-span-1 md:me-0">
    <Bentocard
    src="./video/feature-4.mp4"
    title="AZUL"
    description="A gamified social hub,adding a new dimension of play to social interaction for Web3 commuties "
    />
</BentoTilt>
<div className="bento-tilt-2   border-hsla2 md:mt-4" >
    <BentoTilt className="relative z-10 flex size-full flex-col justify-between p-5 text-white">
                <div>
                    <h1 className="bento-title special-font">more <br /> coming soon</h1>
<TiLocationArrow className="m-5 scale-[5] self-end"/>
</div>

</BentoTilt>

</div>
<BentoTilt className="bento-tilt_2  border-hsla  md:mt-4">
    <video 
    src="./video/feature-5.mp4"
    loop 
    muted 
    autoPlay
    className="size-full object-cover object-center"/>
</BentoTilt>
      </div >
      </div>
    </section>
  );
};
export default Features;

import React from "react";

export const Button = ({title, id, righticon, leftIcon, containerClass}) => {
  return (
    <button
      id={id}
      className={`group relative z-30 w-fit
   cursor-pointer overflow-hidden rounded-full py-4 px-6 text-black ${containerClass}`}
    >
      {leftIcon}
      <span
        className="relative incline-flex overflow-hidden left-0 
font-general text-xs uppercase "
      >
        <div>{title}</div>
      </span>
      {righticon}
    </button>
  );
};
export default Button;

"use client"
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import React from 'react'

function Typewritter() {
    const words = [
        {
          text: "Build",
        },
        {
          text: "awesome",
        },
        {
          text: "Coders",
        },
        {
          text: "is",
        },
        {
          text: "Our Mission.",
          className: "text-blue-500 dark:text-blue-500",
        },
      ];
  return (
    <div className="dark  flex justify-center  items-center xl:h-[20rem] lg:h-[20rem] md:h-[20rem] sm:h-[15rem] "   >
        <TypewriterEffectSmooth words={words} />
    </div>
  )
}

export default Typewritter
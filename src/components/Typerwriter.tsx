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
    <div className="dark flex justify-center items-center h-[20rem] "   >
        <TypewriterEffectSmooth words={words} />
    </div>
  )
}

export default Typewritter
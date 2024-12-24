import React from "react";
import { Button } from "./ui/moving-border";

export default function Herosection() {
  return (
    <div className="h-[40rem] w-full rounded-md flex items-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <div className="flex flex-col items-center  p-4 max-w-7xl  mx-auto  z-10  w-full  ">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Tripti Arora
        </h1>
        <p className="mt-4 mb-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Dive into the world of coding with Tripti Arora&apos;s comprehensive
          coding courses and transform your coding journey today. Whether
          you&apos;re a beginner or looking to refine your skills, join us to
          unlock your true potential
        </p>
        <Button
          borderRadius="1.75rem"
          className="bg-black-500 text-white dark:bg-slate-900  dark:text-white border-neutral-200 dark:border-slate-800"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}

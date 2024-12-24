"use client"

import React from 'react'
import { HoverEffect } from '@/components/ui/card-hover-effect';
import { Button } from "@/components/ui/moving-border";    
import Footer from '@/components/Footer';

function page() {
    const [more, setMore] = React.useState(false); 
    
        const handleMore = () => {
            setMore(!more); 
        };
    
        const displayedProjects = more ? Services : Services.slice(0, 6); 
  return (
    <>
    <div className='flex flex-col justify-center items-center w-full h-fit' style={{backgroundColor: "#0C090A"}}>
        <h1 className='text-4xl font-bold pt-[10rem] text-center'>OUR SERVICES</h1>
        <HoverEffect items={displayedProjects} />
        <div className='my-10'>
        <Button onClick={handleMore} >{more ? 'Show Less' : 'View More'}</Button>
        </div>
        
    </div>
    <Footer/>
    </>
  )
}

export default page

const Services = [
    { title: "Web development", description: "We will teach you how to build websites using HTML, CSS, and JavaScript.", link: "link1" },
    { title: "Full stack development", description: "We will teach you how to build a full-stack web application using React,Express.Js, Node.js, and MongoDB.", link: "link2" },
    { title: "Frontend Development", description: "We will teach you how to build user interfaces using React and Next.js.", link: "link3" },
    { title: "Backend Development", description: "We will teach you how to build server-side applications using Node.js and Express.js.", link: "link4" },
    { title: "Data structures and Algorithms", description: "We will teach you how to solve complex problems using data structures and algorithms for your future Internship.", link: "link5" },
    { title: "Mobile development", description: "We will teach you how to build mobile apps using React Native.", link: "link6" },
    { title: "Interview Preparation", description: "We will help you prepare for interviews by providing you with practice questions and tips for success.", link: "link7" },
    { title: "Mock Interviews", description: "We will help you prepare for interviews by providing you with practice questions and tips for success.", link: "link8" },
    { title: "Project 9", description: "Description 9", link: "link9" },
    { title: "Project 10", description: "Description 10", link: "link10" },
    { title: "Project 11", description: "Description 11", link: "link11" },
    { title: "Project 12", description: "Description 12", link: "link12" },
  ];
  
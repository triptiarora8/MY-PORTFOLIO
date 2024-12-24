import React from 'react'
import { HoverEffect } from "../components/ui/card-hover-effect";

function Skills() {
  return (
    <div className='text-center    '>
        <h1 className='' style={{ fontSize: "2rem", fontWeight: "bold", color: "cyan"}}>Skills</h1>
        <HoverEffect items={skills} />
    </div>
  )
}

export default Skills

const skills = [
    { title: "React", description: "", link: "https://react.dev/" },
    { title: "Next.js",description: "",  link: "https://nextjs.org/" },
    { title: "Python",description: "", link: "link3" },
    { title: "Sql and No-SQl",description: "",  link: "link4" },
    { title: "Data structures and Algorithms",description: "", link: "link5" },
  ];
  
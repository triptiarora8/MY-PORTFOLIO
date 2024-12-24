"use client";
import React from 'react';
import { HoverEffect } from "../components/ui/card-hover-effect";
import { Button } from './ui/moving-border';

export default function FeaturedSections() {
    const [more, setMore] = React.useState(false); // Initially, show the first 6 items

    const handleMore = () => {
        setMore(!more); // Toggle the 'more' state to show more or fewer items
    };

    const displayedProjects = more ? projects : projects.slice(0, 6); // Show all if 'more' is true, else show the first 3 projects

    return (
        <div className='text-center py-10' style={{ backgroundColor: "#0C090A" }}>
            <h3 style={{ fontSize: "2rem", fontWeight: "bold", color: "cyan" }}>Featured Courses</h3>
            <h4 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "lightcyan" }}>Learn With Us</h4>
            <HoverEffect items={displayedProjects} />
            <Button onClick={handleMore}>{more ? 'Show Less' : 'View More'}</Button>
        </div>
    );
}

const projects = [
  { title: "Web development", description: "Description 1", link: "link1" },
  { title: "Full stack development", description: "Description 2", link: "link2" },
  { title: "Frontend Development", description: "Description 3", link: "link3" },
  { title: "Backend Development", description: "Description 4", link: "link4" },
  { title: "Data structures and Algorithms", description: "Description 5", link: "link5" },
  { title: "Mobile development", description: "Description 6", link: "link6" },
  { title: "Project 7", description: "Description 7", link: "link7" },
  { title: "Project 8", description: "Description 8", link: "link8" },
  { title: "Project 9", description: "Description 9", link: "link9" },
  { title: "Project 10", description: "Description 10", link: "link10" },
  { title: "Project 11", description: "Description 11", link: "link11" },
  { title: "Project 12", description: "Description 12", link: "link12" },
];

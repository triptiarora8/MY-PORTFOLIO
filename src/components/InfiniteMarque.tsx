import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

function InfiniteMarque() {
  return (
    <div className="h-[26rem]">
      <div
        className="text-center  py-10"
        style={{ fontSize: "2rem", fontWeight: "bold", color: "cyan" }}
      >
        Voices of Popular Coders
      </div>
      <div className=" rounded-md flex flex-col antialiased bg-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="slow"
        />
      </div>
    </div>
  );
}

export default InfiniteMarque;
const testimonials = [
  {
    quote: "Coding like poetry should be short and concise.",
    name: "Santosh Kalwar",
    title: "Software Engineer",
  },
  {
    quote: "Code is like humor. When you have to explain it, it's bad.",
    name: "Cory House",
    title: "",
  },
  {
    quote:
      "If we want users to like our software, we should design it to behave like a likable person.",
    name: " Alan Cooper",
    title: "A Dream Within a Dream",
  },
  {
    quote: "Software comes from heaven when you have good hardware.",
    name: "Ken Olsen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code.",
    name: "Dan Salomon",
    title: "Moby-Dick",
  },
];

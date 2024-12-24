"use client";

import React, { FormEvent, useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/moving-border";

function MusicSchoolContactUs() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitted:", { email, message });
  };

  return (
    <div className="h-screen w-full bg-black py-12 pt-36 ">
      {" "}
      <BackgroundBeams className=" w-full h-full z-0" />
      <div className="max-w-2xl mx-auto relative z-10">
        {" "}
        <h1 className="text-lg md:text-4xl text-center font-sans font-bold mb-8 text-white">
          Contact Us
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="rounded-lg border border-neutral-800 focus:ring-2 mx-10 xl:mx-0 focus:ring-teal-500 w-[90%] xl:w-full p-3 bg-neutral-950 placeholder:text-neutral-700"
            required
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            className="rounded-lg border border-neutral-800 mx-10 xl:mx-0 focus:ring-2 focus:ring-teal-500 w-[90%] xl:w-full  p-4 bg-neutral-950 placeholder:text-neutral-700"
            rows={5}
            required
          ></textarea>
          <div className="flex justify-center">
            <Button className="px-6 py-2 rounded-lg bg-cyan-600 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MusicSchoolContactUs;

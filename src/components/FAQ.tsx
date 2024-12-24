"use client"
import React, { useState } from 'react';
import { FaMinus, FaPlus } from "react-icons/fa"; // Correct import for React Icons

function FAQ() {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const toggleDescription = (id: number) => {
        if (openFAQ === id) {
            setOpenFAQ(null); 
        } else {
            setOpenFAQ(id); 
        }
    };

    return (
        <div className="h-[40rem] ">
            <div className="sm:text-xl md:text-xl lg:text-2xl xl:text-3xl m pb-2">
                <h1 className="text-center pb-4" style={{ fontWeight: "bold", color: "cyan" }}>
                    Frequently Asked Questions
                </h1>
            </div>
            <div className="flex  justify-center flex-col gap-4 items-center">
                {Faq.map((FAQ) => (
                    <div key={FAQ.id} className="w-full border-b px-10 py-4">
                        <div className="flex justify-between items-center">
                            <h1 className="sm:text-lg md:text-xl lg:text-xl xl:text-xl font-bold">{FAQ.Title}</h1>
                            <button
                                onClick={() => toggleDescription(FAQ.id)}
                                className="text-sm text-blue-500 hover:text-blue-700 "
                            >
                                {openFAQ === FAQ.id ? (
                                    <div className="w-fit h-fit p-[10px]  rounded-full">
                                        <FaMinus className="xl:text-xl sm:text-lg  text-purple" />
                                    </div>
                                ) : (
                                    <div className="w-fit h-fit p-[10px] rounded-full">
                                        <FaPlus className="text-xl text-dim-gray" />
                                    </div>
                                )}
                            </button>
                        </div>
                        {openFAQ === FAQ.id && <p className="mt-2 text-gray-400">{FAQ.description}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FAQ;

const Faq = [
    {
        id: 1,
        Title: "Why Us?",
        description: "Because We provide the best learning of coding with practical Projects."
    },
    {
        id: 2,
        Title: "What We Do?",
        description: "We provide the best learning of coding with practical Projects."
    },
    {
        id: 3,
        Title: "What Makes Us Different?",
        description: "We provide coding lessons that focus on real-world applications and hands-on projects."
    },
    {
        id: 4,
        Title: "How Can I Enroll?",
        description: "Simply visit our Services page, choose a course, and sign up to start learning!"
    },
    {
        id: 5,
        Title: "What Courses Do You Offer?",
        description: "We offer a variety of coding courses, including web development, Full Stack Development, and more."
    },
    {
        id: 6,
        Title: "Can I Get a Certificate?",
        description: "Yes, upon successful completion of a course, you will receive a certificate of achievement."
    },
];

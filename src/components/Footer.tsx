import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='text-center flex flex-col md:mt-10 h-[10rem]'>
        <div className='flex justify-center flex-col items-center text-center gap-2 '>
            <div className='flex flex-row justify-center flex-wrap gap-2 '>
            <h3>Address: Jodhpur</h3>
            <h3><Link href={"xyz123@gmail.com"}>Email: xyz123@gmail.com</Link></h3>
            <h3>Phone: +919839993892</h3>
            </div>
             <div className='flex gap-2'>
            <h3><Link href={"/about"}>About Us</Link></h3>
            <h3><Link href={"/services"}> Services</Link></h3>
            <h3><Link href={"/contact"}>Contact Us</Link></h3>
            <h3><Link href={"/Refund"}>Refund Policy</Link></h3>
            </div> 
        </div>
    </div>
  )
}

export default Footer
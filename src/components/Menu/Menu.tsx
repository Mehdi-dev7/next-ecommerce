"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';



export default function Menu() {

const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=''><Image src="/menu.png" alt="Menu" width={28} height={28} className='cursor-pointer' onClick={() => setIsOpen((prev) => !prev)} />
    {isOpen &&(
      <div className='absolute bg-black text-white left-0 top-20 w-full h-[calc(100VH-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10'>
        <Link href="/">Home</Link>
        <Link href="/">Shop</Link>
        <Link href="/">Deals</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Logout</Link>
        <Link href="/">Cart(1)</Link>
        
      </div>
    )
  }
    
    </div>
  )
}
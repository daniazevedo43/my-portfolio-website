"use client"
import { Kaushan_Script } from 'next/font/google'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from 'react';

const kaushan = Kaushan_Script({
    weight: '400',
})

export default function Navbar() {

  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
        <nav className="flex items-center justify-between flex-wrap bg-[#1976d2] p-4">
            <Link href="/" className="flex items-center flex-shrink-0 text-white mr-6">
                <span className={`${kaushan.className} text-xl`}>Daniel Azevedo</span>
            </Link>
            <div className="block lg:hidden">
                <button 
                    onClick={handleClick} 
                    className="flex items-center px-3 py-2 rounded text-white border-teal-400 hover:text-white hover:border-white"
                >
                    {!isOpen ? (
                        <svg 
                            className="fill-current h-5 w-5" 
                            viewBox="0 0 20 20" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                        </svg>
                    ) :
                    (
                        <svg 
                            className="fill-current h-5 w-5" 
                            viewBox="0 0 20 20"
                        >
                            <title>Close</title>
                            <path 
                                fill="currentColor" 
                                d="M18.3 5.71a1 1 0 00-1.42 0L12 10.59 7.12 5.7A1 1 0 105.7 7.12L10.59 12l-4.88 4.88a1 1 0 101.41 1.41L12 13.41l4.88 4.88a1 1 0 001.41-1.41L13.41 12l4.88-4.88a1 1 0 000-1.41z"
                            />
                        </svg>
                    )
                    }
                    
                    
                </button>
            </div>
            <div className={` ${
                isOpen ? '' : 'hidden'
            }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
            <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
                <Link 
                    href="/" 
                    className={
                        pathname === '/' ?
                        "block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-8 underline" :
                        "block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-8"
                    }
                >
                    Home
                </Link>
                <Link 
                    href="/about" 
                    className={
                        pathname === '/about' ?
                        "block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-8 underline" :
                        "block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-8"
                    }
                >
                    About
                </Link>
                <Link 
                    href="/" 
                    className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-8">
                    Projects
                </Link>
                <Link 
                    href="/" 
                    className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white"
                >
                    Contact
                </Link>
            </div>
          </div>
        </nav>    
    </div>
  )
}
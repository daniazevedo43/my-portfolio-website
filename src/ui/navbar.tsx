"use client"
import { Kaushan_Script } from 'next/font/google'
import Link from "next/link";
import { usePathname } from "next/navigation";

const kaushan = Kaushan_Script({
    weight: '400',
})

export default function Navbar() {

  const pathname = usePathname();

  return (
    <div>
        <nav className="flex items-center justify-between flex-wrap bg-[#1976d2] p-4">
            <Link href="/" className="flex items-center flex-shrink-0 text-white mr-6">
                <span className={`${kaushan.className} text-2xl`}>Daniel Azevedo</span>
            </Link>
            <div>
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
        </nav>    
    </div>
  )
}
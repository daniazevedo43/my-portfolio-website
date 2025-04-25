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
                <span className={`${kaushan.className} text-xl`}>Daniel Azevedo</span>
            </Link>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
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
"use client"
import { usePathname } from "next/navigation";

export default function Navbar() {

  const pathname = usePathname();
  
  return (
    <div>
        <nav className="flex items-center justify-between flex-wrap bg-[#1976d2] p-5">
            <a href="/" className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">Daniel Azevedo</span>
            </a>
            <div>
                <a 
                    href="/" 
                    className={
                        pathname === '/' ?
                        "block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-8 underline" :
                        "block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-8"
                    }
                >
                    Home
                </a>
                <a 
                    href="/about" 
                    className={
                        pathname === '/about' ?
                        "block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-8 underline" :
                        "block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-8"
                    }
                >
                    About
                </a>
                <a 
                    href="/" 
                    className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-8">
                    Projects
                </a>
                <a 
                    href="/" 
                    className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white"
                >
                    Contact
                </a>
            </div>
        </nav>    
    </div>
  )
}
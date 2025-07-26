import Image from 'next/image'

export default function About() {
  return (
    <div>
      <Image 
        src='/about-me-pic.jpg' 
        alt='About' 
        width={460} 
        height={460} 
      />
    </div>
  )
}
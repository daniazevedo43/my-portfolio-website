import Image from 'next/image'

export default function About() {
  return (
    <div 
      className='mt-10'
    >
      <div  
        className='flex justify-center'
      >
        <div>
          <Image 
            src='/about-me-pic.jpg' 
            alt='About' 
            width={500} 
            height={500} 
          />
        </div>
        <div className='m-8'>
          <div className='text-4xl font-semibold font-ubuntu'>
            <p>About me</p>
          </div>
          <div className='max-w-150 mt-3 text-xl font-ubuntu'>
            <p>
              I'm a 28 year old fullstack developer with one year of 
              hands-on experience, driven by a strong passion for 
              IT.
            </p>
            <p>
              My journey began with a Management IT Technician
              professional course during high school. Then I went to 
              college where I took a Technical and Higher Professional
              Course in Networks and Computer Systems, and after that,
              I move on with my studies and got a Bachelor's degree in
              Computer Engineering to study programming.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
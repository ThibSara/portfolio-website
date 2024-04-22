"use client";
import React from 'react'
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';


const HeroSection = () => {
  return (
    <section>
        <div className="grid grid-cols-1 lg:grid-cols-12 sm:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className="text-white mb-4 text-4xl lg:text-6xl sm:text-5xl font-extrabold">
                <span className ="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Hello, I'm {" "} </span>
                <br></br>
                <TypeAnimation
      sequence={[
        'Sara',
        1000, 
        'a Software Engineer',
        1000,
        'a Web Developer',
        1000,
        'a Mobile Developer',
        1000
      ]}
      wrapper="span"
      speed={25}
      repeat={Infinity}
    />
                </h1>
                <p className ="text-[#ADB7BE] lg:text-xl mb-6 text-base sm:text-lg">
                I'm a software engineer. I Also Enjoy UX design and im a part time full stack dev.
                </p>
                
                <div>
                <button className="px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-white w-full sm:w-fit bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">Hire Me</button>
                <button className="px-1 py-1 rounded-full bg-transparent hover:bg-slate-800 mt-3 w-full sm:w-fit bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
                    <span className="block bg-[#121212] hover:bg-slate-800 text-white rounded-full px-5 py-2">
                    Download CV
                    </span>
                    </button>
            </div>
            </div>
            
            
       
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">

            <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
            <Image
            src="/images/hero-image.png"
            alt="Picture of the author"
            className ="absolute transform -translate-x-1/2 -translate-y-1/2  left-1/2 top-1/2"
            width={300}
            height={300}
            />
            </div>
        </div>
        </div>
    </section>
  )
}

export default HeroSection
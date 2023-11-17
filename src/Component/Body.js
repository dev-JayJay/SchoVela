import React from 'react'
import logo from './logo.jpeg'
import { FaApple } from "react-icons/fa";
// import { PiBrainThin } from 'react-icons/pi'
import Typewriter from 'typewriter-effect';
import { TiVendorAndroid } from "react-icons/ti";
import Button from './Button';


function Body() {

  return (
    <div name='BackTop'>
        <div className='mt-20 lg:mt-marginTop1'>
            <div className='container mx-auto flex flex-col justify-center items-center w-full h-full lg:flex lg:flex-row lg:justify-center lg:items-center bg-black lg:rounded-br-rounded1 lg:rounded-tl-rounded1 '>

            <div className='col-1 mb-0 w-62 m-4 lg:w-width2'>
                <div data-aos="flip-left" className='relative text-start lg:text-center lg:items-center'>
                    <img 
                    src={logo} alt='SclovelaLogo'
                    className='w-16 rounded-full lg:hidden absolute right-7'
                    /> 
                    <h2 className='text-white lg:text-5xl text-2xl font-Beginner text-center'>Explore</h2>
                    <h1 className='text-Ared lg:text-6xl text-4xl font-Agbalumo text-center'>
                    <Typewriter
                      options={{
                        strings: ['Schovela,'], // Replace with your text
                        delay: 100, // Decrease this value to increase typing speed
                        autoStart: true, 
                        loop: true,
                      }}  
                    />
                    </h1>
                    <p className='text-white lg:text-2xl text-center text-1xl font-Signika capitalize'>
                        where learning evolves. Download PDF books for seamless access,
                         listen to audio lectures, and engage with captivating audio-visual content.
                         <span className='text-Ared lg:text-2xl capitalize text-1xl'>
                         Elevate your educational journey with Schovela - where innovation meets education.
                        </span>
                    </p>
                    <div className='flex flex-col text-center items-center mb-3 mt-2 lg:mt-5'>
                        <h1 className='text-white flex flex-row text-2xl lg:text-3xl items-center mb-2 lg:mb-5 font-Signika'><span>Download Now</span></h1>
                        <div className='flex flex-row flex-wrap'>
                        <div className='flex flex-row flex-wrap justify-center lg:justify-between'>
                        <Button Text='Android' icon={<TiVendorAndroid />} subText='Download on'  />
                        <Button Text='App Store' icon={<FaApple />} subText='Coming Soon'  />
                        </div>

                        </div>
                    </div>
                </div>
            </div>

                <div className='col-2 mt-0 mb-0 '>
                    <img 
                    src={logo} alt='SclovelaLogo'
                    className='hidden lg:block w-40 lg:w-full rounded-full'
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Body
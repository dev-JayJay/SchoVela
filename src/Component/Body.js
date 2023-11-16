import React from 'react'
import logo from './logo.jpeg'
import { FaApple } from "react-icons/fa";
// import { PiBrainThin } from 'react-icons/pi'
import Typewriter from 'typewriter-effect';
import { TiVendorAndroid } from "react-icons/ti";


function Body() {

  return (
    <div name='BackTop'>
        <div className='mt-20 lg:mt-marginTop1'>
            <div className='container mx-auto flex flex-col justify-center items-center w-full h-full lg:flex lg:flex-row lg:justify-center lg:items-center bg-black lg:rounded-br-rounded1 lg:rounded-tl-rounded1 '>

            <div className='col-1 mb-0 w-62 m-4 lg:w-width2'>
                <div data-aos="fade-right" className='relative text-start lg:text-center lg:items-center'>
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

                        <div className='flex flex-row justify-center items-center border border-Ared w-40 lg:w-64 h-8 lg:h-14 rounded-full capitalize mr-2 lg:mr-5 hover:bg-red-600 cursor-pointer'>
                        <TiVendorAndroid className='lg:w-8 lg:h-8 mr-3  lg:mr-2 lg:mt-2 ml-1 text-white lg:mb-2' />
                          <div className='relative lg:mt-2'>
                            <p className='text-white text-center absolute bottom-6 right-4 hidden lg:block'>get it on</p>
                            <p className='text-white text-1xl lg:text-2xl'>Android</p>
                          </div>
                        </div>

                        <div className='flex flex-row justify-center items-center border border-Ared w-40 lg:w-64 h-8 lg:h-14 rounded-full capitalize hover:bg-red-600'>
                        <FaApple className='lg:w-8 lg:h-8 mr-3  lg:mr-2 lg:mt-2 ml-1 text-white lg:mb-2'/>
                          <div className='relative lg:mt-2'>
                            <p className='text-white absolute bottom-6 right-1 hidden lg:block'>Coming Soon</p>
                            <p className='text-white text-1xl lg:text-2xl'>App Store</p>
                          </div>
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
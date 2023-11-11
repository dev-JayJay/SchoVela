import React from 'react'
import logo from './logo.jpeg'
import { LiaApple } from 'react-icons/lia'
import { TbFileDownload } from 'react-icons/tb'
import { FaGooglePlay } from 'react-icons/fa'
// import Typist from 'react-typist';


function Body() {

  return (
    <div>
        <div className='mt-marginTop1'>
            <div className='container mx-auto flex flex-col justify-center items-center w-full h-full lg:flex lg:flex-row lg:justify-center lg:items-center bg-black lg:rounded-br-rounded1 lg:rounded-tl-rounded1 '>

            <div className='col-1 mb-0 w-62 m-4 lg:w-width2'>
                <div className='relative text-start lg:text-center lg:items-center'>
                {/* <img 
                    src={logo} alt='SclovelaLogo'
                    className='w-20 lg:hidden absolute right-7'
                    /> */}
                    <h2 className='text-white lg:text-5xl text-2xl font-Beginner'>Explore</h2>
                    <h1 className='text-Ared lg:text-6xl text-4xl font-Agbalumo'>Schovela,</h1>
                    <p className='text-white lg:text-2xl text-1xl font-Signika capitalize'>
                        where learning evolves. Download PDF books for seamless access,
                         listen to audio lectures, and engage with captivating audio-visual content.
                    </p> 
                    <span className='text-Ared lg:text-2xl text-1xl'>
                    Elevate your educational journey with Schovela - where innovation meets education.
                    </span>
                    <div className='flex flex-col text-center items-center mt-5'>
                        <h1 className='text-white flex flex-row text-3xl items-center mb-5 font-Signika'><TbFileDownload /><span>Download on</span></h1>
                        <div className='flex flex-col lg:flex-row'>
                        <button className='text-white flex flex-row border border-Ared w-64 h-14 justify-center rounded-full items-center mr-5 text-2xl hover:bg-red-600'><span className='mr-2 mb-2'>App Store</span><LiaApple /></button>
                        <button className='text-white flex flex-row border border-Ared w-64 h-14 justify-center rounded-full items-center text-2xl hover:bg-red-600'><span className='mr-2 mb-2'>Google Play</span><FaGooglePlay /></button>
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
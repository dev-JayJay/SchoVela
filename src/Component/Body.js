import React from 'react'
import logo from './logo.jpeg'
// import Typist from 'react-typist';


function Body() {

  return (
    <div>
        <div className='mt-5'>
            <div className='container mx-auto flex flex-row justify-center items-center bg-black rounded-tr-full rounded-br-full rounded-tl-full'>

            <div className='col-1 w-width2'>
                <div className='text-center'>
                    <h2 className='text-white text-4xl'>Explore</h2>
                    <h1 className='text-Ared text-6xl'>Schovela</h1>
                    <p className='text-white text-2xl'>
                        where learning evolves. Download PDF books for seamless access,
                         listen to audio lectures, and engage with captivating audio-visual content.
                    </p> 
                    {/* <Typist>
                    Elevate your educational journey with Schovela - where innovation meets education.
                    </Typist> */}
                    
                </div>
            </div>

                <div className='col-2'>
                    <img 
                    src={logo} alt='SclovelaLogo'
                    className='w-full'
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Body
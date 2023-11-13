import React from 'react'
import logo from './logo.jpeg'
import logoTwo from './logoTwo.jpeg'
import avater1 from './avater1.png'
import { LiaApple } from 'react-icons/lia'
import { TbFileDownload } from 'react-icons/tb'
import { FaGooglePlay } from 'react-icons/fa'
import schovelaflyer from './schovelaflyer.JPG'
// import { PiBrainThin } from 'react-icons/pi'
import TeamData from './TeamData.json'
import FeaturesData from './FeaturesData.json'
import Typewriter from 'typewriter-effect';


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
                    <h1 className='text-Ared lg:text-6xl text-4xl font-Agbalumo'>
                    <Typewriter
                      options={{
                        strings: ['Schovela,'], // Replace with your text
                        delay: 100, // Decrease this value to increase typing speed
                        autoStart: true,
                        loop: true,
                      }}  
                    />
                    </h1>
                    <p className='text-white lg:text-2xl text-1xl font-Signika capitalize'>
                        where learning evolves. Download PDF books for seamless access,
                         listen to audio lectures, and engage with captivating audio-visual content.
                    </p>
                    <span className='text-Ared lg:text-2xl capitalize text-1xl'>
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

        <div className='About relative flex flex-col justify-center'>

            {/* <p className='text-white text-3xl absolute'><PiBrainThin /></p> */}

            <h1 className='text-Ared capitalize text-center font-Acme text-3xl mt-8 mb-8'>About Schovela: Nurturing Knowledge, Empowering Education</h1>
            <div className='flex flex-row justify-center items-center' >
                <img 
                src={logoTwo} alt='Schovel.Logo2'
                className='w-width3 h-height2 rounded-tl-3xl rounded-br-3xl'
                />
                <div className='text ml-5'>
                <div className='text-white w-width4'>
                    <h2 className='text-Ared text-2xl font-Agbalumo capitalize mb-4'>About Schovela: Elevate Your Learning Experience!</h2>
                   <p className='items-start font-Acme tracking-wider'>
                   Discover Schovela, a collaborative project designed to revolutionize your academic pursuits.
                     Dive into a vast repository of knowledge with downloadable PDFs,
                     enabling you to access essential materials at your convenience. 
                     Immerse yourself in audio lectures that bring coursework to life, 
                     providing an auditory dimension to your learning. Additionally, 
                     enrich your understanding through audiovisual lectures meticulously curated for each course. 
                     Schovela is not just a platform; it's a tool crafted to empower students by providing seamless access to educational resources.
                      Join us in reshaping the way you learn – where knowledge seamlessly integrates with accessibility.
                   </p>
                </div>
                </div>
            </div>

            {/* <p className='text-white text-3xl absolute'><PiBrainThin /></p> */}

            <div className='flex flex-row justify-center items-center' >
            <div className='text mr-5'>
                <div className='text-white w-width4'>
                    <h2 className='text-Ared text-2xl font-Agbalumo capitalize mb-4'>Explore, Engage, Excel: Academic Triumph Awaits!</h2>
                   <p className='items-start font-Acme tracking-wider'>
                   Whether you're a dedicated student craving comprehensive study materials or a knowledge enthusiast hungry for intellectual growth,
                    Schovela is your ultimate destination. Our platform simplifies accessibility,
                     empowering learners to effortlessly download, play, and absorb course-specific content.
                      Join us in reshaping education, where every click opens the door to a boundless world of learning possibilities.
                       At Schovela,
                       we invite you to explore, engage, and excel,
                        as we believe in breaking barriers and fostering a dynamic educational experience. 
                        Unleash your potential and embark on a journey of knowledge enrichment with Schovela!
                   </p>
                </div>
                </div>

                <img 
                    src={schovelaflyer} alt='SclovelaLogo'
                    className='w-width3 h-height2 rounded-tr-3xl rounded-bl-3xl'
                    />
                
            </div>

            <div className='feature'>
              <div className='container mx-auto'>
              <h1 className='text-Ared capitalize text-center font-Acme text-3xl mt-8 mb-8'>Unveiling The Features Of Schovela</h1>
                <div className='flex flex-row justify-evenly text-center'>
                    {
                        FeaturesData.resources.map((items,index) => {
                            return(
                                <div key={index} className='w-width3 relative'>
                                    <h3 className='absolute text-8xl bottom-bottom1 right-8 z-50 opacity-25 text-Ared'>{ items.number }</h3>
                                    <h2 className='text-white text-3xl font-Acme'>{ items.header }</h2>
                                    <p className='text-white items-start font-Beginner font-fontSize2 tracking-wider'>{ items.content }</p>
                                </div>
                            )
                        })
                    }
                </div>
              </div>
            </div>

            <div className='Team'>
              <div className='container mx-auto'>
              <h1 className='text-Ared capitalize text-center font-Acme text-3xl mt-8 mb-8'>About Team SchoVela</h1>
                <div className='flex flex-row flex-wrap mx-auto items-center justify-around text-center'>
                    {
                        TeamData.team.map((items,index) => {
                            return(
                                <div key={index} className='w-width5 h-height3 border rounded-br-3xl rounded-tl-3xl'>
                                    <h3 className='text-white font-Agbalumo text-2xl mt-2 mb-2'>{ items.name }</h3>
                                    <img src={avater1} alt='avaterlogo' 
                                    className='rounded-full ml-20 w-32'
                                    />
                                    <p className=' text-Ared font-Agbalumo text-2xl'>{ items.position }</p>
                                    <p className='text-white '>{ items.description }</p>
                                </div>
                            );
                        })
                    }
                </div>
              </div>
            </div>
        </div>

    </div>
  )
}

export default Body
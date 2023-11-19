import React from 'react'
import logoTwo from './logoTwo.jpeg'
import schovelaflyer from './schovelaflyer.JPG'

function About() {
  return (
    <div name="About" className='About relative flex flex-col justify-center'>

            {/* <p className='text-white text-3xl absolute'><PiBrainThin /></p> */}

            <h1 className='text-Ared capitalize text-center font-Acme text-2xl lg:text-3xl mt-8 mb-8'>About Schovela: Nurturing Knowledge, Empowering Education</h1>
            <div data-aos="flip-right" className='flex flex-row flex-wrap justify-center items-center mb-5' >
                <img 
                src={logoTwo} alt='Schovel.Logo2'
                className='lg:w-width3 lg:h-height2 w-80 mb-2 rounded-tl-3xl rounded-br-3xl'
                />
                <div className='text ml-5'>
                <div className='text-white w-full lg:w-width4'>
                    <h2 className='text-Ared text-2xl font-Agbalumo capitalize mb-4'>About Schovela: Elevate Your Learning Experience!</h2>
                   <p className='items-start font-Acme tracking-wider'>
                   Discover Schovela, a collaborative project designed to revolutionize your academic pursuits.
                     Dive into a vast repository of knowledge with PDFs,
                     enabling you to access essential materials at your convenience. 
                      Additionally, 
                     enrich your understanding through audiovisual lectures meticulously curated for each course. 
                     Schovela is not just a platform; it's a tool crafted to empower students by providing seamless access to educational resources.
                      Join us in reshaping the way you learn – where knowledge seamlessly integrates with accessibility.
                   </p>
                </div>
                </div>
            </div>

            {/* <p className='text-white text-3xl absolute'><PiBrainThin /></p> */}

            <div data-aos="flip-left" className='flex flex-row flex-wrap justify-center items-center' >
            <div className='text ml-5 lg:mr-5'>
                <div className='text-white w-full lg:w-width4 mb-2'>
                    <h2 className='text-Ared text-2xl font-Agbalumo  mb-4'>Explore and Excel: Academic Triumph Awaits!</h2>
                   <p className='items-start font-Acme tracking-wider'>
                   Whether you're a dedicated student craving comprehensive study materials or a knowledge enthusiast hungry for intellectual growth,
                    Schovela is your ultimate destination. Our platform simplifies accessibility,
                     empowering learners to effortlessly play, and absorb course-specific content.
                      Join us in reshaping education, where every click opens the door to a boundless world of learning possibilities.
                       At Schovela,
                       we invite you to explore and excel,
                        as we believe in breaking barriers and fostering a dynamic educational experience. 
                        Unleash your potential and embark on a journey of knowledge enrichment with Schovela!
                   </p>
                </div>
                </div>

                <img 
                    src={schovelaflyer} alt='SclovelaLogo'
                    className='lg:w-width3 lg:h-height2 w-80 rounded-tr-3xl rounded-bl-3xl'
                    />
                
            </div>           

        </div>
  )
}

export default About
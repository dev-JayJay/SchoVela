import React from 'react'
import logo from './logo.jpeg'
import { useState } from "react";
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'

function Header() {

    const [clicked, setClicked] = useState('');

    const handleClick = () => {
        setClicked(!clicked);
      }

  return (
    <div>
        <header className='bg-black h-16 w-full lg:flex lg:flex-row lg:justify-evenly'>
            <div className='flex flex-row items-center text-fontSize1'>
                <img 
                src={logo}
                alt='SchovelaLogo'
                className='w-width1 h-height1 rounded-3xl'
                />
                <p className='text-Ared'>SchoVela</p>
            </div>
            <nav className=''>
                <ul className={` ${ clicked ? 'items-center text-center w-full bg-[#212532]' : 'hidden' }
                lg:flex lg:flex-row lg:justify-evenly lg:items-center`}>
                    <li className='text-white lg:mt-5 mr-20 text-fontSize1'>
                        <a href='/'>
                            Home
                        </a>
                    </li>
                    <li className='text-white mt-5 mr-20 text-fontSize1'>
                        <a href='/'>
                            About
                        </a>
                    </li>
                    <li className='text-white mt-5 mr-20 text-fontSize1'>
                        <a href='/'>
                            Features
                        </a>
                    </li>
                    <li className='text-white mt-5 mr-20 lg:mr-40 text-fontSize1'>
                        <a href='/'>
                            Team
                        </a>
                    </li>
                    <button className='text-white lg:mt-5 mt-5 mr-20 lg:text-fontSize1'>Download App</button>
                </ul>
            </nav>
            <button onClick={handleClick} className=' fixed right-5 top-5 block text-white text-4xl lg:hidden'>
            {clicked ? <AiOutlineClose /> : <BiMenuAltRight />}
          </button>
        </header>
    </div>
  )
}

export default Header
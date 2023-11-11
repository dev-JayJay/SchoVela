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
        <header className='fixed z-50 shadow-md top-0 bg-black h-16 w-full lg:flex lg:flex-row lg:justify-evenly'>
            <div className='flex flex-row items-center text-fontSize1'>
                <img 
                src={logo}
                alt='SchovelaLogo'
                className='w-width1 h-height1 rounded-3xl'
                />
                <p className='text-Ared font-Agbalumo text-2xl'>SchoVela</p>
            </div>
            <nav className=''>
                <ul className={` ${ clicked ? 'text-right justify-end" mr-0 w-full bg-black' : 'hidden' }
                lg:flex lg:flex-row lg:justify-evenly lg:items-center lg:z-50`}>
                    <li className='text-white mt-5 mr-20 text-fontSize1 font-Acme'>
                        <a href='/'>
                            ABOUT
                        </a>
                    </li>
                    <li className='text-white mt-5 mr-20 text-fontSize1 font-Acme'>
                        <a href='/'>
                            FEATURES
                        </a>
                    </li>
                    <li className='text-white mt-5 mr-20 lg:mr-40 text-fontSize1 font-Acme'>
                        <a href='/'>
                            TEAM
                        </a>
                    </li>
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
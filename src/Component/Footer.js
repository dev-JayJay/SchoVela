import React from 'react'
// import { Link } from 'react-scroll'
// import { FaArrowUpLong } from "react-icons/fa6";

function Footer() {
  return (
    <div>
        <footer className='bg-black h-full mt-20 bottom-0 mb-0 w-full'>

        <div className='relative text-center mt-4'>
                {/* <p className='text-white pt-7 mb-0 m-2'>Help line Number : <span className='text-Ared'>+234 904 723 9648</span></p> */}
                <p className='font-kenio text-white mt-7 mb-0 pt-5 pb-7 flex flex-row text-center justify-center'> All Right Reserver @ <span className='text-Ared'>Team SchoVela 2023</span></p>
            </div>
        </footer>
    </div>
  )
}

export default Footer








// import React from 'react'
// import { FaInstagram } from 'react-icons/fa'
// import { FaXTwitter } from 'react-icons/fa6'
// import { BsWhatsapp } from 'react-icons/bs'
// import { TfiYoutube } from 'react-icons/tfi'
// import { SlSocialFacebook } from 'react-icons/sl'
// import GnadA from './GnadA2.png'
// import map1 from './map1.jpg'
// import map12 from './map12.jpg'
// import { FaArrowUpLong } from "react-icons/fa6";
// import { Link } from 'react-scroll'

// function Footer() {
//   return (
//     <div>
//         <footer className='bg-black mt-20 bottom-0 mb-0 w-full'>
//             <div className='flex flex-row flex-wrap justify-evenly'>
//                 <div className='col-1 flex flex-col '> 
//                 <div className='Address text-white mt-10 left-0'>
//                 <h1 className='text-2xl text-Ared'>Address</h1>
//                 123 Serenity Lane<br/>
//                 Tranquliville, Blissfull Country<br/>
//                 Harmonyville, Peaceful Country<br/>
//                 Postcode:Zen 000
//                 </div>
//                 </div>

//                 <div className='col-2 mt-0'>
//                 <nav className='mt-10'>
//                     <h1 className='text-2xl text-Ared'>Links</h1>
//                 <ul className='flex flex-col'>
//                     <li className='text-white mt-2 text-fontSize1'>
//                         <a href='/'>
//                             Home
//                         </a>
//                     </li>
//                     <li className='text-white mt-2 text-fontSize1'>
//                         <a href='/'>
//                             About
//                         </a>
//                     </li>
//                     <li className='text-white mt-2 text-fontSize1'>
//                         <a href='/'>
//                             Features
//                         </a>
//                     </li>
//                     <li className='text-white mt-2  text-fontSize1'>
//                         <a href='/'>
//                             Team
//                         </a>
//                     </li>
//                     <button className='text-white mt-2 lg:text-fontSize1'>Download App</button>
//                 </ul>
//                 </nav>
//                 </div>

//                 <div className='col-3 mt-10'>
//                 <h1 className='text-2xl text-Ared'>Follow Us</h1>
//                     <nav>
//                         <ul className='flex flex-col'>
//                             <li className='flex flex-row items-center align-center text-center m-2'>
//                                 <a href='/' className='text-white text-2xl'>
//                                     <SlSocialFacebook />
//                                 </a>
//                                 <span className='text-white'>-</span>
//                                 <span className='text-Ared'>Facebook</span>
//                             </li>
//                             <li className='flex flex-row items-center align-center text-center m-2'>
//                                 <a href='/' className='text-white text-2xl'>
//                                     <BsWhatsapp />
//                                 </a>
//                                 <span className='text-white'>-</span>
//                                 <span className='text-Ared'>Whatsapp</span>
//                             </li>
//                             <li className='flex flex-row items-center align-center text-center m-2'>
//                                 <a href='/' className='text-white text-2xl'>
//                                     <FaXTwitter />
//                                 </a>
//                                 <span className='text-white'>-</span>
//                                 <span className='text-Ared'>Twitter</span>
//                             </li>
//                             <li className='flex flex-row items-center align-center text-center m-2'>
//                                 <a href='/' className='text-white text-2xl'>
//                                     <FaInstagram />
//                                 </a>
//                                 <span className='text-white'>-</span>
//                                 <span className='text-Ared'>Instagram</span>
//                             </li>
//                             <li className='flex flex-row items-center align-center text-center m-2'>
//                                 <a href='/' className='text-white text-2xl'>
//                                     <TfiYoutube />
//                                 </a>
//                                 <span className='text-white'>-</span>
//                                 <span className='text-Ared'>Youtube</span>
//                             </li>
//                         </ul>
//                     </nav>
//                 </div>

//                 <div className='col-4 mt-10'>
//                     <div className='map$app flex flex-col'>
//                         {/* <GoogleMap /> */}
//                         <div>
//                             <img 
//                             src={GnadA} alt='GoogleAndAppLogo'
//                             className=''
//                             />
//                         </div>
//                         <div className='flex flex-row justify-center'>
//                         <img 
//                             src={map1} alt='GoogleAndAppLogo'
//                             className='w-40 h-32 rounded-2xl'
//                             />
//                             <img 
//                             src={map12} alt='GoogleAndAppLogo'
//                             className='w-40 h-32 ml-1 rounded-2xl'
//                             />
//                         </div>
//                         <Link
//                         to="BackTop"
//                         spy={true}
//                         smooth={true}
//                         offset={-70}
//                         duration={500}
//                         className='absolute right-7 text-center border bg-Ared rounded-full items-center w-16 h-16 mr-10 lg:mt-5'>
//                         <FaArrowUpLong className='text-white mt-5 ml-5 text-2xl'/>
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//             <div className='relative text-center m-2'>
//                 <p className='text-white m-2'>Help line Number : <span className='text-Ared'>+234 800 1200 1200</span></p>
//                 <p className='font-kenio text-white mt-2 mb-1 flex flex-row text-center justify-center'> All Right Reserver @ <span className='text-Ared'>Team SchoVela 2023</span></p>
//             </div>
//         </footer>
//     </div>
//   )
// }

// export default Footer
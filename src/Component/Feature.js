import React from 'react'
import FeaturesData from './FeaturesData.json'

function Feature() {
  return (
    <div className=''>
              <div name="Feature" className='container mx-auto'>
              <h1 className='text-Ared capitalize text-center font-Acme text-3xl mt-8 mb-8'>Unveiling The Features Of Schovela</h1>
                <div className='flex flex-row flex-wrap justify-evenly text-center'>
                    {
                        FeaturesData.resources.map((items,index) => {
                            return(
                                <div key={index} className='w-full ml-1 mr-1 mb-4 lg:w-width3 relative'>
                                    <h3 className='absolute text-8xl right-4 lg:bottom-bottom1 lg:right-8 z-50 opacity-25 text-Ared'>{ items.number }</h3>
                                    <h2 className='text-white text-3xl font-Acme'>{ items.header }</h2>
                                    <p className='text-white items-start font-Acme font-fontSize2 tracking-wider'>{ items.content }</p>
                                </div>
                            )
                        })
                    }
                </div>
              </div>
            </div>
  )
}

export default Feature;
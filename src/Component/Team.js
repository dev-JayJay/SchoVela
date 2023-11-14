import React from 'react'
import avater1 from './avater1.png'
import TeamData from './TeamData.json'

function Team() {
  return (
    <div name='Team' className='Team'>
              <div className='container mx-auto'>
              <h1 className='text-Ared capitalize text-center font-Acme text-3xl mt-8 mb-8'>About Team SchoVela</h1>
                <div className='flex flex-row flex-wrap mx-auto items-center justify-around text-center'>
                    {
                        TeamData.team.map((items,index) => {
                            return(
                                <div key={index} className='w-width5 h-height3 mb-4 border rounded-br-3xl rounded-tl-3xl'>
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
  )
}

export default Team
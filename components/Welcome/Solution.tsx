import React from 'react'
import { MAKARA_SOLUTIONS } from '@/constant'

function Solution() {
  return (
    <section id='list_of_services' className='flex flex-col justify-center items-center my-10 mb-4 md:my-10 mx-4'>
      <h3 className='text-xs md:text-2xl text-gray-100 font-semibold md:font-medium'>Makara Solutions</h3>
      <h2 className="text-sm md:text-4xl text-blue-100 font-bold mb-4 text-center">Discover the optimal solution for your business</h2>
      <div className='bg-gray-10 w-full h-[300px] md:h-[400px] rounded-3xl flex flex-row md:items-center'>
          <div className='grid grid-cols-4 md:grid-cols-6 md:gap-4'>
            {MAKARA_SOLUTIONS.map((solution) => (
              <div key={solution.label} className='my-auto'>
                <div className='h-[40px] md:h-[100px] mx-auto'>
                  <img src={solution.icon} alt={solution.label} width={100} height={100} className='w-[40px] h-[40px] md:w-[100px] md:h-[100px] mx-auto'/>
                </div>
                
                <div className='h-[50px]'>
                  <h3 className='w-3/4 mx-auto text-[10px] md:text-base text-blue-100 text-center font-semibold'>{solution.label}</h3>
                </div>
              </div>
              ))}
          </div>
      </div>
    </section>
  )
}

export default Solution
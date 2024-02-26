import React from 'react'
import Image from "next/image";
import { MAKARA_SOLUTIONS } from '@/constant'

function Solution() {
  return (
    <div className='flex flex-col justify-center items-center my-10'>
      <h3 className='text-lg md:text-2xl text-gray-100 font-medium'>Makara Solutions</h3>
      <h2 className="text-2xl md:text-4xl text-blue-100 font-bold mb-4 text-center">Discover the optimal solution for your business</h2>
      <div className='bg-gray-10 w-full h-[600px] md:h-[400px] rounded-3xl flex flex-row md:items-center'>
          <div className='grid grid-cols-2 md:grid-cols-6 md:gap-4'>
            {MAKARA_SOLUTIONS.map((solution) => (
              <div key={solution.label} className='my-auto'>
                <Image src={solution.icon} alt={solution.label} width={100} height={100} className='w-[40px] h-[40px] md:w-[100px] md:h-[100px] mx-auto'/>
                <h3 className='w-3/4 mx-auto text-base text-blue-100 text-center'>{solution.label}</h3>
              </div>
              ))}
          </div>
      </div>
    </div>
  )
}

export default Solution
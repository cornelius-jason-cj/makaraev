import React from 'react'
import Image from "next/image";
import { MAKARA_SOLUTIONS } from '@/constant'

function Solution() {
  return (
    <div className='flex flex-col justify-center items-center mt-10 mb-10'>
      <h3 className='text-lg text-gray-100 font-medium'>Makara Solutions</h3>
      <h2 className="text-2xl text-blue-100 font-medium mb-4">Discover the optimal solution for your business</h2>
      <div className='bg-gray-10 w-full h-[220px] rounded-3xl'>
          <div className='grid grid-cols-6 gap-4'>
            {MAKARA_SOLUTIONS.map((solution) => (
              <div>
                <Image src={solution.icon} alt={solution.label} width={100} height={100} className='w-[60px] h-[60px] mx-auto'/>
                <h3 className='w-3/4 mx-auto text-xs text-blue-100 text-center'>{solution.label}</h3>
              </div>
              ))}
          </div>
      </div>
    </div>
  )
}

export default Solution
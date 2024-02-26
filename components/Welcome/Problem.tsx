import React from 'react'
import Image from "next/image";
import { PROBLEMS_LIST } from '@/constant'

function problem() {
  return (
    <div className='mb-10'>
      <h2 className="text-xl md:text-4xl text-blue-100 font-bold mb-4 text-center">MOST BUGGY COMMON PROBLEMS ON A RESORT</h2>
      <div className="grid grid-cols-2 gap-8">
        {PROBLEMS_LIST.map((problem) => (
          <div key={problem.label} className='md:my-8 max-w-lg'>
            <Image src={problem.icon} alt={problem.label} width={80} height={80} className='w-[80px] h-[80px] mx-auto'/>
            <h2 className="text-sm md:text-lg text-blue-100 font-bold text-center my-2">{problem.label}</h2>
            <h4 className="text-xs md:text-base text-gray-100 text-center my-2">{problem.desc}</h4>
          </div>
        ))}
      </div>
    </div>
  )
}

export default problem
import React from 'react'
import Image from "next/image";
import { PROBLEMS_LIST } from '@/constant'

function problem() {
  return (
    <div className='mb-10'>
      <h2 className="text-2xl text-blue-100 font-bold mb-4 text-center">MOST BUGGY COMMON PROBLEMS ON A RESORT</h2>
      <div className="grid grid-cols-2 gap-4">
        {PROBLEMS_LIST.map((problem) => (
          <div key={problem.label}>
            <Image src={problem.icon} alt={problem.label} width={200} height={200} className='w-[120px] h-[80px] bg-gray-100 mx-auto'/>
            <h2 className="text-base text-blue-100 font-bold text-center">{problem.label}</h2>
            <h4 className="text-xs text-gray-100 text-center">{problem.desc}</h4>
          </div>
        ))}
      </div>
    </div>
  )
}

export default problem
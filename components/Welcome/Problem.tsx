import React from 'react'
import Image from "next/image";
import { PROBLEMS_LIST } from '@/constant'

function problem() {
  return (
    <div className='mx-2 mb-10'>
      <h2 className="text-sm md:text-4xl text-blue-100 font-bold mb-4 md:mb-10 text-center">MOST BUGGY COMMON PROBLEMS ON A RESORT</h2>
      <div className="grid grid-cols-1 mx-auto md:grid-cols-2 md:gap-8">
        {PROBLEMS_LIST.map((problem, index) => (
          <div key={problem.label} className='mb-4 md:mb-0'>
            <div className={`h-[60px] md:h-[100px] justify-center`}>
              <Image src={problem.icon} alt={problem.label} width={120} height={120} className={`w-[${problem.sWidth}px] h-[${problem.sHeight}px] md:w-[${problem.width}px] md:h-[${problem.height}px] mx-auto`}/>
            </div>
            <h2 className="text-sm md:text-lg text-blue-100 font-bold text-center my-2">{problem.label}</h2>
            <h4 className="text-[10px] md:text-base text-gray-100 text-center my-2">{problem.desc}</h4>
          </div>
        ))}
      </div>
    </div>
  )
}

export default problem
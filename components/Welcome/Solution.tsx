import React from 'react'
import Image from "next/image";
import { MAKARA_SOLUTIONS } from '@/constant'

function Solution() {
  return (
    <div>
      <h3>Makara SOLUTION</h3>
      <h2>Discover the optimal solution for your business</h2>
      <div className='bg-slate-300 w-full h-[350px] rounded-3xl'>
          <div className='grid grid-cols-6 gap-4'>
            {MAKARA_SOLUTIONS.map((solution) => (
              <div>
                <Image src={solution.icon} alt={solution.label} width={100} height={100}/>
                <span>{solution.label}</span>
              </div>
              ))}
          </div>
      </div>
    </div>
  )
}

export default Solution
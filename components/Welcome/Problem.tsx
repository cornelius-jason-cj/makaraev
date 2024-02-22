import React from 'react'
import Image from "next/image";
import { PROBLEMS_LIST } from '@/constant'

function problem() {
  return (
    <div>
    <h2>MOST BUGGY COMMON PROBLEMS ON A RESORT</h2>
      <div className="grid grid-cols-2 gap-4">
        {PROBLEMS_LIST.map((problem) => (
          <div key={problem.label}>
            <h2>{problem.label}</h2>
            <Image src={problem.icon} alt={problem.label} width={48} height={48} />
            <h4>{problem.desc}</h4>
          </div>
        ))}
      </div>
    </div>
  )
}

export default problem
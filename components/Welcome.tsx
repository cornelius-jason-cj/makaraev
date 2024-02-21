import React from 'react'
import Image from "next/image";
import { PROBLEMS_LIST, BLDC_LIST } from '@/constant'

function Welcome() {
  return (
    <section className='flex flex-col justify-center items-center mx-auto max-w-[800px]'>
      <h3>Welcome</h3>
      <h2>MAKARA ELECTRIC VEHICLE</h2>
      <h4>In the midst of intense competition in the hospitality industry, we recognize the significance of delivering an exceptional experiecne to our guests. Therefore, we are pleased to introduce a cutting-edge solution designed to enhance your resort's electric vehicle infrastructure.</h4>

      
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

      <h3>CUTTING-EDGE SOLUTION</h3>
      <h2>BLDC MOTOR CONVERSION</h2>
      <div className='bg-slate-300 w-full h-[300px] rounded-3xl'>
          <div className='flex flex-row'>
            <div className='basis-1/3'>
              <Image src="/BLDC3in1.png" alt="BLDC" width={200} height={200}/>
            </div>

            <div className='basis-2/3'>
              <div className='flex flex-col'>
                {BLDC_LIST.map((bldc)=> (
                  <div key={bldc.label}>
                    <h2 className='text-lg text-blue-500'>{bldc.label}</h2>
                    <h4 className='text-sm text-gray-500'>{bldc.desc}</h4>
                  </div>
                ))}
              </div>
            </div>

          </div>
      </div>

    </section>
  )
}

export default Welcome
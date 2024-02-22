import React from 'react'
import Image from "next/image";
import { BLDC_LIST } from '@/constant'

function bldc() {
  return (
    <div>
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
      
      <div className='bg-welcome-pattern w-full h-[300px] bg-cover bg-center'>
        <div className='flex flex-row'>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default bldc
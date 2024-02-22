import React from 'react'
import Image from "next/image";
import { BLDC_LIST, COMPARE_LIST } from '@/constant'

function bldc() {
  return (
    <div className='mt-10'>
      <h3 className="text-sm text-blue-100 font-semibold text-center">CUTTING-EDGE SOLUTION</h3>
      <h2 className="text-3xl text-blue-100 font-bold mb-10 text-center">BLDC MOTOR CONVERSION</h2>
      <div className='bg-gray-10 w-full h-[300px] rounded-3xl pt-4 mb-10'>
          <div className='flex flex-row items-center justify-center'>
            <div className='basis-1/3'>
              <Image src="/BLDC3in1.png" alt="BLDC" width={200} height={200} className='w-[200px] h-[200px] mx-auto'/>
            </div>

            <div className='basis-2/3'>
              <div className='flex flex-col mr-3'>
                {BLDC_LIST.map((bldc)=> (
                  <div key={bldc.label} className='my-2'>
                    <h2 className='text-base text-blue-100 font-bold'>{bldc.label}</h2>
                    <h4 className='text-xs text-gray-100'>{bldc.desc}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
      </div>
      
      <div className='bg-welcome-pattern w-full h-[250px] bg-cover bg-center'>
        <div className='bg-blue-100 h-[250px] w-1/2'>
          <div className='grid grid-cols-3 pt-10'>
            {COMPARE_LIST.map((compare, index) => (
              <>
                <span className={`text-xs text-right text-white font-semibold`}>{compare.title}</span>
                <span className={`text-xs text-center ${index === 0 ? 'pb-2' : null} ${compare.title === 'Price' || compare.title === 'Long Term Cost' ? 'text-red-800': 'text-white'}`}>{compare.desc_1}</span>
                <span className={`text-xs text-center ${compare.title === 'Price' || compare.title === 'Long Term Cost' ? 'text-green-50': 'text-white'}`}>{compare.desc_2}</span>
              </>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

export default bldc
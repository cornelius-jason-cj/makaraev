import React from 'react'
import { BLDC_LIST, COMPARE_LIST } from '@/constant'

function bldc() {
  return (
    <div className='md:mt-10 md:mb-20'>
      <h3 className="text-xs md:text-2xl text-blue-100 font-semibold text-center">CUTTING-EDGE SOLUTION</h3>
      <h2 className="text-sm md:text-4xl text-blue-100 font-bold mb-4 md:mb-10 text-center">BLDC MOTOR CONVERSION</h2>
      
      <div className='hidden bg-gray-10 w-full h-[500px] rounded-3xl md:flex flex-row items-center justify-center'>
        <div className='basis-1/3'>
          <img src="/welcome/BLDC3in1.png" alt="BLDC" width={300} height={300} className='w-[80px] h-[80px] md:w-[300px] md:h-[300px] mx-auto'/>
        </div>

        <div className='basis-2/3'>
          <div className='flex flex-col mr-3'>
            {BLDC_LIST.map((bldc)=> (
              <div key={bldc.label} className='my-1 md:my-6'>
                <h2 className='text-base md:text-xl text-blue-100 font-bold'>{bldc.label}</h2>
                <h4 className='text-[10px] md:text-base text-gray-100'>{bldc.desc}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='bg-gray-10 w-full h-[500px] md:h-[600px] rounded-3xl flex flex-col md:hidden'>
        <div className=''>
          <img src="/BLDC3in1.png" alt="BLDC" width={300} height={300} className='w-[200px] h-[200px] md:w-[300px] md:h-[300px] mx-auto'/>
        </div>

        <div className='flex flex-col mx-4 h-full md:justify-evenly'>
          {BLDC_LIST.map((bldc)=> (
            <div key={bldc.label} className='my-4 md:my-6'>
              <h2 className='text-xs text-center md:text-xl text-blue-100 font-bold'>{bldc.label}</h2>
              <h4 className='text-[10px] text-center md:text-base text-gray-100'>{bldc.desc}</h4>
            </div>
          ))}
        </div>
      </div>
      
      <div className='hidden md:flex bg-welcome-pattern w-full h-[320px] bg-cover bg-center mt-20 '>
        <div className='bg-blue-100 h-[320px] w-1/2 flex flex-row items-center'>
          <div className='grid grid-cols-3 w-full gap-x-4'>
            {COMPARE_LIST.map((compare, index) => (
              <>
                <span className={`text-base text-right text-white font-bold`}>{compare.title}</span>
                <span className={`text-base text-center ${index === 0 ? 'pb-2 font-bold' : null} ${compare.title === 'Price' || compare.title === 'Long Term Cost' ? 'text-red-500': 'text-white'}`}>{compare.desc_1}</span>
                <span className={`text-base text-center font-bold ${compare.title === 'Price' || compare.title === 'Long Term Cost' ? 'text-green-50': 'text-white'}`}>{compare.desc_2}</span>
              </>
            ))}
          </div>
        </div>
      </div>

      <div className='md:hidden bg-welcome-pattern w-full h-[160px] bg-cover bg-center mt-10'>
      </div>
      <div className='md:hidden bg-blue-100 h-[180px] w-full flex flex-row items-center'>
          <div className='grid grid-cols-3 w-full gap-x-4'>
            {COMPARE_LIST.map((compare, index) => (
              <>
                <h3 className={`text-xs text-right font-bold text-white`}>{compare.title}</h3>
                <h3 className={`text-xs text-center ${index === 0 ? 'pb-2 font-bold' : null} ${compare.title === 'Price' || compare.title === 'Long Term Cost' ? 'text-red-500': 'text-white'}`}>{compare.desc_1}</h3>
                <h3 className={`text-xs text-center font-bold ${compare.title === 'Price' || compare.title === 'Long Term Cost' ? 'text-green-50': 'text-white'}`}>{compare.desc_2}</h3>
              </>
            ))}
          </div>
        </div>

    </div>
  )
}

export default bldc
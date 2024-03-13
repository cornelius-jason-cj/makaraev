import React from 'react'
import Image from "next/image";
import { CLIENT_LIST_A, CLIENT_LIST_B } from '@/constant';

function Client() {
  return (
    <section id='clients' className='flex flex-col justify-center items-center mx-4 md:mx-auto max-w-[800px] mt-10 mb-4 md:my-20'>
       <h3 className='text-xs md:text-2xl text-gray-100 font-medium md:mb-4'>Meets our clients:</h3>
       <div className='flex flex-row items-center justify-between md:my-10 w-full h-[60px]'>
          <img
            key={'/hotel/natadesa.png'}
            src={'/hotel/natadesa.png'}
            alt={'/hotel/natadesa.png'}
            width={200}
            height={200}
            className='w-[60px] h-[30px] md:w-[120px] md:h-[60px]'
          />
          <img
            key={'/hotel/renaissance.png'}
            src={'/hotel/renaissance.png'}
            alt={'/hotel/renaissance.png'}
            width={200}
            height={200}
            className='w-[60px] h-[30px] md:w-[120px] md:h-[60px]'
          />
          <img
            key={'/hotel/ayana.png'}
            src={'/hotel/ayana.png'}
            alt={'/hotel/ayana.png'}
            width={200}
            height={200}
            className='w-[60px] h-[60px] md:w-[120px] md:h-[120px]'
          />
          <img
            key={'/hotel/bvlgari.png'}
            src={'/hotel/bvlgari.png'}
            alt={'/hotel/bvlgari.png'}
            width={200}
            height={200}
            className='w-[60px] h-[20px] md:w-[120px] md:h-[40px]'
          />
       </div>
       <div className='flex flex-row items-center justify-evenly w-full md:mt-10 h-[60px]'>
          <img
            key={'/hotel/villa_air.jpg'}
            src={'/hotel/villa_air.jpg'}
            alt={'/hotel/villa_air.jpg'}
            width={200}
            height={200}
            className='w-[60px] h-[40px] md:w-[120px] md:h-[80px]'
          />
          <img
            key={'/hotel/seres.png'}
            src={'/hotel/seres.png'}
            alt={'/hotel/seres.png'}
            width={200}
            height={200}
            className='w-[60px] h-[40px] md:w-[120px] md:h-[80px]'
          />
          <img
            key={'/hotel/vivara.png'}
            src={'/hotel/vivara.png'}
            alt={'/hotel/vivara.png'}
            width={200}
            height={200}
            className='w-[60px] h-[50px] md:w-[120px] md:h-[100px]'
          />
       </div>
    </section>
  )
}

export default Client
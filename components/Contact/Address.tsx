import React from 'react'
import Image from 'next/image'

function Address() {
  return (
    <div className='flex flex-col mx-4 text-center md:text-left'>
      <Image
        src={'/logoWhite.png'}
        alt="logo"
        width={200}
        height={200}
        className='w-[100px] h-[25px] mx-auto md:mx-0 md:w-[200px] md:h-[60px]'
      />
      <div className='mt-4 md:mt-6 md:mb-2'>
        <h1 className='text-xs md:text-2xl font-bold text-white md:mb-1'>MAKARA BUGGY</h1>
        <h3 className='text-[10px] md:text-base text-white'>PT. Makna Karya Aditya</h3>
      </div>

      <div className='hidden md:flex flex-col mt-6 mb-2'>
        <h1 className='text-xs md:text-2xl font-bold text-white'>Office:</h1>
        <h3 className='text-[10px] md:text-base text-white'>Unit 1D, Jimbaran Hub.</h3>
        <h3 className='text-[10px] md:text-base text-white'>Jl. Karang Mas, Jimbaran</h3>
      </div>

      <div className='mt-4 md:hidden'>
        <h1 className='text-xs md:text-2xl font-bold text-white'>Office:</h1>
        <h3 className='text-[10px] md:text-base text-white'>Unit 1D, Jimbaran Hub. Jl. Karang Mas, Jimbaran</h3>
      </div>

      <div className='mt-4 md:mt-6 md:mb-2'>
        <h1 className='text-xs md:text-2xl font-bold text-white'>Workshop:</h1>
        <h3 className='text-[10px] md:text-base text-white'>Jl. Pulau Ayu No. 1, Denpasar</h3>
      </div>

      <div className='mt-4 md:mt-6 md:mb-2'>
        <h1 className='text-xs md:text-2xl font-bold text-white'>Email:</h1>
        <h3 className='text-[10px] md:text-base text-white'>sales@makaraev.co.id</h3>
      </div>
    </div>
  )
}

export default Address
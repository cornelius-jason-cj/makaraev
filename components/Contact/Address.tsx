import React from 'react'
import Image from 'next/image'

function Address() {
  return (
    <div className='flex flex-col mx-4 text-center md:text-left'>
      <Image
        src={'/LogoPutih.png'}
        alt="logo"
        width={200}
        height={200}
        className='w-[200px] h-[120px] mx-auto md:w-[200px] md:h-[100px]'
      />
      <div className='mb-2 md:mb-4'>
        <h1 className='text-base md:text-2xl font-bold text-white mb-1'>MAKARA BUGGY</h1>
        <h3 className='text-xs md:text-base text-white'>PT. Makna Karya Aditya</h3>
      </div>

      <div className='mb-2 md:mb-4'>
        <h1 className='text-base md:text-2xl font-bold text-white'>Office:</h1>
        <h3 className='text-xs md:text-base text-white'>Unit 1D, Jimbaran Hub.</h3>
        <h3 className='text-xs md:text-base text-white'>Jl. Karang Mas, Jimbaran</h3>
      </div>

      <div className='mb-2 md:mb-4'>
        <h1 className='text-base md:text-2xl font-bold text-white'>Workshop:</h1>
        <h3 className='text-xs md:text-base text-white'>Jl. Pulau Ayu No. 1, Denpasar</h3>
      </div>

      <div className='mb-2 md:mb-4'>
        <h1 className='text-base md:text-2xl font-bold text-white'>Email:</h1>
        <h3 className='text-xs md:text-base text-white'>sales@makaraev.co.id</h3>
      </div>
    </div>
  )
}

export default Address
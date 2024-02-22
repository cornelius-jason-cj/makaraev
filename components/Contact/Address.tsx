import React from 'react'
import Image from 'next/image'

function Address() {
  return (
    <div className='flex flex-col ml-20'>
      <Image
        src={'/LOGO2.png'}
        alt="logo"
        width={100}
        height={100}
        className='w-[200px] h-[100px]'
      />
      <div>
        <h1 className='text-lg font-bold text-white'>MAKARA BUGGY</h1>
        <h3 className='text-xs text-white'>PT. Makna Karya Aditya</h3>
      </div>

      <div>
        <h1 className='text-xs text-white font-bold'>Office:</h1>
        <h3 className='text-xs text-white'>Unit 1D, Jimbaran Hub. Jl. Karang Mas, Jimbaran</h3>
      </div>

      <div>
        <h1 className='text-xs text-white font-bold'>Workshop:</h1>
        <h3 className='text-xs text-white'>Jl. Pulau Ayu No. 1, Denpasar</h3>
      </div>

      <div>
        <h1 className='text-xs text-white font-bold'>Email:</h1>
        <h3 className='text-xs text-white'>sales@makaraev.co.id</h3>
      </div>
    </div>
  )
}

export default Address
import React from 'react'

function description() {
  return (
    <>
      <div className='hidden md:flex flex-col justify-center items-center my-20'>
        <h3 className='md:text-2xl text-gray-100 font-medium'>Welcome to</h3>
        <h2 className="md:text-4xl text-blue-100 font-bold mb-4">MAKARA BUGGY</h2>
        <h4 className='md:text-base text-gray-100 text-center'>In the midst of intense competition in the hospitality industry,</h4>
        <h4 className='md:text-base text-gray-100 text-center'>we recognize the significance of delivering an exceptional experiecne to our guests.</h4>
        <h4 className='md:text-base text-gray-100 text-center'>Therefore, we are pleased to introduce a cutting-edge solution designed</h4>
        <h4 className='md:text-base text-gray-100 text-center'>to enhance your resort`s electric vehicle infrastructure.</h4>
      </div>

      <div className='flex flex-col justify-center items-center my-10 md:hidden'>
        <h3 className='text-xs text-gray-100 font-semibold'>Welcome to</h3>
        <h2 className="text-sm text-blue-100 font-bold mb-4">MAKARA BUGGY</h2>
        <h4 className='text-[10px] text-gray-100 text-center mx-2'>In the midst of intense competition in the hospitality industry, we recognize the significance of delivering an exceptional experiecne to our guests. Therefore, we are pleased to introduce a cutting-edge solution designed to enhance your resort`s electric vehicle infrastructure.</h4>
      </div>
    </>
  )
}

export default description
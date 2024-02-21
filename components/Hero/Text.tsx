import React from 'react'
import Button from '../Button'

function HeroText() {
  return (
    <div className='flex flex-row-reverse'>
      <div className='flex flex-col w-1/2'>
        <h1 className='text-3xl text-white font-normal leading-relaxed'>HOW TO</h1>
        <h1 className='text-3xl text-white font-normal leading-relaxed'>CUSTOMIZE YOUR</h1>
        <h1 className='text-3xl text-white font-normal leading-relaxed'><span className='font-bold'>BUGGY</span> TO</h1>
        <h1 className='text-3xl text-white font-bold leading-relaxed'>SUIT YOUR BUSINESS?</h1>
        <div className='flex flex-row'>
          <Button
            type={'button'}
            title={'WhatsApp Us'}
            icon="/WhatsApp_icon.png"
            variant={'btn_blue'}
          />
        </div>
      </div>
    </div>
  )
}

export default HeroText
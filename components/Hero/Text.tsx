import React from 'react'
import Button from '../Button'

type HeroText = {
  show: boolean;
}

function HeroText({show}:HeroText) {
  return (
    <div className={`${show ? 'hidden' : 'flex flex-row-reverse h-full'}`}>
      <div className='flex flex-col w-1/2 h-full'>
        <h1 className='text-xs md:text-4xl text-white font-normal mb-1 md:mb-4'>HOW TO</h1>
        <h1 className='text-xs md:text-4xl text-white font-normal mb-1 md:mb-4'>CUSTOMIZE YOUR</h1>
        <h1 className='text-xs md:text-4xl text-white font-normal mb-1 md:mb-4'><span className='font-bold'>BUGGY</span> TO</h1>
        <h1 className='text-xs md:text-4xl text-white font-bold mb-1 md:mb-4'>SUIT YOUR BUSINESS?</h1>
        <div className='flex flex-row mt-2 md:mt-0'>
          <Button
            type={'button'}
            title={'WhatsApp Us'}
            icon="/header/WhatsApp_icon.png"
            variant={'btn_blue'}
          />
        </div>
      </div>
    </div>
  )
}

export default HeroText
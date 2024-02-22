import React from 'react'
import Image from 'next/image'
import Button from './Button'
import Form from './Contact/Form'
import Address from './Contact/Address'

function ContactUs() {
  return (
    // <section className='flex flex-col justify-center items-center mx-auto max-w-[800px] mb-20'>
    <section className='bg-blue-900 w-full'>
      <div className='flex flex-col justify-center items-center mx-auto max-w-[800px] h-[380px]'>
        <div className='flex flex-col items-center justify-center'>
          <Image
            src={'/logo.png'}
            alt="logo"
            width={100}
            height={100}
            className='w-[60px] h-[60px]'
          />
          <h3 className='text-lg text-white'>Unlock the potential of your buggy with our</h3>
          <h3 className='text-lg text-white mb-4'>expert services</h3>
          <h3 className='text-xs text-white mb-10'> Connect with us today for driving experience like never before</h3>
          <Button
            type={'button'}
            title={'WhatsApp Us'}
            icon="/WhatsApp_icon.png"
            variant={'btn_transparent'}
          />
        </div>
      </div>

      <div className='bg-contact-us-pattern bg-center h-[400px] w-full'>
        <div className='h-[400px] backdrop-brightness-[.5]'>
          <div className='flex flex-row max-w-[800px] mx-auto'>
            <div className='grid grid-cols-2 gap-4'>
              <Address />
              <Form />
            </div>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default ContactUs
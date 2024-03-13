import React from 'react'
import Button from './Button'
import Form from './Contact/Form'
import Address from './Contact/Address'

function ContactUs() {
  return (
    // <section className='flex flex-col justify-center items-center mx-auto max-w-[800px] mb-20'>
    <section id='contact_us' className='bg-blue-100 w-full'>
      <div className='flex flex-col mx-auto max-w-[800px] h-[280px] md:h-[380px]'>
        <div className='flex flex-row items-center justify-center w-full h-full'>
          <div className='flex flex-col items-center justify-center'>
            <div className='h-[40px] md:h-[50px] mb-2'>
              <img
                src={'/contact/logo_only_white.png'}
                alt="logo"
                width={100}
                height={100}
                className='w-[50px] h-[30px] md:w-[70px] md:h-[40px]'
              />
            </div>
            <h3 className='text-xs md:text-lg text-white'>Unlock the potential of your buggy with our</h3>
            <h3 className='text-xs md:text-lg text-white mb-4'>expert services</h3>
            <h3 className='text-[10px] text-white mb-10'> Connect with us today for driving experience like never before</h3>
            <Button
              type={'button'}
              title={'WhatsApp Us'}
              icon="/header/WhatsApp_icon.png"
              variant={'btn_blue'}
              />
          </div>
        </div>
      </div>

      <div className='hidden md:flex bg-contact-us-pattern bg-cover bg-center h-[500px] w-full'>
        <div className='h-[500px] w-full backdrop-brightness-[.5]'>
          <div className='flex flex-row max-w-[800px] h-full mx-auto items-center'>
            {/* <div className='flex flex-col'> */}
              <div className='grid grid-cols-2 gap-4'>
                <Address />
                <Form />
              </div>
            {/* </div> */}
          </div>
        </div>
      </div>

      <div className='md:hidden bg-contact-us-pattern bg-cover bg-center h-[280px] w-full'>
        <div className='h-[280px] backdrop-brightness-[.25]'>
          <div className='flex flex-col max-w-[800px] h-full mx-auto items-center justify-center'>
              <Address />
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default ContactUs
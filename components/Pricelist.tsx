import React from 'react'
import Image from "next/image";
import { PRICE_LIST } from '@/constant';
import Button from './Button';

function Pricelist() {
  return (
    <>
    <section className='hidden md:flex flex-col justify-center items-center mx-auto max-w-[1440px] h-[800px] mt-20 mb-20'>

      <div className='grid grid-cols-2 gap-4'>
        <div>
          <img src={'/pricelist/price_list.jpg'} alt="price_list" width={400} height={400} className='h-[800px] w-4/5 mx-auto'/>
        </div>

        <div className='flex flex-col justify-between'>
          <div className='mb-6'>
            <h2 className='text-5xl text-blue-900 font-bold'>PRICELIST</h2>
          </div>

          {PRICE_LIST.map((list, index) => (
            index === 3
            ?
            <div className='grid grid-cols-2 my-2' key={`${list.type}-${index}`}>
              <div></div>
              <div className='flex flex-col my-2'>
                <h3 className='text-2xl font-bold text-blue-900'>{list.type}<span className='font-normal'>(only)</span></h3>
                <h3 className='text-base font-normal text-gray-50'>{list.desc}</h3>
                <h3 className='text-base font-semibold text-gray-50'>{list.option}</h3>
                <h3 className='text-2xl font-bold text-blue-900'>{list.price}</h3>
              </div>
            </div>
            :
            <div className='flex flex-col my-2' key={`${list.type}-${index}`}>
              <h3 className='text-2xl font-bold text-blue-900'>{list.type}</h3>
              <h3 className='text-base font-normal text-gray-50'>{list.desc}</h3>
              <h3 className='text-base font-semibold text-gray-50'>{list.option}</h3>
              <h3 className='text-2xl font-bold text-blue-900'>{list.price}</h3>
            </div>
          ))}

          <div className='mb-2'>
            <h3 className='text-2xl font-bold text-gray-20'>Have you considered any other services?</h3>
            <h4  className='text-base font-semibold text-gray-20'>We are here to accomodate your specific needs and requirements.</h4>
          </div>

          <div>
            <Button
              type={'button'}
              title={'WhatsApp Us'}
              icon="/header/WhatsApp_icon.png"
              variant={'btn_blue'}
              full={false}
            />
          </div>
        </div>
      </div>
    
    </section>

    <section className='md:hidden flex flex-col justify-center items-center mx-auto max-w-[1440px] h-auto'>

      <div className='bg-price-list-pattern bg-cover bg-center h-[640px] w-full'>
        <div className='h-[640px] backdrop-brightness-[.85]'>
          <div className='flex flex-col items-center'>
            <div className='mt-6'>
              <h2 className='text-sm text-blue-900 font-bold'>PRICELIST</h2>
            </div>

            {PRICE_LIST.map((list, index) => (
              <div className='flex flex-col my-2 bg-white rounded-2xl px-4 py-2 items-center w-2/3' key={`${list.type}-${index}`}>
                <h3 className='text-sm font-bold text-blue-900'>{list.type}</h3>
                <h3 className='text-[10px] font-normal text-gray-50 text-center'>{list.desc}</h3>
                <h3 className='text-[10px] font-semibold text-gray-50'>{list.option}</h3>
                <h3 className='text-xs font-bold text-blue-900'>{list.price}</h3>
              </div>
            ))}

            <div className='mt-4 mb-2 w-3/4'>
              <h3 className='text-xs text-center font-bold text-white'>Have you considered any other services?</h3>
              <h4  className='text-xs text-center font-semibold text-white'>We are here to accomodate your specific needs and requirements.</h4>
            </div>

            <div>
              <Button
                type={'button'}
                title={'WhatsApp Us'}
                icon="/header/WhatsApp_icon.png"
                variant={'btn_blue'}
                full={false}
              />
            </div>
          </div>
        </div>
      </div>

      </section>

    {/* <section className='md:hidden flex flex-col justify-center items-center mx-auto max-w-[1440px] h-[500px] mb-20'>
      <div className='flex flex-col justify-center'>
        <div className='mb-2'>
          <h2 className='ml-2 text-3xl text-blue-900 font-bold text-center'>PRICELIST</h2>
        </div>

        {PRICE_LIST.map((list, index) => (
          // index === 3
          // ?
          // <div className='grid grid-cols-2 my-2' key={list.type}>
          //   <div></div>
          //   <div className='flex flex-col my-2'>
          //     <h3 className='text-sm font-bold text-blue-900'>{list.type}</h3>
          //     <h3 className='text-sm'>{list.desc}</h3>
          //     <h3 className='text-sm font-semibold'>{list.option}</h3>
          //     <h3 className='text-sm font-bold text-blue-900'>{list.price}</h3>
          //   </div>
          // </div>
          // :
          <div className='flex flex-col my-2 justify-center items-center rounded-2xl bg-slate-50 mx-4 shadow-md px-4 py-2' key={`${list.type}-${index}`}>
            <h3 className='ml-2 text-base text-center font-bold text-blue-900'>{list.type}</h3>
            <h3 className='ml-2 text-xs text-center'>{list.desc}</h3>
            <h3 className='ml-2 text-sm text-center font-semibold'>{list.option}</h3>
            <h3 className='ml-2 text-sm text-center font-bold text-blue-900'>{list.price}</h3>
          </div>
        ))}
      </div>

    </section> */}
    </>
  )
}

export default Pricelist
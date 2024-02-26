import React from 'react'
import Image from "next/image";
import { PRICE_LIST } from '@/constant';

function Pricelist() {
  return (
    <>
    <section className='hidden md:flex flex-col justify-center items-center mx-auto max-w-[1440px] h-[800px] mb-20'>

      <div className='grid grid-cols-2 gap-4'>
        <div>
          <Image src={'/foto/price_list.jpg'} alt="price_list" width={400} height={400} className='h-[800px] w-4/5 mx-auto'/>
        </div>

        <div className='flex flex-col justify-center'>
          <div className='mb-6'>
            <h2 className='text-5xl text-blue-900 font-bold'>PRICELIST</h2>
          </div>

          {PRICE_LIST.map((list, index) => (
            index === 3
            ?
            <div className='grid grid-cols-2 my-2' key={list.type}>
              <div></div>
              <div className='flex flex-col my-2'>
                <h3 className='text-base font-bold text-blue-900'>{list.type}</h3>
                <h3 className='text-lg'>{list.desc}</h3>
                <h3 className='text-lg font-semibold'>{list.option}</h3>
                <h3 className='text-lg font-bold text-blue-900'>{list.price}</h3>
              </div>
            </div>
            :
            <div className='flex flex-col my-2' key={list.type}>
              <h3 className='text-base font-bold text-blue-900'>{list.type}</h3>
              <h3 className='text-lg'>{list.desc}</h3>
              <h3 className='text-lg font-semibold'>{list.option}</h3>
              <h3 className='text-lg font-bold text-blue-900'>{list.price}</h3>
            </div>
          ))}
        </div>
      </div>
    
    </section>

    <section className='md:hidden flex flex-col justify-center items-center mx-auto max-w-[1440px] h-[500px] mb-20'>
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
          <div className='flex flex-col my-2 justify-center items-center rounded-2xl bg-slate-50 mx-4 shadow-md px-4 py-2' key={list.type}>
            <h3 className='ml-2 text-base text-center font-bold text-blue-900'>{list.type}</h3>
            <h3 className='ml-2 text-xs text-center'>{list.desc}</h3>
            <h3 className='ml-2 text-sm text-center font-semibold'>{list.option}</h3>
            <h3 className='ml-2 text-sm text-center font-bold text-blue-900'>{list.price}</h3>
          </div>
        ))}
      </div>

    </section>
    </>
  )
}

export default Pricelist
import React from 'react'
import Image from "next/image";
import { PRICE_LIST } from '@/constant';

function Pricelist() {
  return (
    <section className='flex flex-col justify-center items-center mx-auto max-w-[800px]'>

      <div className='grid grid-cols-2 gap-4'>
        <div>
          <Image src={'/foto/price_list.jpg'} alt="price_list" width={300} height={300} className='w-full'/>
        </div>

        <div className='flex flex-col justify-center'>
          <div className='mb-6'>
            <h2 className='text-5xl text-blue-900 font-bold'>PRICELIST</h2>
          </div>

          {PRICE_LIST.map((list, index) => (
            index === 3
            ?
            <div className='grid grid-cols-2' key={list.type}>
              <div></div>
              <div className='flex flex-col h-[100px]'>
                <h3 className='text-sm font-bold text-blue-900'>{list.type}</h3>
                <h3 className='text-xs'>{list.desc}</h3>
                <h3 className='text-xs font-semibold'>{list.option}</h3>
                <h3 className='text-xs font-bold text-blue-900'>{list.price}</h3>
              </div>
            </div>
            :
            <div className='flex flex-col h-[100px]' key={list.type}>
              <h3 className='text-sm font-bold text-blue-900'>{list.type}</h3>
              <h3 className='text-xs'>{list.desc}</h3>
              <h3 className='text-xs font-semibold'>{list.option}</h3>
              <h3 className='text-xs font-bold text-blue-900'>{list.price}</h3>
            </div>
          ))}
        </div>
      </div>
    
    </section>
  )
}

export default Pricelist
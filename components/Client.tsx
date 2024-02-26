import React from 'react'
import Image from "next/image";
import { CLIENT_LIST_A, CLIENT_LIST_B } from '@/constant';

function Client() {
  return (
    <section className='flex flex-col justify-center items-center mx-4 md:mx-auto max-w-[800px] my-10'>
       <h3 className='text-lg md:text-2xl text-gray-100 font-medium mb-4'>Meets our clients:</h3>
       <div className='flex flex-row justify-between mb-10 w-full mt-10'>
        {CLIENT_LIST_A.map((client) => (
          <Image
            key={client.icon}
            src={client.icon}
            alt={client.icon}
            width={200}
            height={200}
            className='w-[60px] h-[40px] md:w-[120px] md:h-[80px]'
          />
        ))}
       </div>
       <div className='flex flex-row justify-evenly w-full mt-10'>
        {CLIENT_LIST_B.map((client) => (
            <Image
              key={client.icon}
              src={client.icon}
              alt={client.icon}
              width={200}
              height={200}
              className='w-[60px] h-[40px] md:w-[120px] md:h-[80px]'
            />
          ))}
       </div>
    </section>
  )
}

export default Client
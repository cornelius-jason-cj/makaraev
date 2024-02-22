import React from 'react'
import Image from "next/image";
import { CLIENT_LIST_A, CLIENT_LIST_B } from '@/constant';

function Client() {
  return (
    <section className='flex flex-col justify-center items-center mx-auto max-w-[800px] my-10'>
       <h3 className='text-lg text-gray-100 font-medium mb-4'>Meets our clients:</h3>
       <div className='flex flex-row justify-evenly mb-10 w-full'>
        {CLIENT_LIST_A.map((client) => (
          <Image
            key={client.icon}
            src={client.icon}
            alt={client.icon}
            width={100}
            height={100}
            className='w-[100px] h-[60px]'
          />
        ))}
       </div>
       <div className='flex flex-row justify-evenly w-full'>
        {CLIENT_LIST_B.map((client) => (
            <Image
              key={client.icon}
              src={client.icon}
              alt={client.icon}
              width={100}
              height={100}
              className='w-[80px] h-[60px]'
            />
          ))}
       </div>
    </section>
  )
}

export default Client
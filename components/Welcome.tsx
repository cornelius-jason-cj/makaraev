import React from 'react'
import Description from '@/components/Welcome/Description';
import Problem from '@/components/Welcome/Problem';
import Bldc from '@/components/Welcome/Bldc';
import Solution from '@/components/Welcome/Solution';

function Welcome() {
  return (
    <section className='flex flex-col justify-center items-center mx-auto max-w-[1440px] mb-10'>
      <Description />
      <Problem />
      <Bldc />
      <Solution />
    </section>
  )
}

export default Welcome
'use client'

import React from 'react'
import Navbar from "@/components/Hero/Navbar";
import HeroText from '@/components/Hero/Text';

function Hero() {
  const [openMenu, setOpenMenu] = React.useState(false)
  return (
    <section className='bg-hero-pattern max-w-screen h-[200px] md:h-[500px] bg-cover bg-center'>
      <div className='h-[200px] md:h-[500px] backdrop-brightness-[.75]'>
        <div className="mx-auto max-w-[1440px]">
          <Navbar onPress={() => setOpenMenu(!openMenu)} show={openMenu}/>
          <HeroText show={openMenu}/>
        </div>
      </div>
    </section>
  )
}

export default Hero
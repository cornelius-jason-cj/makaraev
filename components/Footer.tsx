import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FOOTER_LINKS, FOOTER_CONTACT_INFO, SOCIALS } from '@/constant'

function Footer() {
  return (
    <footer className="flexCenter mt-10 mb-4">
      <div className="padding-container max-container flex w-full flex-col gap-6">
        <div className="flex flex-col items-start justify-center gap-[5%] md:flex-row">
          <Link href="/" className="mb-10">
            <Image src="/LogoBiru.png" alt="logo" width={100} height={100} className='w-[100px] h-[100px]'/>
          </Link>

          <div className='flex flex-wrap gap-4 sm:justify-between md:flex-1'>
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn title={columns.title} key={columns.title}>
                <ul className="text-sm flex flex-col gap-2 text-gray-30">
                  {columns.links.map((link) => (
                    <Link href="/" key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    href="/"
                    key={link.label}
                    className="flex gap-2 md:flex-col lg:flex-row"
                  >
                    <p className="whitespace-nowrap text-sm">
                      {link.label}:
                    </p>
                    <p className="text-sm whitespace-nowrap text-blue-100">
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-gray-30">
                  {SOCIALS.links.map((link) => (
                    <Link href="/" key={link}>
                      <Image src={link} alt="logo" width={24} height={24} />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border bg-gray-20" />
          <p className='text-xs text-blue-100 text-center'>Copyright © 2024 PT. Makna Karya Aditya. All Rights Reserved.</p>
        </div>
    </footer>
  )
}

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-base font-semibold whitespace-nowrap">{title}</h4>
      {children}
    </div>
  )
}

export default Footer
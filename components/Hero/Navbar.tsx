import Image from "next/image"
import Link from "next/link"
import { NAV_LINKS } from "@/constant"

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30">
        <Link href="/">
            <Image
                src="/LogoPutih.png"
                alt="logo"
                width={200}
                height={140}
                loading="lazy"
                className="w-[80px] h-[56px] md:w-[200px] md:h-[140px]"
            />
        </Link>
        <ul className="hidden h-full gap-12 lg:flex">
            {NAV_LINKS.map((link) => (
                <li key={link.key}>
                    <Link href={link.href} key={link.key} className="regular-16 text-white flexCenter cursor-pointer pb-1.5 transition-all hover:text-blue-500">
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>

        {/* <Image
            src="menu.svg"
            alt="menu"
            width={24}
            height={24}
            className="inline-block cursor-pointer lg:hidden"
        /> */}
    </nav>
    
  )
}

export default Navbar
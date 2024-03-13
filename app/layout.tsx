import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: "MakaraEV",
  description: "Professionalism through Innovative Electrical Soultions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" style={{scrollBehavior:'smooth'}}>
      <body className={montserrat.className}>
        <main className="relative overflow-hidden">
          {children}
        </main>
        <div className='fixed bottom-6 right-4'>
          <Button
            type={'button'}
            title={''}
            icon="/header/WhatsApp_icon.png"
            // variant={'btn_blue'}
            size={'lg'}
          />
        </div>
        <Footer />
      </body>
    </html>
  );
}

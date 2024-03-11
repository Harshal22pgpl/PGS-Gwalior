
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Suspense } from 'react'
import Loader from '@/components/Loader/Loader'
import Notification from '@/components/Toast/Notification'
import FixedButtons from '@/components/FixedButton'
import { Analytics } from '@vercel/analytics/react';
import TrackRoute from './tracker/TrackRoute'


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PGPL~GWALIOR",
  description: "Developed by PGPL Pvt. Ltd., GWALIOR",
};

export default function RootLayout(props) {
  //  const loadingWrapper = async(fun)=>{
  //   try {
  //     let result = await fun.apply(null, arguments)
  //     return result
  //   } finally{
  //   }
  //  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Notification />
        <Suspense fallback={<Loader />}>

          <div className='mt-8'>
          <TrackRoute/>

            {props.children}
            <Analytics />
          </div>
        </Suspense>
        <FixedButtons />
        <Footer />
      </body>
    </html>
  );
}

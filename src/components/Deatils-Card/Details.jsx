'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = ({ title }) => {
  return (
    <>
      {/* Header background with waves */}
      <div className="relative bg-gradient-to-r from-green-700 to-cyan-200 text-white overflow-hidden">
        

       
        <svg
          className="waves absolute bottom-0 left-0 w-full h-32 md:h-48 lg:h-80 animate-pulse"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 150 48"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          
          <defs>
            <path
              id="gentle-wave"
              d="M-160 48c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v48h-352z"
            />
          </defs>
          <g className="parallax">
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="0"
              fill="rgba(255,255,255,0.7)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(255,255,255,0.5)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="6"
              fill="rgba(255,255,255,0.3)"
            />
            <use xlinkHref="#gentle-wave" x="48" y="9" fill="#fff" />
          </g>
        </svg>

        {/* Text and Image Content */}
        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* Detail Page SVG or Image */}
          <div className="detail-svg md:order-2 relative h-96">
            {/* Replace 'detail-page.svg' with your actual SVG */}
            <Image src="/data.svg" alt="Detail Page SVG" layout="fill" objectFit="contain" />
          </div>

          {/* Text Content */}
          <div className="text-content md:order-1 px-6 py-8 md:py-0 flex flex-col justify-center">
            <p className='text-5xl font-bold tracking-wider pb-4 max-w-[700px]'>{title}</p>
            <p className='text-xl max-w-[700px] my-4'>SKC LNCT Group of Colleges: Igniting Brilliance, Engineering the Future | Empowering Minds, Engineering Excellence</p>
            <div className="mt-4">
              <Link href="/admissions">
                <button className='p-3 rounded-lg mr-2 animate-pulse  bg-purple-900'>Admissions</button>
              </Link>
              <Link href='/features/life_at_school'>
                <button className='p-3 rounded-lg animate-pulse bg-purple-900'>StudentLife</button>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </>
  );
};

export default Header;

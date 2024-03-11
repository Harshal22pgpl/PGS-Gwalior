'use client'
import Stepper from '@/components/Stepper/Stepper'
import Image from 'next/image'
import React, { useState } from 'react';

function YourFormComponent() {

  const [showForm, setShowForm] = useState(false);

  const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };



  return (
    <div>
      <div className='fixed top-0 left-0 w-full h-full bg-contain bg-center' style={{ backgroundImage: "url('/aboutus.svg')" }}>
        <div className='absolute inset-0 bg-opacity-75 '></div>
      </div>

      <div className='relative z-10'>
        <div className='w-40 m-auto'>
          <Image src='/new-1.svg' width={600} height={480} />
        </div>
        <div className='text-center'>
          <h1 className='text-5xl font-extrabold py-5'>Welcome to <span className='text-orange-400'>PGS</span></h1>
          <p>Small contextual welcome message.<br></br>Orchids Online Admission Form Fee Structure Enquiry Form</p>
        </div>
        <div className='bg-gradient-to-r from-pink-300 to-indigo-200 rounded-lg m-10 p-16'>
          <h1 className='text-5xl font-black text-white text-center '>Application Form</h1>
          <p className='text-xl text-white text-center p-5'>PGS Online Admission Form Fee Structure Enquiry Form</p>

          {/* Render buttons dynamically based on buttonDescriptions */}
          <div className='flex justify-center pl-10'>
            {/* Your button code here */}
            <ol className="flex items-center w-96 ">
              <li className="flex w-full items-center justify-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800 ">
                <span className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
                  <svg className="w-3.5 h-3.5 text-blue-600 lg:w-4 lg:h-4 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                  </svg>
                </span>
              </li>
              <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
                <span className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                  <svg className="w-4 h-4 text-gray-500 lg:w-5 lg:h-5 dark:text-gray-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                    <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
                  </svg>
                </span>
              </li>
              <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
                <span className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                  <svg className="w-4 h-4 text-gray-500 lg:w-5 lg:h-5 dark:text-gray-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
                  </svg>
                </span>
              </li>
              <li className="flex items-center w-full">
                <span className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                  <svg className="w-4 h-4 text-gray-500 lg:w-5 lg:h-5 dark:text-gray-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
                  </svg>
                </span>
              </li>

            </ol>
          </div>
          <div className='flex justify-center pt-10'>
            {/* Your button code here */}

            <button onClick={openForm} className="bg-violet-300 p-3 rounded-xl mr-6">Let's Get Started</button>
            <button className="bg-violet-300 text-white border-current p-3 rounded-xl">Contact Us</button>
            <div className="bg-gradient-to-r from-indigo-500 ..."></div>
          </div>
          {showForm && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
              <div className="absolute w-full h-full bg-gray-900 opacity-50" onClick={closeForm}></div>
              <div className="bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                <div className="py-4 text-left px-6">
                  <span className="close absolute top-0 right-0 cursor-pointer p-4" onClick={closeForm}>&times;</span>
                  <Stepper />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>

  );
}

export default YourFormComponent;

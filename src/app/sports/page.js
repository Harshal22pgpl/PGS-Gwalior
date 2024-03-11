import EventSection from '@/components/Event/EventSection'
import React from 'react'

export default function page() {
    return (
        <>
            <main className='w-full flex flex-col justify-center items-center'>
                <div className=' w-11/12 h-80 flex justify-start items-stat rounded-lg bg-cover bg-center' style={{ backgroundImage: "url('https://sportsmatik.com/uploads/home-slide/new-slide/2.jpg')" }}>
                    <h1 className="text-5xl  text-teal-500 font-extrabold dark:text-white text-center p-8">Team.....<small className="ms-2 font-semibold text-gray-500 dark:text-gray-400">builds dream</small></h1>
                </div>
                <div className='mt-10'>
                    <h1></h1>
                <EventSection/>
                </div>
            </main>
        </>
    )
}

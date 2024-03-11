import React from 'react'

import SubjectConcept from '@/components/SubjectConcept/page';

export default function page() {
    return (
        <>
            <main className=" w-full flex flex-col justify-center  p-5  bg-cover bg-center" style={{ backgroundImage: "url('/tealBg.svg')" }}>
                <div className='w-90 h-80 flex justify-center items-center rounded-lg bg-cover bg-center' style={{ backgroundImage: "url('https://images.pexels.com/photos/743986/pexels-photo-743986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}>
                    <h1 className="text-5xl text-teal-600 font-extrabold dark:text-white text-center p-5">Art.. <small className="ms-2 font-semibold text-gray-500 dark:text-gray-400">The Best Solutions</small></h1>
                </div>

                {[1, 2].map((val) => (
                    <SubjectConcept />
                ))}

            </main>
        </>
    )
}

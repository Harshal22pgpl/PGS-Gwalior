import React from 'react'

import AboutMessageCard from '@/components/AboutMessageCard/AboutMessageCard'

import AboutMessageCarosoul from '@/components/AboutMessageCarosoul/AboutMessageCarosoul';
import AboutFacultyCard from '@/components/AboutFacultyCard/AboutFacultyCard';

export default function page() {

    return (
        <>
            <main className="w-full min-h-full flex flex-col p-5  justify-center items-center dark:bg-dpurple bg-[url('/MessageSvg.svg')]">
                <div className="w-full flex flex-col justify-center items-center mt-9">
                    <h1 className='text-3xl p-3 text-center  font-bold'>FACULTY AT THE SCHOOL</h1>
                    <h2 className=' text-center text-4xl mt-5 font-extrabold text-tteal'>Pratibha Global School, GWALIOR</h2>
                    <h3 className=' text-center text-2xl mt-2 font-semibold text-tteal'>SESSION 2024-25</h3>
                    <div className='w-11/12 grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-5 lg:gap-5 md:gap-4  lg:p-5 mt-2'>
                       
                        <AboutFacultyCard img="/staff/rekha.jpg" name="Ms Rekha Pippal" post="Pre-Primary Teacher" />
                        <AboutFacultyCard img="/staff/bharti.jpg" name="Ms Bharti Tiwari" post="TGT and Physical Education Teacher" />
                        <AboutFacultyCard img="/staff/kirti.jpg" name="Ms Kriti Bansal" post="Art and Craft Teacher" />
                        <AboutFacultyCard img="/staff/shilpa.jpg" name="Ms Shilpa Mishra" post="TGT" />
                        <AboutFacultyCard img="/staff/seema.jpg" name=" Ms Seema Khare" post="Pre-Primary Teacher & Activity Teacher" />
                        <AboutFacultyCard img="/staff/namrata.jpg" name="Ms Namrata Shrivastava" post="TGT Maths & Science" />

                    </div>

                </div>
            </main>
        </>
    )
}
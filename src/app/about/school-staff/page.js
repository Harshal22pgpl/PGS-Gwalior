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
                        <AboutFacultyCard img="/staff/_DSC0001.JPG" name="Deepmala Nigam " post="Umang Wing" />
                        <AboutFacultyCard img="/staff/_DSC0002.JPG" name="Pratishtha Bhatnagar" post="Umang Wing" />
                        <AboutFacultyCard img="/staff/_DSC0003.JPG" name="Neetu Goswami" post="Umang Wing" />
                        <AboutFacultyCard img="/staff/_DSC0004.JPG" name="Saraswati Sharma" post="Umang Wing" />
                        <AboutFacultyCard img="/staff/_DSC0005.JPG" name="Jhanvi Singh" post="Umang Wing" />
                        <AboutFacultyCard img="/staff/_DSC0006.JPG" name="Deepti Rathore" post="Umang Wing" />

                        <AboutFacultyCard img="/staff/_DSC0007.JPG" name="Shikha Shrivastav" post="Tarang Wing" />
                        <AboutFacultyCard img="/staff/_DSC0008.JPG" name="Varsha Nigam" post="Tarang Wing" />
                        <AboutFacultyCard img="/staff/_DSC0010.JPG" name="Sweety Dey" post="Tarang Wing" />
                        <AboutFacultyCard img="/staff/_DSC0009.JPG" name="Mohini Malviya" post="Tarang Wing" />
                        
                        <AboutFacultyCard img="/staff/_DSC0019.JPG" name="Pooja Singh" post="Pratibha Wing" />
                        <AboutFacultyCard img="/staff/_DSC0016.JPG" name="Deepak Kumar" post="Pratibha Wing" />
                        <AboutFacultyCard img="/staff/_DSC0015.JPG" name="Poonam Bhasana" post="Pratibha Wing" />
                        <AboutFacultyCard img="/staff/_DSC0018.JPG" name="Jayshree Chitnis" post="Pratibha Wing" />
                        <AboutFacultyCard img="/staff/_DSC0017.JPG" name="Umesh Dubey" post="Pratibha Wing" />
                        <AboutFacultyCard img="/staff/_DSC0022.JPG" name="Sadhana Badele" post="Pratibha Wing" />
                        
                        <AboutFacultyCard img="/staff/_DSC0012.JPG" name="Vineeta Sanodiya" post="Tejas Wing" />
                        <AboutFacultyCard img="/staff/_DSC0020.JPG" name="Heena Billore" post="Tejas Wing" />
                        <AboutFacultyCard img="/staff/_DSC0024.JPG" name="Krishna Singh" post="Tejas Wing" />
                        <AboutFacultyCard img="/staff/_DSC0029.JPG" name="Saloni Bhadoriya" post="Tejas Wing" />

                    </div>

                </div>
            </main>
        </>
    )
}
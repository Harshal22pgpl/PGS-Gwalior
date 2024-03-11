
import React from 'react'

import AboutMessageCard from '@/components/AboutMessageCard/AboutMessageCard'

import AboutMessageCarosoul from '@/components/AboutMessageCarosoul/AboutMessageCarosoul';

export default function page() {

    return (
        <>
            <main className="min-h-full flex flex-col  justify-center items-center dark:bg-dpurple bg-[url('/MessageSvg.svg')] pb-2">

                <div className="w-11/12 flex flex-col justify-center items-center ">
                    <h1 className='text-3xl p-3 text-center mt-5 font-bold'>Message from the Founder</h1>
                    <h2 className='text-start text-lg w-96 font-semibold'>His last message before the last journey...</h2>
                    <AboutMessageCard
                        img="/Mgt/founder.png"
                        heading="Late Shri Suresh Kumar Chouksey
                        Founder SKC LNCT Group Of Colleges"
                        content="Youth serves as an engine for economic development of nation. It is well recognized now that there is a distinct relation between the work forces capability and economic well being of a nation. In the 21st century, the success of all countries and societies around the world increasingly depends on their capacity to generate and access science, technology and innovation. For this skilled work force is required. The trio of students, teachers and institute makes a combination of success at macro and micro levels. All these factors are complimentary to each other and none can afford to be weak. At SKC LNCT we endeavor to strengthen all these pillars and thus contribute towards nation's progress, I wish all the students and faculty of SKC LNCT all the best for the journey to knowledge."
                        name="Late Shri Suresh Chouksey"
                        post="Founder"
                        place="Bhawarsala GWALIOR"
                    />

                </div>
            </main>
        </>
    )
}

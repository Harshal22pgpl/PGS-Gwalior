
import React from 'react'

import AboutMessageCard from '@/components/AboutMessageCard/AboutMessageCard'

import AboutMessageCarosoul from '@/components/AboutMessageCarosoul/AboutMessageCarosoul';

export default function page() {

    return (
        <>
            <main className="min-h-full flex flex-col  justify-center items-center dark:bg-dpurple bg-[url('/MessageSvg.svg')] pb-2">

                <div className="w-11/12 flex flex-col justify-center items-center ">
                    <h1 className='text-3xl p-3 text-center mt-5 font-bold'>CHAIRMAN'S MESSAGES</h1>
                    <AboutMessageCard
                        img="/Mgt/chairperson.png"
                        heading="Mrs. Pratibha Chouksey, Co-Founder & Chairperson SKC LNCT Group Of Colleges"
                        content="Greetings, Pratibha Global School community,

                        It's an honor to lead our educational journey in GWALIOR, Madhya Pradesh. Our commitment to providing quality education spans across Pre-Primary to Higher-Secondary levels. With a dedicated faculty and engaged parents, let's empower our students to excel academically and personally. Wishing everyone a year of discovery, growth, and success."
                        name="Mrs. Patibha Chouksey"
                        post="Chairperson"
                        place="Bhawarsala GWALIOR"
                    />

                </div>
            </main>
        </>
    )
}

import React from 'react'

import AboutMessageCard from '@/components/AboutMessageCard/AboutMessageCard'

import AboutMessageCarosoul from '@/components/AboutMessageCarosoul/AboutMessageCarosoul';

export default function page() {

    return (
        <>
            <main className="min-h-full flex flex-col p-5  justify-center items-center dark:bg-dpurple bg-[url('/MessageSvg.svg')]">

                <div className="full flex flex-col justify-center items-center mt-9">
                    <h1 className='text-3xl p-3 text-center mt-2 font-bold'>PRINCIPALS MESSAGES</h1>
                    <AboutMessageCard
                        img="/Mgt/principal.png"
                        heading="Mrs. Sapna Jain, Principal (Pratibha Global School, GWALIOR)"
                        content="Dear Pratibha Global School Community,
                        As we commence a new academic year in the vibrant city of GWALIOR, Madhya Pradesh, I extend a heartfelt welcome to our esteemed students, dedicated parents, and passionate educators. At Pratibha Global School, we take pride in providing a holistic educational experience catering to students across diverse stages from the formative years of Pre-Primary to the pinnacle of Higher-Secondary education.
                        
                        Our mission is to foster an environment that promotes not only academic excellence but also personal growth, character development, and a spirit of collaboration. Together, let's embark on a journey of exploration, curiosity, and achievement.
                        
                        I encourage each student to embrace the opportunities for learning, engage in meaningful experiences, and strive for excellence in every endeavor. With the unwavering support of our dedicated faculty and the active involvement of parents, we are confident that this academic year will be a stepping stone toward a bright and successful future for all."
                        name="Mrs. Sapna Jain"
                        post="Principal"
                        place="Bhawarsala GWALIOR"
                    />

                </div>
            </main>
        </>
    )
}

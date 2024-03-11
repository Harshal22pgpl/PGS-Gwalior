import React from 'react'

import AboutMessageCard from '@/components/AboutMessageCard/AboutMessageCard'

import AboutMessageCarosoul from '@/components/AboutMessageCarosoul/AboutMessageCarosoul';

export default function page() {
  return (
    <main className="min-h-full flex flex-col p-5  justify-center items-center dark:bg-dpurple bg-[url('/MessageSvg.svg')]">
   
    <div className="w-11/12 flex flex-col justify-center items-center mt-9">
        <h1 className='text-3xl p-3 text-center mt-2 font-bold'>DIRECTORS'S MESSAGES</h1>
        <AboutMessageCard
            img="/Mgt/director.png"
            heading="Mr. Suprabhat Chouksey, Managing Director of SKC LNCT Group Of Colleges "
            content="Greetings, Pratibha Global School community!

            As the Director, I'm thrilled to welcome our students, parents, and staff to a promising academic year in GWALIOR, Madhya Pradesh. Our commitment to fostering excellence across Pre-Primary to Higher-Secondary levels remains unwavering. Let's embark on this educational journey together, nurturing minds, and shaping futures. Wishing all a year filled with growth, achievements, and memorable learning experiences."
            name="Mr. Suprabhat Chouksey"
            post="Managing Director"
            place="Bhawarsala GWALIOR"
        />
        
    </div>
</main>
  )
}

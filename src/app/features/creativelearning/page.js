import React from 'react'

import CardClasses from '@/components/CardClasses/page'

import Image from 'next/image'



export default function page() {
    return (
        <>
            <main className=" w-full
              flex justify-center p-5 bg-white">



                <div className='w-11/12 bg-black rounded-lg bg-cover bg-center' style={{ backgroundImage: "url('/MessageSvg.svg')" }}>
                
                <div className='w-90 h-80 flex justify-center items-center rounded-lg bg-cover bg-center' style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560421683-6856ea585c78?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
                    <h1 className="text-5xl text-teal-600 font-extrabold dark:text-white text-center p-5">Creativity<small className="ms-2 font-semibold text-black dark:text-gray-400">is intelligence having fun</small></h1>
                </div>
                <section className="flex items-center justify-center">
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl text-center font-semibold mb-4">Why Is Creative Learning Important?</h2>
      <p className="text-lg leading-relaxed">
      Creativity is freedom of expression. When children learn their academic subjects, they learn a specific way of solving things. With creative subjects there is no ‘right’ way, only the way an individual would like to do something.
      </p>
    </div>
  </section>


                <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
    <div className="bg-gray-500 p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-4 text-white">Immersive Learning Environments</h2>
      <p className="text-lg leading-relaxed text-gray-300">
      Immerse yourself in unique and interactive learning environments that go beyond traditional classroom settings.
      Explore virtual reality experiences, simulations, and hands-on projects that make education an exciting journey.
      </p>
    </div>

    <div className="bg-teal-400 p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-4 text-white">Innovative Courses</h2>
      <p className="text-lg leading-relaxed text-white">
      Enroll in courses that inspire creativity and cover cutting-edge topics and technologies.
Spark your curiosity with content designed to encourage innovative thinking and problem-solving.
      </p>
    </div>
  </section>
  
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
    <div className="bg-teal-400 p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-4 text-white">Collaborative Projects</h2>
      <p className="text-lg leading-relaxed text-white">
      Engage in collaborative projects where students from diverse backgrounds collaborate on real-world challenges.
Build valuable teamwork and communication skills while working on projects that make a positive impact.
      </p>
    </div>

    <div className="bg-gray-500 p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-4 text-white">Creative Challenges</h2>
      <p className="text-lg leading-relaxed text-gray-300">
      Take on weekly creative challenges that encourage out-of-the-box thinking.
Cultivate your creativity by tackling unique problems and finding innovative solutions.
      </p>
    </div>
  </section>
</div>



            </main>
        </>
    )
}

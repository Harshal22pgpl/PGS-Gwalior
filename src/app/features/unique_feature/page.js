import React from 'react'
import Image from 'next/image';

export default function page() {
    return (

        <>
            <div className='w-11/12 mx-auto h-80 flex justify-center items-center rounded-lg bg-cover bg-center' style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1661879950993-178ba3634886?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
                <h1 className=" text-5xl text-teal-600 font-extrabold dark:text-white text-center p-5">Our Unique<small className="ms-2 font-semibold text-gray-500 dark:text-gray-400">Features</small></h1>
            </div>
            <section className="w-11/12 mx-auto flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-3xl text-center font-semibold mb-4">Uniqueness In Our School</h2>
                    <p className="text-lg leading-relaxed">
                        Schooling is a vital part of a student’s academic life. Good schooling can lay the foundation for a great academic life ahead. A school introduces a student to good values of life. It initiates career success for a student in future. It shapes your child’s life most fabulously. When you are planning to put your child in the best school in Muzaffarpur you need to look for certain features that define an ideal school. Read below to learn about the top 5 features of an ideal school:
                    </p>
                </div>
            </section>
            <ul className=" lg:w-3/4 md:3/4 mx-auto list-disc p-10 ">

                <li className='text-lg  p-4'><span className="font-bold  ">Qualified teaching staff : </span>
                    The teachers who teach in those schools need to be qualified, experienced and passionate about teaching. The teacher must have a relevant 1st degree on the subject he or she is teaching. The percentage acquired by the teacher during his or her study life matters…a teacher who had been a good student during his/her study life can craft good students too. Furthermore, the experience of the teacher matters. An experienced teacher can bring out the best in your child by giving your child the right kind of guidance in compliance with your child’s aptitude and IQ Level. Also, a teacher who is passionate about his or her profession will try to motivate students in the best way possible. </li>
                <li className='text-lg  p-4' ><span className="font-bold ">Small classes : </span>
                    Small classes are very essential to raise the standard of education in a school. When class sizes are small, each student gets proper attention from a teacher. Also, fruitful interaction takes place between teachers and students when class sizes are small. Such interaction can create a healthy learning atmosphere for students.</li>
                <li className='text-lg  p-4'><span className="font-bold">Feeling of Community : </span>An ideal school encourages a feeling of community among students. This is indeed very important as a feeling of community can impart to students fruitful lessons for life. It can make them aware of the people around them and teach them to be tolerant and respectful towards others.</li>
                <li className='text-lg  p-4'><span className="font-bold">Arts and Sports Program : </span>Incorporation of Arts and Sports Program in the school curriculum is very important as it can aptly balance the learning process as well as the maturation process in growing children and young adults. A good school will have extensive and robust art and sports program. Such programs make a vital of school life and school’s purpose.
                </li>
                <li className='text-lg  p-4'><span className="font-bold : ">Scope of parental involvement : </span>A good school will make adequate room for parental involvement. Research shows that the learning ability of students can be improved through an active partnership between their teachers and their parents.</li>

            </ul>

        </>
    );


}

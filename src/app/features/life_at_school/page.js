"use client"
import React from 'react'
import SubjectConcept from '@/components/SubjectConcept/page';
import AcademicStudentCard from '@/components/Academic/AcademicStudentCard/AcademicStudentCard';
import Monuments from '@/components/Monuments/Monuments';
import LifeAtSchoolMonument from '@/components/LifeAtSchoolMonument/LifeAtSchoolMonument';


export default function page() {
  return (
    <>
      <main className=" w-full flex flex-col justify-center  p-5  bg-cover bg-center" style={{ backgroundImage: "url('/MessageSvg.svg')" }}>
        <div className='w-11/12 mx-auto h-80 flex justify-center items-center rounded-lg bg-cover bg-center' style={{ backgroundImage: "url('https://images.pexels.com/photos/743986/pexels-photo-743986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}>
          <h1 className="text-5xl text-teal-600 font-extrabold dark:text-white text-center p-5">Life At <small className="ms-2 font-semibold text-gray-500 dark:text-gray-400">School</small></h1>
        </div>

        <h2 className='md:text-5xl lg:text-5xl sm:text-5xl text-center   font-black flex justify-center p-15 pb-2
          mt-6 '>What Our Student Learn...</h2>
        <p className='md:w-3/4 lg:w-3/4 mx-auto  sm:w-full  flex justify-center font-dancing-script text-center mt-3'>At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include
        </p>



        <div className='grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-6 lg:p-10 md:p-10 sm:p-10 p-2 mx-auto'>
          {[
            {
              image: "/classImages/class.jpg",
              headings: "Our smart classes",
              paragraph: "Number sense, basic operations, problem-solving, and logic."
            },
            {
              image: "/labsImages/science.JPG",
              headings: "Science",
              paragraph: "Exploring the natural world through hands-on experiments and investigations."
            }, {
              image: "/labsImages/physical.JPG",
              headings: "Physical Education",
              paragraph: "Promoting physical fitness, coordination, and teamwork."
            },
            {
              image: "/labsImages/art.jpg",
              headings: "Art and Crafts",
              paragraph: "Encouraging creativity through various art forms and crafts."
            },
            {
              image: "/labsImages/languageArt.jpg",
              headings: "Language Art",
              paragraph: "Reading, writing, storytelling, and communication skills."
            },
            {
              image: "/labsImages/social.jpg",
              headings: "Social Studeies",
              paragraph: "Cultivating an understanding of diverse cultures and communities."
            },

          ].map((val) => (
            <AcademicStudentCard cardDetails={val} />
          ))}
        </div>
        <LifeAtSchoolMonument />
        <h1 className="text-5xl text-teal-600 font-extrabold dark:text-white text-center p-5">Life At <small className="ms-2 font-semibold text-gray-500 dark:text-black-400">School</small></h1>


        <ul className="lg:w-3/4 md:3/4 mx-auto list-disc ">
          <li className='text-lg  p-4'><span className='font-bold'>Academic Learning </span>: The primary purpose of school is academic education. Students engage in a structured curriculum, attending classes, completing assignments, and taking exams. The subjects studied can vary, including mathematics, science, literature, social studies, and more.</li>
          <li className='text-lg  p-4'><span className='font-bold'>Social Interaction </span>: School is a social environment where students interact with their peers, teachers, and other staff members. Building social skills, making friends, and learning to navigate social dynamics are important aspects of school life.</li>
          <li className='text-lg  p-4'><span className='font-bold'>Extracurricular Activities </span>: Many schools offer extracurricular activities such as sports, music, drama, art, and clubs. Participating in these activities provides students with opportunities to explore their interests beyond the classroom and develop new skills.</li>
          <li className='text-lg  p-4'><span className='font-bold'>Personal Development </span>: School is a place where students not only gain knowledge but also develop personally. They learn to manage their time, set goals, and take responsibility for their actions. Teachers and mentors often play a role in guiding students through this personal development.</li>
          <li className='text-lg  p-4'><span className='font-bold'>Challenges and Stress </span>: Academic pressures, social expectations, and the challenges of growing up can contribute to stress for students. Learning to manage stress, cope with challenges, and seek support when needed are important life skills developed during school.</li>
          <li className='text-lg  p-4'><span className='font-bold'>Friendships and Relationships </span>: School is a significant environment for building friendships and relationships. Students form bonds with classmates and teachers, creating a support system that can last a lifetime.</li>
          <li className='text-lg  p-4'><span className='font-bold'>Preparation for the Future </span>: School is a significant environment for building friendships and relationships. Students form bonds with classmates and teachers, creating a support system that can last a lifetime.</li>
          <li className='p-2'><span className='font-bold'>Diversity and Inclusion </span>: Schools often bring together a diverse group of students with different backgrounds, cultures, and perspectives. Learning to appreciate and respect diversity is an essential aspect of school life.</li>
          <li className='text-lg  p-4'><span className='font-bold'>Rules and Discipline </span>:  Schools have rules and disciplinary measures in place to maintain a safe and conducive learning environment. Students learn about responsibility and consequences for their actions.</li>
          <li className='text-lg  p-4'><span className='font-bold'>Memorable Experiences </span>: School life is often filled with memorable experiences, such as field trips, special events, and achievements. These experiences contribute to a student's overall education and form lasting memories.</li>
        </ul>

      </main>

    </>
  )
}

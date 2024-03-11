import React from 'react'
import ProgramLabCard from '@/components/ProgramLabCard/page'
import CardClasses from '@/components/CardClasses/page'


export default function page() {
  return (
    <>
      <main className='w-full flex flex-col justify-center bg-white'>
        <div className='w-full  flex flex-col justify-center items-center bg-cover bg-center' style={{ backgroundImage: "url('https://media.istockphoto.com/id/1444446563/photo/child-mischief-boy-with-a-distracted-face-because-he-drew-the-entire-wall.jpg?s=1024x1024&w=is&k=20&c=5LKGwiX9U_zOAsDwV2Ke9i24cOiHMkzpZ123jtWsaqQ=')", height: "530px" }}>
          <h1 className='text-4xl bg-gradient-to-r from-fuchsia-800 to-purple-900 bg-clip-text text-transparent p-5 font-extrabold'>Best Programs For All Students</h1>
          <p className='w-3/5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse ducimus facilis rem! Similique adipisci incidunt itaque, praesentium quisquam reprehenderit facilis delectus iste perferendis recusandae!</p>
        </div>


        <div className='w-full flex justify-center mt-10'>
          <div className='w-11/12 grid grid-cols-3 gap-1 px-10 pt-5 rounded-lg bg-cover bg-center' style={{ backgroundImage: "url('/CardClass.svg')", height: "530px" }}>
            {
              ["PUBLIC SPEAKING", "COMPUTER LAB", "DIY LAB", "GARDENING", "PARENT TEACHER MEETING", "COOKING CHEF"].map((val) => (
                <ProgramLabCard name={val} />
              ))
            }
          </div>
        </div>



      </main>
    </>
  )
}


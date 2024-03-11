import EventCard from '@/components/EventCards/page'
import React from 'react'

async function page() {
  return (
    <>
    <h1 className='w-full text-center text-5xl font-extrabold text-tteal'>UpComing Events</h1>
      <div className="w-full flex">
        <div className="w-full mt-5"><EventCard /></div>
      </div>
    </>
  )
}

export default page;
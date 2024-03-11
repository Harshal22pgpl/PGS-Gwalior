import dynamic from 'next/dynamic';
import { getEventDetails } from '@/lib/services/events/eventSevices'
const EventDetail = dynamic(() => import("@/components/Event/EventDetail"));

async function page ({ params }) {
    const eventData = await getEventDetails(params.uuid)    
    return (
        <>
        <EventDetail eventData={eventData}/>

        </>
    )
}

export default page

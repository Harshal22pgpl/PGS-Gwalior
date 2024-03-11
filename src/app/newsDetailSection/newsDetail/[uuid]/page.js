import dynamic from 'next/dynamic';
import { getNewsDetails } from '@/lib/services/news/index'
const NewsDetails = dynamic(() => import("@/components/News/NewsDetails"));


async function page ({ params }) {
    const newsData = await getNewsDetails(params.uuid)    
    return (
        <>
        <NewsDetails newsData={newsData}/>
        </>
    )
}

export default page
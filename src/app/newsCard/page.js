import NewsCard from '@/components/News/page'

async function page() {
  return (
    <>
      <div className="flex" >
        <div className='mt-5'><NewsCard /></div>
      </div>
    </>
  );
}

export default page;
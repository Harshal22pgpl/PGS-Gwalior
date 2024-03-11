import EventGallery from '@/components/Event/EventGallery';

export default function page({ params }) {
  return (
    <>
      <EventGallery category={params.category} data={data} />
    </>
  )
}

const data = [{
  name: 'Cricket',
  images: [ '/events/cricket/_DSC0025.JPG',
   '/events/cricket/_DSC0028.JPG', '/events/cricket/_DSC0036.JPG', '/events/cricket/_DSC0040.JPG',
    '/events/cricket/_DSC0046.JPG', '/events/cricket/_DSC0049.JPG', '/events/cricket/_DSC1341.JPG', 
    '/events/cricket/_DSC1342.JPG', '/events/cricket/_DSC1343.JPG', '/events/cricket/_DSC1344.JPG', 
    '/events/cricket/_DSC1345.JPG', '/events/cricket/_DSC1346.JPG', '/events/cricket/_DSC1347.JPG', 
    '/events/cricket/_DSC1359.JPG', '/events/cricket/_DSC1359.JPG',
    '/events/cricket/_DSC1353.JPG']
},
{
  name: 'Kabbadi',
  images: ['/events/kabbadi/_DSC0857.JPG']
},
{
  name: 'Chair race',
  images: ['/events/chair_race/_DSC0941.JPG']
},
{
  name: 'March past',
  images: ['/events/match_post/_DSC0599.JPG']
},
{
  name: 'Price distribution',
  images: ['/events/price_distrubution/_DSC1386.JPG']
},
{
  name: 'Sac race',
  images: ['/events/sac_race/_DSC0934.JPG']
},
{name:'All',
images:['/events/kabbadi/_DSC0857.JPG',
'/events/chair_race/_DSC0941.JPG',
'/events/match_post/_DSC0599.JPG',
'/events/price_distrubution/_DSC1386.JPG',
'/events/sac_race/_DSC0934.JPG',
'/events/cricket/_DSC0025.JPG',
'/events/cricket/_DSC0028.JPG', '/events/cricket/_DSC0036.JPG', '/events/cricket/_DSC0040.JPG',
 '/events/cricket/_DSC0046.JPG', '/events/cricket/_DSC0049.JPG', '/events/cricket/_DSC1341.JPG', 
 '/events/cricket/_DSC1342.JPG', '/events/cricket/_DSC1343.JPG', '/events/cricket/_DSC1344.JPG', 
 '/events/cricket/_DSC1345.JPG', '/events/cricket/_DSC1346.JPG', '/events/cricket/_DSC1347.JPG', 
 '/events/cricket/_DSC1359.JPG', '/events/cricket/_DSC1359.JPG',
 '/events/cricket/_DSC1353.JPG'
]
}
]

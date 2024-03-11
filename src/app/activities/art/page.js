import React from 'react';
import UserPage from '@/components/Activities/activities';

const Component1 = () => {
  const clientDetails1 = {
    
       images : [
        {
            id: 1,
            url: "https://source.unsplash.com/300x300/?nature"
          },
          {
            id: 2,
            url: "https://source.unsplash.com/300x300/?travel"
          },
          {
            id: 3,
            url: "https://source.unsplash.com/300x300/?architecture"
          },  {
            id: 4,
            url: "https://source.unsplash.com/300x300/?architecture"
          },  {
            id: 5,
            url: "https://source.unsplash.com/300x300/?architecture"
          },
      ],
      // Add more image URLs as needed
    headTitle:'ART',
    headDescription:'Art stimulates the imagination.',
    sectionTitle: 'Art for Kids',
    sectionDescription:
      'Art stimulates the imagination. To watch a child completely engrossed in arts is to recognize that the brain is active and driven by aesthetics and emotions, to make meaning, state opinions, and represent what matters to them.Our ART curriculum emphasizes  the development of a child’s fine motor skills i.e. the development of a child’s body and mind coordination, which takes place at a particular age when a child is going through the EYP phase. This particular phase plays a very important role in a child’s life since this is where he/she develops the ability to reach out to his/her creative potentials, which is then reflected in the higher grades.',
    videoUrl: 'https://www.youtube.com/embed/your-video-id1',
    backgroundImage: '/business-idea.png',
  };

  return <UserPage clientDetails={clientDetails1}/>;
};

export default Component1;

// Components 2 and 3 would follow a similar structure but with different client details.

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

    headTitle:'Dance',
    headDescription:'Children should be involved in at least one art form',
    sectionTitle: 'Art for Kids',
    sectionDescription:
      'Children should be involved in at least one art form as it contributes to their happiness. And when combined with learning, it must never be ignored. At ORCHIDS, we believe dance is an integral aspect of a balanced education programme. It is a unique way of enhancing creativity, confidence, and expression in a student. We have introduced an entire curriculum on kinesthetic learning to make sure our students get the best chance at improving their body and mind coordination, bringing a balance to their lives.',
    videoUrl: 'https://www.youtube.com/embed/your-video-id1',
    backgroundImage: '/business-idea.png',
  };

  return <UserPage clientDetails={clientDetails1} />;
};

export default Component1;

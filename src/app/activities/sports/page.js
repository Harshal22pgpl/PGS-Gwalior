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

    headTitle:'SPORTS AT PGS',
    headDescription:'"What can be learned on the ground cannot be learned in the classroom"',
    sectionTitle: 'Art for Kids',
    sectionDescription:
      'At PGS, we lay a strong emphasis on sports and physical development. Our sports curriculum is planned and designed for students to develop and enhance skills like strength, speed, endurance, agility, flexibility, control, balance etc. Sports today has also evolved as a form of entertainment and also offers promising careers We believe in mass participation, exposing our students to a number of sports events at inter-school, state, national and international levels. Every student is encouraged to join at least one school sports team. The P.E. teachers we employ are young and energetic with a good amount of expertise in sports and provide coaching for sports like football, basketball, throwball etc.',
    videoUrl: 'https://www.youtube.com/embed/your-video-id1',
    backgroundImage: '/business-idea.png',
  };

  return <UserPage clientDetails={clientDetails1} />;
};

export default Component1;

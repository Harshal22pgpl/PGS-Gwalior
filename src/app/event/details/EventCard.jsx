
import React from 'react';

const EventCard = ({ event }) => {
  const { title, description, startDate, endDate, location } = event;

  return (
    <div className="my-4 bg-white p-4 rounded-md shadow-md">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <p className="text-gray-500 mt-2">
        <span className="font-semibold">Start Date:</span> {startDate}
      </p>
      <p className="text-gray-500">
        <span className="font-semibold">End Date:</span> {endDate}
      </p>
      <p className="text-gray-500">
        <span className="font-semibold">Location:</span> {location}
      </p>
    </div>
  );
};

export default EventCard;

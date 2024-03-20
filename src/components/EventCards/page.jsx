"use client";
import React, { useState, useEffect } from "react";
import { getEvent } from "@/lib/services/events/eventSevices";
import Card from "@/components/Card/Card";
import NewEventCard from "../Card/NewEventCard";
import { getSchoolDetails } from "@/lib/services/schools/schoolservices";

const EventCard = ({ events }) => {
  return (
    <Card
      title={events.title}
      description="dfgh"
      learnMoreLink="dfvbn"
      imageUrl="sdfgh"
      textSize="14px"
    />
  );
};

const limit = 5,
  page = 1;

const EventList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [eventList, setEventList] = useState([]);
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setIsLoading(true);
        const school = await getSchoolDetails();
        const schoolUuid = school?.uuid;
        const eventData = await getEvent({ schoolUuid, limit: 6, page });
        setEventList(eventData.data);
       
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchEvents();
  }, []);
  return (
    <div className="w-full">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 m-auto p-4">
        {isLoading ? (
          <p>Loading Events...</p>
        ) : (
          <>
            {eventList.map((event) => (
              <NewEventCard event={event} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

const EventPage = () => {
  return (
    <>
      <div className="w-full p-5">
        <EventList />
      </div>
    </>
  );
};

export default EventPage;

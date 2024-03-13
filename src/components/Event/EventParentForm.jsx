'use client'

import React, { useState, useEffect } from "react";
import { getEvent, deleteEvent } from "@/lib/services/events/eventSevices";
import { getAuthToken } from "@/lib/middleware/apiInceptor";
import EventForm from "@/components/Event/EventForm";
import EventTable from "@/components/Event/EventTable";

const EventParent = ({ clientProps }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [allEvents, setAllEvents] = useState([]);
  const { schools = [], schoolUuid = '', profie = {}, events = [] } = clientProps
  const [selectedEventId, setSelectedEventId] = useState(null);

  const fetchEvents = async (page) => {
    try {
      setIsLoading(true);
      const eventData = await getEvent({ schoolUuid, limit: 25, page });
      const eventsArray = Array.isArray(eventData.data) ? eventData.data : [];
      setAllEvents(eventsArray);
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (uuid) => {
    try {
      setIsLoading(true);
      await deleteEvent(uuid);
      fetchEvents();
    } catch (error) {
      console.error("Error deleting event:", error);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleEdit = (uuid) => {
    setSelectedEventId(uuid);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getAuthToken(); // Get authentication token from cookies
        if (!token) {
          router.push("/admin/login");
          return;
        }
        setIsLoading(true);
        await fetchEvents();
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="events-page">
      <EventForm
        schools={schools}
        schoolUuid={schoolUuid}
        profile={profie}
        onFormSubmit={fetchEvents}
        events={allEvents}
        selectedEventId={selectedEventId}
      />
      <EventTable events={allEvents} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
};

export default EventParent;

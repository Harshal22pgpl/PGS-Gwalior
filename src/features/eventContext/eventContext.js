
"use client"
import React, { createContext, useContext, useState } from 'react';

export const EventContext = createContext({
  eventState: { selectedNewsId: null, events: [], event: {} },
  setEventState: () => { }
})

export const EventProvider = EventContext.Provider;

export const useEventContext = () => {
  return useContext(EventContext);
}

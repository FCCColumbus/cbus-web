import { useState, useEffect } from 'react';
import ical from 'cal-parser';

const useEvents = () => {
 const [events, setEvents] = useState([]);

 const fetchData = async () => {
  try {
    const response = await fetch(
      'https://docs.google.com/document/d/1OcnWWt1qHaJWE-8v_FPtNO8DKviRQ7DMaqylupuvPXE/export?format=txt'
    );

    const content = await response.text();
    return content;
  } catch (error) {
    return null;
  }
};

useEffect(() => {
  const eventsData = async () => {
    try {
      const fetchedData = await fetchData();
      const parsedData = ical.parseString(fetchedData);
      return parsedData.events;
    } catch (error) {
      return [];
    }
  };
  eventsData().then((data) => {
    setEvents(data);
  });
}, []);

  return {events}
}

export default useEvents;
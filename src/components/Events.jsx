import Calendar from 'react-calendar';
import { useState, useEffect, useMemo } from 'react';
import ical from 'cal-parser';

import Event from './Event';

import 'react-calendar/dist/Calendar.css';

function Events() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  const displayedEvents = useMemo(
    () =>
      events.filter(
        (event) =>
          event.dtstart.value.toDateString() === selectedDate.toDateString()
      ),
    [events, selectedDate]
  );

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
    const dateOnly = (date) =>
      new Date(date.getFullYear(), date.getMonth(), date.getDate());

    const initialSelectedDate = (eventsData) => {
      // Assumes events is sorted chronologically.
      // Returns today's date if there is an event.
      // If not, returns the nearest future date with an event.
      // If no future events, returns the last date with an event.

      const currentDate = dateOnly(new Date());

      if (eventsData.length === 0) {
        return currentDate;
      }

      const lastEventDate = dateOnly(
        eventsData[eventsData.length - 1].dtstart.value
      );
      if (lastEventDate.getTime() <= currentDate.getTime()) {
        return lastEventDate;
      }

      // Binary search for nearest future date with an event
      let left = 0;
      let right = eventsData.length - 1;
      while (left < right) {
        const mid = Math.floor((left + right) / 2);
        const midDate = dateOnly(eventsData[mid].dtstart.value);

        if (midDate.getTime() === currentDate.getTime()) {
          return currentDate;
        }

        if (midDate.getTime() > currentDate.getTime()) {
          right = mid;
        } else {
          left = mid + 1;
        }
      }
      return dateOnly(eventsData[left].dtstart.value);
    };

    const getEventData = async () => {
      try {
        const fetchedData = await fetchData();
        const parsedData = ical.parseString(fetchedData);
        const eventsData = parsedData.events;

        setSelectedDate(initialSelectedDate(eventsData));
        setEvents(eventsData);
      } catch (error) {
        // console.log(error);
      }
    };
    getEventData();
  }, []);

  const changeDate = (newDate) => {
    setSelectedDate(newDate);
  };

  return (
    <div id="events" className="events">
      <h3>Upcoming Events</h3>
      <div id="events-placeholder-text">
        The &quot;Events&quot; section is under development.
        <br />
        <br />
        In the meantime, please visit
        <br />
        <a href="https://www.meetup.com/techlifecolumbus/events/">
          https://www.meetup.com/techlifecolumbus/events/
        </a>
        <br />
        and look for FreeCodeCamp Columbus events there!
      </div>
      <div className="calendar-events-container">
        <Calendar
          className="calendar"
          onChange={changeDate}
          value={selectedDate}
          aria-label="Event Calendar"
          nextAriaLabel="Next"
          prevAriaLabel="Previous"
          next2AriaLabel="Jump forwards"
          prev2AriaLabel="Jump backwards"
          tileClassName={({ date, view }) => {
            if (view === 'month') {
              const formattedEventDates = events.map((event) =>
                event.dtstart.value.toDateString()
              );
              if (formattedEventDates.includes(date.toDateString())) {
                return 'event-tile';
              }
            }
            return '';
          }}
        />
        <div
          className={`event-container ${
            displayedEvents.length > 1 ? 'multiple-events' : ''
          }`}
        >
          {displayedEvents.map((event) => (
            <Event key={event.uid.value} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Events;

import Calendar from 'react-calendar';
import { useState, useEffect, useMemo, useCallback } from 'react';

import Event from './Event';
import useEvents from '../hooks/useEvents';
import 'react-calendar/dist/Calendar.css';

function Events() {
  const { events } = useEvents();
  const [selectedDate, setSelectedDate] = useState(new Date());

  const dateOnly = (date) =>
    new Date(date.getFullYear(), date.getMonth(), date.getDate());

  const eventsByDateString = useMemo(() => {
    // Key: date string of date object
    // Value: Array of event objects
    const eventsDict = {};
    events.forEach((event) => {
      const dateString = event.dtstart.value.toDateString();
      if (!eventsDict[dateString]) {
        eventsDict[dateString] = [];
      }
      eventsDict[dateString].push(event);
    });
    return eventsDict;
  }, [events]);

  const displayedEvents = useMemo(
    () => eventsByDateString[selectedDate.toDateString()] ?? [],
    [eventsByDateString, selectedDate]
  );

  useEffect(() => {
    const initialSelectedDate = () => {
      // Assumes events is sorted chronologically.
      // Returns today's date if there is an event.
      // If not, returns the nearest future date with an event.
      // If no future events, returns the last date with an event.

      const currentDate = dateOnly(new Date());

      if (events.length === 0) {
        return currentDate;
      }
      // Check if today's date has an event
      if (eventsByDateString[currentDate.toDateString()]) {
        return currentDate;
      }

      // Check if today's date is after the last event date
      const lastEventDate = dateOnly(events[events.length - 1].dtstart.value);
      if (lastEventDate.getTime() < currentDate.getTime()) {
        return lastEventDate;
      }

      // Binary search for nearest future date with an event
      // when there's no event today
      let left = 0;
      let right = events.length - 1;
      while (left < right) {
        const mid = Math.floor((left + right) / 2);
        const midDate = dateOnly(events[mid].dtstart.value);

        if (midDate.getTime() > currentDate.getTime()) {
          right = mid;
        } else {
          left = mid + 1;
        }
      }
      return dateOnly(events[left].dtstart.value);
    };
    setSelectedDate(initialSelectedDate());
  }, [events, eventsByDateString]);

  const tileClassName = useCallback(
    ({ date, view }) =>
      view === 'month' && eventsByDateString[date.toDateString()]
        ? 'event-tile'
        : '',
    [eventsByDateString]
  );

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
      {events.length && (
        <div className="calendar-events-container">
          <Calendar
            className="calendar"
            onChange={setSelectedDate}
            value={selectedDate}
            locale="en-US"
            minDetail="year"
            aria-label="Event Calendar"
            nextAriaLabel="Next"
            prevAriaLabel="Previous"
            next2AriaLabel="Jump forwards"
            prev2AriaLabel="Jump backwards"
            tileClassName={tileClassName}
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
      )}
    </div>
  );
}

export default Events;

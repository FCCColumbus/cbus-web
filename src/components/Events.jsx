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
      console.log(error);
      return null;
    }
  };

  useEffect(() => {
    const getEventData = async () => {
      try {
        const fetchedData = await fetchData();
        const parsedData = ical.parseString(fetchedData);
        const setData = parsedData.events;

        // check for nearest future event
        const nearestFutureEvent = setData.find(
          (event) =>
            event.dtstart.value.toDateString() >= new Date().toDateString()
        );

        // Check if there's an event on today's date
        const todayEvent = setData.find(
          (event) =>
            event.dtstart.value.toDateString() === new Date().toDateString()
        );

        if (todayEvent) {
          setSelectedDate(todayEvent.dtstart.value);
        } else if (nearestFutureEvent) {
          setSelectedDate(nearestFutureEvent.dtstart.value);
        } else {
          const nearestPastEvent = setData[setData.length - 1];
          setSelectedDate(nearestPastEvent.dtstart.value);
        }
        setEvents(setData);
      } catch (error) {
        console.log(error);
      }
    };

    getEventData();
  }, []);

  const changeDate = (newDate) => {
    setSelectedDate(newDate);

    // Check if the new date matches an event's date before updating
    const matchingEvent = events.find(
      (event) => event.dtstart.value.toDateString() === newDate.toDateString()
    );
    console.log(matchingEvent);
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
          {displayedEvents &&
            displayedEvents.map((event) => <Event event={event} />)}
        </div>
      </div>
    </div>
  );
}

export default Events;

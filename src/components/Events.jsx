import Calendar from 'react-calendar';
import Event from './Event';

import useCalendar from '../hooks/useCalendar';
import useEvents from '../hooks/useEvents';

import 'react-calendar/dist/Calendar.css';

function Events() {
  const { events } = useEvents();
  const { selectedDate, setSelectedDate, displayedEvents, tileClassName } =
    useCalendar(events);

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
      {events.length > 0 && (
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

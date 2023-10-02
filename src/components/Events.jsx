// import Event from './Event'
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Events() {

  // setting the cal's default state to today's date
  const [selectedDate, setSelectedDate] = useState(new Date())

  const changeDate = newDate => {
    setSelectedDate(newDate)
  }

  // The arrays below are retained for future reference,
  // pending implementation of some API call to retrieve events from Google Calendar or Meetup.com, for example.
  const events = [{
      name: "regular meetup",
      description: "have pizza and talk about code",
      date: new Date(2023, 9, 5),
      location: 'Co-Hatch Upper Arlington',
      link: 'google.com',
      id: 'event-01'
  }, {
      name: "What are web components?",
      description: "John will give a lecture about what web components are and why we should care. Don't worry, there'll be pizza!",
      date: new Date(2023, 9, 13),
      location: 'Co-Hatch Upper Arlington',
      link: 'google.com',
      id: 'event-02'
  }]

  return (
    <div id="events" className="events">
      <h3>Upcoming Events</h3>
      <div id="events-placeholder-text">
        The &quot;Events&quot; section is under development.
        <br /><br />
        In the meantime, please visit
        <br />
        <a href="https://www.meetup.com/techlifecolumbus/events/">https://www.meetup.com/techlifecolumbus/events/</a>
        <br />
        and look for FreeCodeCamp Columbus events there!
      </div>
      {/* The array mapping below is retained for future reference.  */}
      {/* {events.map((event, i) => <Event event={event} key={event.id} id={i} />)} */}
      <Calendar
        onChange={changeDate}
        value={selectedDate}
        tileClassName={({ date, view }) => {
          if (view === 'month') {
            const formattedEventDates = events.map(event => event.date.toDateString());
          if (formattedEventDates.includes(date.toDateString())) {
            return 'custom-tile';
            }
          }
            return '';
          }}
        />
    </div>
  );
}

export default Events;
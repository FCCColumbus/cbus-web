// import Event from './Event'
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Events() {

  // setting the cal's default state to today's date
  const [selectedDate, setSelectedDate] = useState(new Date())

  const changeDate = newDate => {
    console.log(newDate);
    setSelectedDate(newDate)
  }

  // The arrays below are retained for future reference,
  // pending implementation of some API call to retrieve events from Google Calendar or Meetup.com, for example.

  const events = [{
      name: "regular meetup",
      description: "have pizza and talk about code",
      date: '2023-09-28',
      location: 'Co-Hatch Upper Arlington',
      link: 'google.com',
      id: 'event-01'
  }, {
      name: "What are web components?",
      description: "John will give a lecture about what web components are and why we should care. Don't worry, there'll be pizza!",
      date: new Date(2023, 8, 12),
      location: 'Co-Hatch Upper Arlington',
      link: 'google.com',
      id: 'event-02'
  }]

  // just here to stop current error if not events used
  console.log(events[1].date);  
  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      // Convert the event dates to the same format as date.toDateString()
      const formattedEventDates = events.map(event => new Date(event.date).toDateString());
      
      if (formattedEventDates.includes(date.toDateString())) {
        console.log('match');
        // Return custom content (e.g., a dot or any other element)
        // return 'custom-tile';
      }
    }
    return null; // Return null for other dates
  };
  

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
      {/* <Calendar onChange={changeDate} value={selectedDate} tileContent={tileContent}/> */}
      <Calendar
  onChange={changeDate}
  value={selectedDate}
  tileContent={tileContent}
  tileClassName={({ date, view }) => {
    if (view === 'month') {
      const formattedEventDates = events.map(event => new Date(event.date).toDateString());
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

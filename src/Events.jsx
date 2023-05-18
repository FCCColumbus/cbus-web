// import Event from './Event'

function Events() {
    // The arrays below are retained for future reference,
    // pending implementation of some API call to retrieve events from Google Calendar or Meetup.com, for example.

    // const events = [{
    //     name: "regular meetup",
    //     description: "have pizza and talk about code",
    //     time: new Date('2023-04-17T18:30:00'),
    //     location: 'Co-Hatch Upper Arlington',
    //     id: 'event-01'
    // }, {
    //     name: "What are web components?",
    //     description: "John will give a lecture about what web components are and why we should care. Don't worry, there'll be pizza!",
    //     time: new Date('2023-05-17T18:30:00'),
    //     location: 'Co-Hatch Upper Arlington',
    //     id: 'event-02'
    // }]

    return (
        <>
            <div id="events-section" className="events">
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
                {/* The array mapping below is retained for future reference. */}
                {/* {events.map((event, i) => <Event event={event} key={event.id} id={i} />)} */}
            </div>
            <img src='/divider.jpg' alt='code on a screen. mostly css' />
        </>
    );
}

export default Events;

import Event from './Event'

function Events() {

    // I GUESS John can update this on an event by event basis lol
    const events = [{
        name: "regular meetup",
        description: "have pizza and talk about code",
        time: new Date('2023-04-17T18:30:00'),
        location: 'Co-Hatch Upper Arlington',
        id: 'event-01'
    }, {
        name: "What are web components?",
        description: "John will give a lecture about what web components are and why we should care. Don't worry, there'll be pizza!",
        time: new Date('2023-05-17T18:30:00'),
        location: 'Co-Hatch Upper Arlington',
        id: 'event-02'
    }]

    return (
        <>
            <div className="events">
                <h3>Upcoming Events</h3>
                {events.map((event, i) => <Event event={event} key={event.id} id={i} />)}
            </div>
            <img src='/divider.jpg' alt='code on a screen. mostly css' />
        </>
    )

}
export default Events
function Event({ event, id }) {
    const href = `/coding-${id + 1}.jpg`

    return (
        <div className="event">
            <img src={href} alt='people coding' className="event-img" />
            <div className="info">
                <h5>{event.name}</h5>
                <table>
                    <tbody>
                        <tr>
                            <th>time:</th>
                            <td>{new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'short' }).format(event.time)}</td>
                        </tr>
                        <tr>
                            <th>location:</th>
                            <td>{event.location}</td>
                        </tr>
                    </tbody>
                </table>
                <p>{event.description}</p>
            </div>
        </div>
    )
}

export default Event
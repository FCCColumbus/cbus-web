function Event({ event, id }) {
  const href = `/coding-${id + 1}.jpg`

  const formattedDateTime = new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'short' }).format(event.time);
  /*
    We replace the "narrow non-breaking space" that appears before the AM/PM in some environments
    with a regular space to help prevent snapshot test failures.
    fwiw, it appears that this is a somewhat recent change in Node: https://www.reddit.com/r/webdev/comments/1054ve6/psa_node_1813_changed_datetime_formatting/
      - jedduffey@gmail.com, 2023 May 22
  */
  const replacedNonBreakingSpace = formattedDateTime.replace(/\u202f/g, ' ');

  return (
    <div className="event">
      <img src={href} alt='people coding' className="event-img" />
      <div className="info">
        <h5>{event.name}</h5>
        <table>
          <tbody>
            <tr>
              <th>time:</th>
              <td>{replacedNonBreakingSpace}</td>
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
import PropTypes from "prop-types";

function Event({ event }) {
  // add id to event
  // const href = `/coding-${id + 1}.jpg`
  const formattedDateTime = new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'short' }).format(event.dtstart.value);
  console.log(event.location);

  /*
    We replace the "narrow non-breaking space" that appears before the AM/PM in some environments
    with a regular space to help prevent snapshot test failures.
    fwiw, it appears that this is a somewhat recent change in Node: https://www.reddit.com/r/webdev/comments/1054ve6/psa_node_1813_changed_datetime_formatting/
      - jedduffey@gmail.com, 2023 May 22
  */
  const replacedNonBreakingSpace = formattedDateTime.replace(/\u202f/g, ' ');
  
  return (
    <div className="event">
      {/* <img src={href} alt='people coding' className="event-img" /> */}
      <div className="event-info">
        <h5>{event.summary.value}</h5>
        <table>
          <tbody>
            <tr>
              <th>time:</th>
              <td>{replacedNonBreakingSpace}</td>
            </tr>
            <tr>
              <th>location:</th>
              {event.location && <td>{event.location.value}</td>}
            </tr>
          </tbody>
        </table>
        <p>{event.description.value}</p>
        <div className="meet-up-register">
          <a target="_blank" without rel="noreferrer" href="https://www.meetup.com/register/">Join Meetup.com</a>
        </div>
      </div>
    </div>
  )
}

Event.propTypes = {
  event: PropTypes.shape({
    summary: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    dtstart: PropTypes.objectOf(Date),
    location : PropTypes.string.isRequired,
    // id : PropTypes.number.isRequired,
  }).isRequired,
  // id: PropTypes.number.isRequired,
};

export default Event
import renderer from "react-test-renderer";

import Event from "../../components/Event";

describe("Event", () => {
  it("renders", () => {
    const event = {
      summary: {value: "Test Event"},
      description: {value: "This is a test event."},
      dtstart: {value: new Date('2023-04-17T18:30:00')},
      location: {value: "Test Location"},
      uid: {value: "test-id"},
      url: {value: "meetup.com/testgroup/events/test"}
    };

    const view = renderer.create(<Event event={event} id={1} />);
    expect(view).toMatchSnapshot();
  });
});

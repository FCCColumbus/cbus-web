import renderer from "react-test-renderer";

import Event from "../../Event";

describe("Event", () => {
    it("renders", () => {
        const event = {
            name: "Test Event",
            time: new Date('2023-04-17T18:30:00'),
            location: "Test Location",
            description: "This is a test event.",
        };

        const view = renderer.create(<Event event={event} />);
        expect(view).toMatchSnapshot();
    });
});

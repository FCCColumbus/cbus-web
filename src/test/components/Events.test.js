import renderer from "react-test-renderer";

import Events from "../../Events";

describe("Events", () => {
    it("renders", () => {
        const view = renderer.create(<Events />);
        expect(view).toMatchSnapshot();
    });
});

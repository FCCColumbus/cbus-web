import renderer from "react-test-renderer";

import About from "../../components/About";

describe("About", () => {
    it("renders", () => {
        const view = renderer.create(<About />);
        expect(view).toMatchSnapshot();
    });
});

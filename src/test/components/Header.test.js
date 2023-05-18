import renderer from "react-test-renderer";

import Header from "../../Header";

describe("Header", () => {
    it("renders", () => {
        const view = renderer.create(<Header />);
        expect(view).toMatchSnapshot();
    });
});

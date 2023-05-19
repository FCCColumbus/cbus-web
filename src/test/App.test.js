import renderer from "react-test-renderer";

import App from "../App"

describe("App", () => {
    it("renders", () => {
        const view = renderer.create(<App />);
        expect(view).toMatchSnapshot();
    });
});

import renderer from "react-test-renderer";

import Splash from "../../Splash";

describe("Splash", () => {
    it("renders", () => {
        const view = renderer.create(<Splash />);
        expect(view).toMatchSnapshot();
    });
});

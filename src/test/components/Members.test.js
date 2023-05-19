import renderer from "react-test-renderer";

import Members from "../../Members";

describe("Members", () => {
    it("renders", () => {
        const view = renderer.create(<Members />);
        expect(view).toMatchSnapshot();
    });
});

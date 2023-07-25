import renderer from "react-test-renderer";

import Splash from "../../components/Splash";

describe("Splash", () => {
  it("renders", () => {
    const view = renderer.create(<Splash />);
    expect(view).toMatchSnapshot();
  });
});

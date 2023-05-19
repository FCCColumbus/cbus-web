import renderer from "react-test-renderer";

import Events from "../../components/Events";

describe("Events", () => {
  it("renders", () => {
    const view = renderer.create(<Events />);
    expect(view).toMatchSnapshot();
  });
});

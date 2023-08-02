import renderer from "react-test-renderer";

import Header from "../../components/Header";

describe("Header", () => {
  it("renders", () => {
    const view = renderer.create(<Header />);
    expect(view).toMatchSnapshot();
  });
});
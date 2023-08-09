import renderer from "react-test-renderer";

import Footer from "../../components/Footer";

describe("Footer", () => {
  it("renders", () => {
    const view = renderer.create(<Footer />);
    expect(view).toMatchSnapshot();
  });
});
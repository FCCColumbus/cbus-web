import rendered from "react-test-renderer";

import DividerImage from "../../components/DividerImage";

describe("DividerImage", () => {
  it("renders", () => {
    const view = rendered.create(<DividerImage />);
    expect(view).toMatchSnapshot();
  });
});

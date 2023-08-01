import renderer from "react-test-renderer";
import Footer from "../../components/Footer";
import { render, screen } from "@testing-library/react";

describe("Footer", () => {
  it("renders", () => {
    const view = renderer.create(<Footer />);
    expect(view).toMatchSnapshot();
  });

  it("contains anchor tag with image-wrapper class and correct href", () => {
    render(<Footer />);
    const anchorTag = screen.getByTestId("image-wrapper"); 
    expect(anchorTag).toBeInTheDocument();
    expect(anchorTag).toHaveAttribute("href", "https://www.netlify.com");
  });  

  it("contains an image within the anchor tag", () => {
    render(<Footer />);
    const footerImage = screen.getByAltText(/Deploys by Netlify/i);
    expect(footerImage).toBeInTheDocument();
  });
});

import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  describe("renders links to external sites", () => {
    it.each([
      ['freeCodeCamp.org homepage', 'freecodecamp.org'],
      ['Discord homepage', 'discord.gg'],
      ['FCCColumbus Github profile', 'github.com/FCCColumbus'],
      ['FCCColumbus Github contributors', 'github.com/FCCColumbus/cbus-web/graphs/contributors'],
    ])(`%s`, (_, expected) => {
      const { container } = render(<App />);
      const anchorElements = container.querySelectorAll('a');

      const actual = Object.values(anchorElements)
        .map(anchorElement => anchorElement.attributes.href.value)
        .some(value => value.includes(expected));

      expect(actual).toBeTruthy();
    });
  });

  test("has an Events section", () => {
    const { container } = render(<App />);
    const event = container.querySelector('#events');
    expect(event).toBeInTheDocument();
  });

  test("has an About section", () => {
    const { container } = render(<App />);
    const about = container.querySelector('#about');
    expect(about).toBeInTheDocument();
  });
});

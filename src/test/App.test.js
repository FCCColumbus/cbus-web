import { render } from "@testing-library/react";

import App from "../App"
import About from "../components/About";
import Events from "../components/Events";

jest.mock('../components/Events');
jest.mock('../components/About');

describe("App", () => {
  describe("renders links to external sites", () => {
    it.each([
      ['freeCodeCamp.org homepage', 'freecodecamp.org'],
      ['Discord homepage', 'discord.com/invite/EXehPVnBYz'],
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
    render(<App />)
    expect(Events).toHaveBeenCalled()
  });

  test("has an About section", () => {
    render(<App />)
    expect(About).toHaveBeenCalled()
  });
});

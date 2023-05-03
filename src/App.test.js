import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  describe("renders external links", () => {
    it.each([
      ['Discord homepage', 'discord.gg'],
      ['freeCodeCamp.org homepage', 'freecodecamp.org'],
      ['FCCColumbus Github profile', 'github.com/FCCColumbus'],
    ])(`%s`, (_, expected) => {
      const { container } = render(<App />);
      const anchorElements = container.querySelectorAll('a');

      const actual = Object.values(anchorElements)
        .map(element => element.attributes.href.value)
        .some(value => value.includes(expected));

      expect(actual).toBeTruthy();
    });
  });
});

xtest("has a description of what the group is", () => {
  const { container } = render(<App />);

  const div = container.querySelector('.description');
  expect(div).toBeInTheDocument();
  expect(div).not.toBeEmptyDOMElement();
});

xtest("has events", () => {
  const { container } = render(<App />);

  const event = container.querySelector('.event');
  expect(event).toBeInTheDocument();
});

xtest("has footer", () => {
  const { container } = render(<App />);
  const footer = container.querySelector('footer');
  expect(footer).toBeInTheDocument();
});

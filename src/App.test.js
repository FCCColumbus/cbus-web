import { render } from "@testing-library/react";
import App from "./App";

test("has link to Discord homepage", () => {
  const { container } = render(<App />);

  const links = container.querySelectorAll('a');
  let linkExists = false;
  links.forEach(link => {
    if (link.attributes['href'].value.includes('discord.gg')) linkExists = true
  });
  expect(linkExists).toBeTruthy();
});

test("has link to freeCodeCamp.org homepage", () => {
  const { container } = render(<App />);

  const links = container.querySelectorAll('a');
  let linkExists = false;
  links.forEach(link => {
    if (link.attributes['href'].value.includes('freecodecamp.org')) linkExists = true
  });
  expect(linkExists).toBeTruthy();
});

test("has link to FCCColumbus Github profile", () => {
  const { container } = render(<App />);

  const links = container.querySelectorAll('a');
  let linkExists = false;
  links.forEach(link => {
    if (link.attributes['href'].value.includes('github.com/FCCColumbus')) linkExists = true
  });
  expect(linkExists).toBeTruthy();
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

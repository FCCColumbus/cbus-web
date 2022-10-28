import { render, screen } from "@testing-library/react";
import App from "./App";

/*
test("renders Hello World!", () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello World/i);
  expect(linkElement).toBeInTheDocument();
});
*/


test("has a description of what the group is", () => {
  const { container } = render(<App />)

  const div = container.querySelector('.description')
  expect(div).toBeInTheDocument()
  expect(div).not.toBeEmptyDOMElement()
})


test("has link to discord server", () => {
  const { container } = render(<App />)

  const links = container.querySelectorAll('a')
  let linkExists = false
  links.forEach(link => {
    if (link.attributes['href'].value.includes('discord')) linkExists = true
  })
  expect(linkExists).toBeTruthy()
  
})

test("has link to freecodecamp.org", () => {
  const { container } = render(<App />)

  const links = container.querySelectorAll('a')
  let linkExists = false
  links.forEach(link => {
    if (link.attributes['href'].value.includes('freecodecamp.org')) linkExists = true
  })
  expect(linkExists).toBeTruthy()
  
})

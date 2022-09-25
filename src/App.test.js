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
  render(<App />)

  const div = screen.getByText(/is a /i)
  expect(div).toBeInTheDocument()
  expect(div).not.toBeEmptyDOMElement()
})

test("has link to freecodecamp website", () => {
  const { container } = render(<App />)

  const link = container.querySelector('a href="https://www.freecodecamp.org/"')
  expect(link).toBeInTheDocument()
})



test("has link to discord server", () => {
  const { container } = render(<App />)

  const link = container.querySelectorAll('a').find(l => {
    if (l.href.contains('netlify')) return l
  })
  expect(link).toBeInTheDocument()
})
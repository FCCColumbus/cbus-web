import { render, screen } from "@testing-library/react";
import App from "./App";

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



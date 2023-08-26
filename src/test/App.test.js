import { render } from "@testing-library/react";

import App from "../App";

// The mockName isn't necessary but may be helpful for reading test failures.
const randomString = (mockName) => `${mockName}_${Math.random().toString(36).substring(2, 8)}`;

const mockHeader = randomString("Header");
const mockSplash = randomString("Splash");
const mockAbout = randomString("About");
const mockEvents = randomString("Events");
const mockMembers = randomString("Members");
const mockFooter = randomString("Footer");

jest.mock('../components/Header', () => () => mockHeader);
jest.mock('../components/Splash', () => () => mockSplash);
jest.mock('../components/About', () => () => mockAbout);
jest.mock('../components/Events', () => () => mockEvents);
jest.mock('../components/Members', () => () => mockMembers);
jest.mock('../components/Footer', () => () => mockFooter);

describe("App", () => {
  test("renders App components in order", () => {
    // Capture the raw output of the render function.
    // It returns a data type called "RenderResult", so that's what we'll name the variable.
    const renderResult = render(<App />);

    // Isolate the thing that we want to test.
    // I usually name this variable "actual" as it represents what our code is actually doing,
    // and is consistent with the "actual-expected" terminology used in unit testing.
    // In this case, our RenderResult object has a property called "container" and we want to test
    // the innerHTML of that container.
    // In the context of React/JSX, the innerHTML is what's generated by the component's return statement.
    const actual = renderResult.container.innerHTML;

    const expected = `<div class="App">${mockHeader}${mockSplash}${mockAbout}${mockEvents}<img src="/divider.jpg" alt="code on a screen. mostly css">${mockMembers}${mockFooter}</div>`;
    expect(actual).toBe(expected)
  });
});

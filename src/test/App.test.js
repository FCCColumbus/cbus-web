import { render, screen } from "@testing-library/react";

import App from "../App";

jest.mock('../components/Header', () => () => <div>HeaderMock</div>);
jest.mock('../components/Splash', () => () => <div>SplashMock</div>);
jest.mock('../components/About', () => () => <div>AboutMock</div>);
jest.mock('../components/Events', () => () => <div>EventsMock</div>);
jest.mock('../components/Members', () => () => <div>MembersMock</div>);
jest.mock('../components/Footer', () => () => <div>FooterMock</div>);

describe("App", () => {
  test("renders App components in order", () => {
    // first, render the app as we mocked it
    render(<App />);

    // make sure the Header component is there (since we use it below)
    expect(screen.getByText('HeaderMock')).toBeInTheDocument();

    // the Header's parent element should be the App HTMLElement
    const appnode = screen.getByText('HeaderMock').parentElement;

    // at this point we can just do a string match on the raw outerHTML of the app element
    // we do this by using a regular expression (RegEx).  The {1,1} notation means "one and only one"
    // and the [\s\S]* ignores any strings in between
    // note the order of the component mocks.  when the order is changed in App.js, this test will fail (as it should)
    expect(appnode.outerHTML).toMatch(/HeaderMock{1,1}[\s\S]*SplashMock{1,1}[\s\S]*AboutMock{1,1}[\s\S]*EventsMock{1,1}[\s\S]*MembersMock{1,1}[\s\S]*FooterMock{1,1}/s);
  });
});

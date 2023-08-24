import { render, screen } from "@testing-library/react";

import App from "../App"
jest.mock('../components/Header', () => {
  return () => <div>HeaderMock</div>
});
jest.mock('../components/Splash', () => {
  return () => <div>SplashMock</div>
});
jest.mock('../components/About', () => {
  return () => <div>AboutMock</div>
});
jest.mock('../components/Events', () => {
  return () => <div>EventsMock</div>
});
jest.mock('../components/Members', () => {
  return () => <div>MembersMock</div>
});
jest.mock('../components/Footer', () => {
  return () => <div>FooterMock</div>
});

describe("App", () => {
  test("renders App components in order", () => {
    //first, render the app as we mocked it
    render(<App />)

    //make sure the Header component is there
    expect(screen.getByText('HeaderMock')).toBeInTheDocument(); 
    //the Header's parent should be the 
    const appnode = screen.getByText('HeaderMock').parentElement;

    expect(appnode.outerHTML).toMatch(/HeaderMock{1,1}[\s\S]*SplashMock{1,1}[\s\S]*AboutMock{1,1}[\s\S]*EventsMock{1,1}[\s\S]*MembersMock{1,1}[\s\S]*FooterMock{1,1}/s);
  });

});
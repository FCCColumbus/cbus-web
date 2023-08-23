import { render, screen } from "@testing-library/react";

import App from "../App"

jest.mock('../components/Header', () => {
  return () => <div>Header Mock</div>
});
jest.mock('../components/Splash', () => {
  return () => <div>Splash Mock</div>
});
jest.mock('../components/About', () => {
  return () => <div>About Mock</div>
});
jest.mock('../components/Events', () => {
  return () => <div>Events Mock</div>
});
jest.mock('../components/Members', () => {
  return () => <div>Members Mock</div>
});
jest.mock('../components/Footer', () => {
  return () => (
    <div>
      <a href="freecodecamp.org">freeCodeCamp.org homepage</a>
      <a href="discord.com/invite/EXehPVnBYz">Discord homepage</a>
      <a href="github.com/FCCColumbus">FCCColumbus Github profile</a>
      <a href="github.com/FCCColumbus/cbus-web/graphs/contributors">FCCColumbus Github contributors</a>
    </div>
  );
});

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

  test("renders App components in order", () => {
    render(<App />)
    expect(screen.getByText('Header Mock')).toBeInTheDocument(); 
    expect(screen.getByText('Splash Mock')).toBeInTheDocument();  
    expect(screen.getByText('About Mock')).toBeInTheDocument();  
    expect(screen.getByText('Events Mock')).toBeInTheDocument();
    expect(screen.getByAltText('code on a screen. mostly css')).toBeInTheDocument();
    expect(screen.getByText('Members Mock')).toBeInTheDocument();  
    expect(screen.getByText("freeCodeCamp.org homepage")).toBeInTheDocument();
    expect(screen.getByText("Discord homepage")).toBeInTheDocument();
    expect(screen.getByText("FCCColumbus Github profile")).toBeInTheDocument();
    expect(screen.getByText("FCCColumbus Github contributors")).toBeInTheDocument();
  });
});
import renderer from 'react-test-renderer';

import Header from '../../components/Header';
import { render, screen } from '@testing-library/react';

describe('Header', () => {
  it('renders', () => {
    const view = renderer.create(<Header />);
    expect(view).toMatchSnapshot();
  });

  it('displays "Discord" as the third item', () => {
    render(<Header />);
    const thirdItem = screen.getByText('Discord');
    expect(thirdItem).toBeInTheDocument();
  });
});

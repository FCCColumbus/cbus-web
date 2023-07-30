import renderer from 'react-test-renderer';

import Footer from '../../components/Footer';
import { render, screen } from '@testing-library/react';

describe('Footer', () => {
  it('renders', () => {
    const view = renderer.create(<Footer />);
    expect(view).toMatchSnapshot();
  });

  it('displays "Discord" as the third item', () => {
    render(<Footer />);
    const thirdItem = screen.getByText('Discord');
    expect(thirdItem).toBeInTheDocument();
  });
});

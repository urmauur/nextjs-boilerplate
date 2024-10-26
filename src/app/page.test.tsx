import { render, screen } from '@testing-library/react';

import HomePage from '@/app/page';

describe('Homepage', () => {
  it('renders the Components', () => {
    render(<HomePage />);

    const heading = screen.getByText(/Save and see your changes instantly/i);

    expect(heading).toBeInTheDocument();
  });
});

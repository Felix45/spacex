import React from 'react';
import Header from '../components/Header';
import renderWithProviders from './test-utils';

describe('Header component', () => {
  it('Renders correctly', () => {
    const { asFragment } = renderWithProviders(<Header />);
    const firstRender = asFragment();

    expect(firstRender).toMatchSnapshot();
  });
});

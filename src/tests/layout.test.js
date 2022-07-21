import React from 'react';
import Layout from '../components/Layout';
import renderWithProviders from './test-utils';

describe('Layout component', () => {
  it('Renders correctly', () => {
    const { asFragment } = renderWithProviders(<Layout />);
    const firstRender = asFragment();

    expect(firstRender).toMatchSnapshot();
  });
});

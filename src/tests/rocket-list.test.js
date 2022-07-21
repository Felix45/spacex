import React from 'react';
import RocketList from '../components/RocketList';
import { rockets } from '../data/mock';
import renderWithProviders from './test-utils';

describe('RocketList component', () => {
  it('Renders correctly', () => {
    const { asFragment } = renderWithProviders(<RocketList rockets={rockets} />);
    const firstRender = asFragment();

    expect(firstRender).toMatchSnapshot();
  });
});

import React from 'react';
import Rocket from '../components/Rocket';
import { rockets } from '../data/mock';
import renderWithProviders from './test-utils';

describe('Rocket component', () => {
  it('Renders correctly', () => {
    const { asFragment } = renderWithProviders(<Rocket rocket={rockets[0]} />);
    const firstRender = asFragment();

    expect(firstRender).toMatchSnapshot();
  });
});

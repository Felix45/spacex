import React from 'react';
import ProfileView from '../components/ProfileView';
import renderWithProviders from './test-utils';

describe('ProfileView component', () => {
  it('Renders correctly', () => {
    const { asFragment } = renderWithProviders(<ProfileView />);
    const firstRender = asFragment();

    expect(firstRender).toMatchSnapshot();
  });
});

import React from 'react';
import renderWithProviders from './test-utils';
import RocketsView from '../components/RocketsView';
import { rockets } from '../data/mock';

describe('RocketsView component', () => {
  const { asFragment, baseElement } = renderWithProviders(<RocketsView />, {
    preloadedState: {
      rockets: {
        rockets,
      },
    },
  });

  const firstRender = asFragment();

  it('Contains all the rockets from the mock data', () => {
    const renderedRockets = baseElement.getElementsByClassName('row');

    expect(renderedRockets.length).toBe(rockets.length);
  });

  it('Renders correctly', () => {
    expect(firstRender).toMatchSnapshot();
  });
});

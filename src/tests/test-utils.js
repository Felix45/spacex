import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import setupStore from '../redux';

const renderWithProviders = (
  ui,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  } = {},
) => {
  const Wrapper = ({ children }) => (
    <Router>
      <Provider store={store}>
        {children}
      </Provider>
    </Router>
  );

  Wrapper.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
  };

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};

export default renderWithProviders;

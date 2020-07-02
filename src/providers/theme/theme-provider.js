import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components/macro';
import GlobalStyles from 'styles/global-styles';
import theme from 'styles/theme';

const custom = {
  container: {
    xs: 'full',
    sm: 'full',
    md: 'full',
    lg: 73.75,
    xl: 73.75,
  },
};
const Provider = ({ children }) => {
  return (
    <ThemeProvider theme={{ ...theme, awesomegrid: custom }}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default memo(Provider);

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components/macro';
import GlobalStyles from 'styles/global-styles';
import theme from 'styles/theme';

const Provider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default memo(Provider);
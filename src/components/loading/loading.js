import React from 'react';
import styled, { withTheme } from 'styled-components/macro';
import { ClassicSpinner } from 'react-spinners-kit';

export const LoadingContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Loading = withTheme(({ theme, color, children }) => {
  return (
    <LoadingContainer>
      <ClassicSpinner color={color || theme.colors.primary} backColor="#eee" />
      {children}
    </LoadingContainer>
  );
});

export const Spinner = withTheme(({ theme, ...props }) => {
  return <ClassicSpinner color={theme.colors.primary} {...props} backColor="#eee" />;
});

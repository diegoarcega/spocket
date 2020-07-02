import styled, { css } from 'styled-components';

const styles = css`
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
  font-size: inherit;
  text-decoration: none;

  &:hover {
    filter: brightness(1.1);
  }
`;

export const Link = styled.a`
  ${styles}
`;

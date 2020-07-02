import styled, { css } from 'styled-components/macro';
import { Link as RouterLink } from 'react-router-dom';

const styles = css`
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
  font-size: inherit;
  text-decoration: none;

  &:hover {
    filter: brightness(1.1);
  }
`;

export const Link = styled(RouterLink)`
  ${styles}
`;

export const Anchor = styled.a`
  ${styles}
`;

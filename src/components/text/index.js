import styled, { css } from 'styled-components/macro';
import PropTypes from 'prop-types';

export const styles = css`
  margin: 0;
  font-size: ${props => props.theme.fontSizes[props.size]};
  font-weight: ${props => props.weight};
  font-style: ${props => props.fontStyle};
  text-align: ${props => props.align};
  text-transform: ${props => props.transform};
  color: ${props => (props.theme.colors[props.color] ? props.theme.colors[props.color] : props.color)};
`;

export const Text = styled.p`
  ${styles}
`;

Text.propTypes = {
  align: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  weight: PropTypes.string,
  fontStyle: PropTypes.string,
  transform: PropTypes.string,
};

Text.defaultProps = {
  align: 'inherit',
  color: 'inherit',
  size: 'normal',
  weight: 'normal',
  fontStyle: 'normal',
  transform: 'none',
};

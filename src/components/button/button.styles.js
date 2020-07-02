import styled from 'styled-components';
import PropTypes from 'prop-types';
import theme from 'styles/theme';

export const Button = styled.button`
  display: flex;
  flex-wrap: ${props => props.wrap};
  flex-grow: ${props => props.grow};
  flex-basis: ${props => props.basis};
  flex-shrink: ${props => props.shrink};
  justify-content: center;
  align-items: center;
  background: ${props => props.backgroundColor};
  padding: 10px 26px;
  font-size: inherit;
  min-height: 58px;
  color: ${props => props.color};
  font-weight: ${props => props.weight};
  border: 0;
  border-radius: ${props => getVariant(props.variant)};
  outline: 0;
  cursor: ${props => getCursor(props)};
  filter: ${props => (props.isLoading || props.disabled ? 'brightness(1.2) saturate(60%)' : 'none')};
  transition: filter 0.5s;

  &:hover {
    filter: ${props => (props.disabled ? 'brightness(1.2) saturate(60%)' : 'brightness(1.1)')};
  }
`;

Button.propTypes = {
  grow: PropTypes.string,
  wrap: PropTypes.string,
  basis: PropTypes.string,
  shrink: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  weight: PropTypes.number,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  variant: PropTypes.string,
};

Button.defaultProps = {
  grow: '0',
  wrap: 'nowrap',
  basis: 'initial',
  shrink: 'shrink',
  color: theme.button.color,
  backgroundColor: theme.button.backgroundColor,
  weight: 900,
  disabled: false,
  isLoading: false,
  variant: 'normal',
};

function getCursor({ isLoading, disabled }) {
  if (isLoading) {
    return 'wait';
  }
  if (disabled) {
    return 'not-allowed';
  }

  return 'pointer';
}

function getVariant(variant) {
  switch (variant) {
    case 'addon-right':
      return '0px 3px 3px 0px';
    case 'addon-left':
      return '3px 0 0 3px';
    default:
      return '3px';
  }
}

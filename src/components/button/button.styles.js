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
  padding: 10px 20px;
  min-height: 58px;
  color: ${props => props.color};
  text-transform: ${props => props.transform};
  border: 0;
  border-radius: 3px;
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
  transform: PropTypes.string,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
};

Button.defaultProps = {
  grow: '0',
  wrap: 'nowrap',
  basis: 'initial',
  shrink: 'shrink',
  color: theme.button.color,
  backgroundColor: theme.button.backgroundColor,
  transform: 'none',
  disabled: false,
  isLoading: false,
};

function getCursor(props) {
  if (props.isLoading) {
    return 'wait';
  }
  if (props.disabled) {
    return 'not-allowed';
  }

  return 'pointer';
}

import styled from 'styled-components/macro';
import { config } from 'react-awesome-styled-grid';
import { Group } from 'components/group';
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
  min-height: 37px;
  color: ${props => props.color};
  text-transform: ${props => props.transform};
  border: 0;
  border-radius: 13px;
  outline: 0;
  cursor: ${props => getCursor(props)};
  filter: ${props => (props.isLoading || props.disabled ? 'brightness(1.2) saturate(60%)' : 'none')};
  transition: filter 0.5s;

  &:hover {
    filter: ${props => (props.disabled ? 'brightness(1.2) saturate(60%)' : 'brightness(1.1)')};
  }
`;

Button.defaultProps = {
  grow: '0',
  wrap: 'nowrap',
  basis: 'initial',
  shrink: 'shrink',
  color: '#fff',
  backgroundColor: theme.button.backgroundColor,
  transform: 'uppercase',
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

export const ButtonGroup = styled(Group)`
  flex-wrap: ${props => props.wrap};
  flex-grow: ${props => props.grow};
  flex-basis: ${props => props.basis};
  flex-shrink: ${props => props.shrink};
  align-items: ${props => props.alignItems};
  justify-content: ${props => props.justifyContent};

  ${props => config(props).media['sm']`
      align-items: flex-start;
  `}
`;

ButtonGroup.defaultProps = {
  wrap: 'nowrap',
  basis: 'initial',
  shrink: 'shrink',
  alignItems: 'normal',
  justifyContent: 'normal',
};

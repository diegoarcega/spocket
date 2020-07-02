import styled from 'styled-components/macro';

export const Text = styled.p`
  margin: 0;
  font-size: ${props => props.theme.fontSizes[props.size]};
  font-weight: ${props => props.weight};
  font-style: ${props => props.fontStyle};
  text-align: ${props => (props.center ? 'center' : 'left')};
  text-transform: ${props => props.transform};
  color: ${props => (props.theme.colors[props.color] ? props.theme.colors[props.color] : props.color)};
`;

Text.defaultProps = {
  color: 'inherit',
  size: 'normal',
  weight: 'normal',
  fontStyle: 'normal',
  transform: 'none',
};

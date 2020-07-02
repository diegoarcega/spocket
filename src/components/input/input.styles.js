import styled from 'styled-components';

export const InputStyled = styled.input`
  background: ${props => props.theme.input.backgroundColor};
  padding: 15px 0;
  border-width: 0 0 1px 0;
  min-height: 58px;
  border-bottom-color: ${props => (props.isError ? props.theme.colors.error : props.theme.input.borderColor)};
  color: ${props => props.theme.input.color};
  transition: all 1s ease-in-out;

  &::placeholder {
    color: ${props => props.theme.input.placeholderColor};
  }

  &:active,
  &:focus {
    border-color: ${props => props.theme.input.activeBorderColor};
  }

  cursor: ${props => (props.isLoading ? 'wait' : 'default')};
  filter: ${props => (props.isLoading ? 'brightness(1.2) saturate(70%)' : 'none')};
`;

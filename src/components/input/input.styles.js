import styled from 'styled-components';

export const InputStyled = styled.input`
  background: ${props => props.theme.input.backgroundColor};
  padding: 15px;
  width: ${props => props.width};
  border-width: 1px;
  border-style: solid;
  min-height: 58px;
  border-color: ${props => (props.isError ? props.theme.colors.error : props.theme.input.borderColor)};
  color: ${props => props.theme.input.color};
  font-size: inherit;
  transition: all 0.4s ease-in-out;

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

export const Container = styled.div`
  width: ${props => props.width};
  position: relative;
`;

export const Loading = styled.div`
  position: absolute;
  right: 25px;
  top: 23px;
`;

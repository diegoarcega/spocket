import styled from 'styled-components/macro';

export const Space = styled.div`
  min-height: ${props => (props.vertical ? `${props.vertical}px` : 'auto')};
  min-width: ${props => (props.horizontal ? `${props.horizontal}px` : 'auto')};
`;

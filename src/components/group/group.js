import styled from 'styled-components/macro';

const Group = styled.div`
  display: flex;
  flex-wrap: ${props => props.wrap};
  flex-grow: ${props => props.grow};
  flex-basis: ${props => props.basis};
  flex-shrink: ${props => props.shrink};
  flex-direction: ${props => getDirection(props)};
  align-items: ${props => props.alignItems};
  justify-content: ${props => props.justifyContent};
`;

Group.defaultProps = {
  alignItems: 'normal',
  justifyContent: 'normal',
  wrap: 'nowrap',
  basis: 'initial',
  shrink: 'shrink',
};

function getDirection({ flexDirection, horizontal, vertical }) {
  if (flexDirection) {
    return flexDirection;
  }

  if (horizontal) {
    return 'row';
  }

  if (vertical) {
    return 'column';
  }

  return 'column';
}

export default Group;

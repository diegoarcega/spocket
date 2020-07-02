import styled from 'styled-components';
import PropTypes from 'prop-types';

const Group = styled.div`
  display: flex;
  flex-wrap: ${props => props.wrap};
  flex-grow: ${props => props.grow};
  flex-basis: ${props => props.basis};
  flex-shrink: ${props => props.shrink};
  flex-direction: ${props => props.direction};
  align-items: ${props => props.alignItems};
  justify-content: ${props => props.justifyContent};
`;

Group.propTypes = {
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  wrap: PropTypes.string,
  basis: PropTypes.string,
  shrink: PropTypes.string,
  direction: PropTypes.string,
};

Group.defaultProps = {
  alignItems: 'normal',
  justifyContent: 'normal',
  wrap: 'nowrap',
  basis: 'initial',
  shrink: 'shrink',
  direction: 'column',
};

export default Group;

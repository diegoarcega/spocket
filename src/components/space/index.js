import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Space = styled.div`
  min-height: ${props => (props.vertical ? `${props.vertical}px` : 'auto')};
  min-width: ${props => (props.horizontal ? `${props.horizontal}px` : 'auto')};
`;

Space.propTypes = {
  vertical: PropTypes.string,
  horizontal: PropTypes.string,
};

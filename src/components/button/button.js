import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { ImpulseSpinner } from 'react-spinners-kit';
import { Button as Container } from './button.styles';

function Button({ children, isLoading, backgroundColor, ...otherProps }) {
  return (
    <Container isLoading={isLoading} backgroundColor={backgroundColor} {...otherProps}>
      {isLoading ? (
        <ImpulseSpinner frontColor={backgroundColor || '#58c5a8'} backColor="rgba(255,255,255, 0.5)" />
      ) : (
        children
      )}
    </Container>
  );
}

Button.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  backgroundColor: PropTypes.string,
};

Button.defaultProps = {
  backgroundColor: '#58c5a8',
};

export default memo(Button);

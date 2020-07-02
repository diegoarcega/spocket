import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'components/loading';
import { InputStyled, Container, Loading } from './input.styles';

const Input = ({ isLoading, ...rest }) => {
  return (
    <Container width={rest.width}>
      <InputStyled isLoading={isLoading} {...rest} />
      {isLoading && (
        <Loading>
          <Spinner size="15" />
        </Loading>
      )}
    </Container>
  );
};

Input.propTypes = {
  isLoading: PropTypes.bool,
};

export default memo(Input);

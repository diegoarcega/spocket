import React, { memo, Fragment } from 'react';
import PropTypes from 'prop-types';
import { InputStyled } from './input.styles';

const Input = ({ isLoading, ...rest }) => {
  return (
    <Fragment>
      <InputStyled isLoading={isLoading} {...rest} />
      {isLoading && <span>loading</span>}
    </Fragment>
  );
};

Input.propTypes = {
  isLoading: PropTypes.bool,
};

export default memo(Input);

import { memo } from 'react';
import styled from 'styled-components';
import { styles } from 'components/text';

const PageTitle = styled.h1`
  ${styles}
`;

export default memo(PageTitle);

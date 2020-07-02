import styled from 'styled-components';
import Img from 'react-cool-img';

export const Container = styled.div`
  display: flex;
  background: #fff;
  width: 265px;
  max-width: 265px;
  height: 431px;
  margin-bottom: 27px;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-height: 306px;
  overflow-x: hidden;
`;

export const Image = styled(Img)`
  height: 100%;
`;

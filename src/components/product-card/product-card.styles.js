import styled from 'styled-components';
import Img from 'react-cool-img';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  width: 265px;
  max-width: 265px;
  height: 431px;
  margin-bottom: 27px;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 4px;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-height: 306px;
  overflow: hidden;
`;

export const Image = styled(Img)`
  min-height: 306px;
  min-width: 265px;
`;

export const Description = styled.div`
  padding: 15px 22px;
`;

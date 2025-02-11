import styled from 'styled-components';
import Img from 'react-cool-img';
import { Text } from 'components/text';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  width: 100%;
  max-width: 100%;
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
  width: 100%;
`;

export const Description = styled.div`
  padding: 15px 22px;
`;

export const Title = styled(Text)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

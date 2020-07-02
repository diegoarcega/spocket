import styled from 'styled-components';
import { Container as ContainerRaw } from 'components/grid';

export const Container = styled(ContainerRaw)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 100%;
  min-height: -webkit-fill-available;
`;

export const Content = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  flex-grow: 1;
  min-height: 100%;
  min-height: -webkit-fill-available;
`;

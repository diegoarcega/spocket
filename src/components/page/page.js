import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Space } from 'components/space';
import { Container, Row, Col } from 'react-awesome-styled-grid';
import styled from 'styled-components';

const ContainerStyled = styled(Container)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 100%;
  min-height: -webkit-fill-available;
`;

const Content = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  flex-grow: 1;
  min-height: 100%;
  min-height: -webkit-fill-available;
`;

const Page = ({ children }) => (
  <ContainerStyled>
    <Row>
      <Col>
        <Space vertical="20" />
        <Content>{children}</Content>
      </Col>
    </Row>
  </ContainerStyled>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default memo(Page);

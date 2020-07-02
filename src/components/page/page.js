import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Space } from 'components/space';
import { Row, Col } from 'components/grid';
import { Container, Content } from './page.styles';

const Page = ({ children }) => (
  <Container>
    <Row>
      <Col>
        <Space vertical="50" />
        <Content>{children}</Content>
      </Col>
    </Row>
  </Container>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default memo(Page);

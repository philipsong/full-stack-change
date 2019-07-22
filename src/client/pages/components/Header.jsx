import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

const Header = () => {
  return (
    <Container>
        <Row>
          <Col xs={3}></Col>
          <Col xs={6}><h2>TouchBistro Full Stack Challenge</h2></Col>
          <Col xs={3}></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col xs={6}><h4>Submitter: Philip Song</h4></Col>
          <Col></Col>
        </Row>
    </Container>
  );
}

export default Header;
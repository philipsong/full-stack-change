import React, { Component } from 'react';
import { Button, Form, Container, Col, Row } from 'react-bootstrap';

export default class Home extends Component {  
  constructor(props) {
    super(props);
    this.state = { medianPrimes: null, num: '', formValidated: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({ num: e.target.value, medianPrimes: null });
    if (!!e.target.value) {
      this.setState({ formValidated: true });
    } else {
      this.setState({ formValidated: false });
    }
  }

  handleClick() {
    const { num } = this.state;
    fetch(`/api/median-primes/${num}`)
      .then(res => res.json())
      .then(res => {
        if (res.status.statusCd === '200') {
          this.setState({ medianPrimes: res.data });   
        } else if (res.status.statusCd === '400') {
          this.setState({ medianPrimes: res.status.statusTxt });
        } 
      });
  }

  render() {
    const { medianPrimes , num, formValidated } = this.state;
    return (
      <Container>
        <Row style={{ height: '40px' }}>
          <Col></Col>
          <Col xs={6}></Col>
          <Col></Col>
        </Row>
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
        <Row style={{ height: '20px' }}>
          <Col></Col>
          <Col xs={6}></Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col xs={6}>
            <Form>
              <Form.Group controlId="upperLimit">
                <Form.Label>Please Input Upper Limit n:</Form.Label>
                <Form.Control type="number" onChange={ this.handleChange } />
              </Form.Group>
              <Button onClick={this.handleClick} disabled ={!formValidated} >Submit</Button>
            </Form>
          </Col>
          <Col></Col>
        </Row>
        <Row style={{ height: '20px' }}>
          <Col></Col>
          <Col xs={6}></Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col xs={6}>{medianPrimes ? <span>{`Median Primes under ${num} : ${medianPrimes}`}</span> : <span>Median Primes will dispaly here!</span>}</Col>
          <Col></Col>
        </Row>
      </Container>
    );
  }
}
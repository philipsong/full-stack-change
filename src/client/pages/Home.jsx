import React, { Component } from 'react';
import { Button, Form, Container, Col, Row } from 'react-bootstrap';
import Header from '../components/Header';
import Result from '../components/Result';
import bffClient from '../apis/bffClient';

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
    bffClient.getPrimeNumbers(num)
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
      <div>
        <Header/>
        <Container>
          <Row>
            <Col xs={3}></Col>
            <Col xs={6}>
              <Form>
                <Form.Group controlId="upperLimit">
                  <Form.Label>Please Input Upper Limit n:</Form.Label>
                  <Form.Control type="number" onChange={ this.handleChange } />
                </Form.Group>
                <Button onClick={this.handleClick} disabled ={!formValidated} >Submit</Button>
              </Form>
            </Col>
            <Col xs={3}></Col>
          </Row>
        </Container>
        <Result num={num} medianPrimes={medianPrimes}/>
      </div> 
    );
  }
}
import React from 'react';
import PropTypes from 'prop-types'
import { Container, Col, Row } from 'react-bootstrap';

const Result = (props) => {
  const {
    num,
    medianPrimes
  } = props;
  return (
    <Container>
        <Row>
          <Col xs={3}></Col>
          <Col xs={6} className="final_res">{medianPrimes ? <span>{`Median Primes under ${num} : ${medianPrimes}`}</span> : <span>Median Primes will dispaly here!</span>}</Col>
          <Col xs={3}></Col>
        </Row>
    </Container>
  );  
};

Result.propTypes = {
  num: PropTypes.string,
  medianPrimes: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ])
};

Result.defaultProps = {
  heading: '',
  medianPrimes: null
}

export default Result;
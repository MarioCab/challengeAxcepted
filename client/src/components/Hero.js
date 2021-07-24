import React from 'react'; 
import Jumbotron from 'react-bootstrap/Jumbotron'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'


function Hero (props) {
      return (
        <div>
          <Jumbotron className="bg-transparent jumbotron-fluid p-0">
              <Container fluid={true}>
                  <Row className="justify-content-center py-5">
                      <Col md={8} sm={12}>
            <h1 className="display-3">Application Description (Jumbotron)</h1>
            <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-2" />
            <p>Why you should sign up... </p>
            <p className="lead">
              <Button color="primary">Learn More</Button>
            </p>
                </Col>
                </Row>
            </Container>
          </Jumbotron>
        </div>
      );
    };


export default Hero; 


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
            <h1 className="display-3">Are you ready to Axcept the Challenge?</h1>
            <p className="lead"> If you thrive on challenges and hate to be outdone, you may want to find some "friendly competition." </p>
            <hr className="my-2" />
            <p>Issue and axcept challenges in your community and around the world!</p>
            <p className="lead">
              <Button color="primary">Get Started</Button>
            </p>
                </Col>
                </Row>
            </Container>
          </Jumbotron>
        </div>
      );
    };


export default Hero; 


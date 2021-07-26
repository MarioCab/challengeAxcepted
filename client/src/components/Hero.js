import React from "react";
import { Redirect, useParams } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_ME, QUERY_USER } from "../utils/queries";

const Hero = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  console.log(data);

  const user = data?.me || data?.getUser || {};
  console.log(user);

  const handleRedirect = (event) => {
    event.preventDefault();
    if (Auth.getProfile().data.username === userParam) {
      return <Redirect to="/challengeworld" />;
    }
    if (loading) {
      return <h1>Loading...</h1>;
    }
    if (!user?.username) {
      return <h1>Log in to post a challenge!</h1>;
    } else console.log("dang she aint workin");
  };

  return (
    <div>
      <Jumbotron className="bg-transparent jumbotron-fluid p-0">
        <Container fluid={true}>
          <Row className="justify-content-center py-5">
            <Col md={8} sm={12}>
              <h1 className="display-3">
                Are you ready to Axcept the Challenge?
              </h1>
              <p className="lead">
                {" "}
                If you thrive on challenges and hate to be outdone, you may want
                to find some "friendly competition."{" "}
              </p>
              <hr className="my-2" />
              <p>
                Issue and axcept challenges in your community and around the
                world!
              </p>
              <p className="lead">
                <Button onClick={handleRedirect} color="primary">
                  Get Started
                </Button>
              </p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Hero;

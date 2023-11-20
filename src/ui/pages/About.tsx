import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function About() {
  return (
    <Container>
      <Row className="p-4">
        <Col md={12} className=" justify-content-center">
          <h2
            style={{
              fontSize: "3rem",
            }}
          >
            Acerca de carewatch
          </h2>

          <p
            style={{
              fontSize: "1.3rem",
            }}
          >
            {" "}
            CareWatch es una applicación movil comprometida con la sociedad,
            apoyando al cuidado de tu ser querido , para que puedas realizar sus
            cuidados con las indicaciones del medico y facilitandote la
            organización de los horarios de los cuidadores{" "}
          </p>
        </Col>
      </Row>
    </Container>
  );
}

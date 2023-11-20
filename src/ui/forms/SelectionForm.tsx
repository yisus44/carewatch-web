import React from "react";
import { Form, Col, Row, Container, Button, Card } from "react-bootstrap";
import {
  primaryColor,
  secondaryColor,
  secondaryFontColor,
} from "../../common/constants/colors";

export default function SelectionForm({
  appCommunication,
  handleAppCommunicationChange,
  emailCommunication,
  handleEmailCommunicationChange,
  whatsAppCommunication,
  handleWhatsAppCommunicationChange,
  showNextButton,
  handleNextClick,
  disableNextButton,
  showPreviousButton,
  handlePreviousClick,
  request,
  setRequest,
}) {
  const handleSubmit = (e) => {
    handleNextClick();
  };
  return (
    <Form
      className="m-2 d-flex justify-content-center"
      style={{ height: "300px" }}
      onSubmit={handleSubmit}
    >
      <Row>
        <Col md={12} className="p-2">
          <Form.Check
            className="p-3"
            type="switch"
            id="emailCommunication"
            label="Email Communication"
            style={{ fontSize: "1.5em" }}
            checked={emailCommunication}
            onChange={handleEmailCommunicationChange}
          />
          <Form.Check
            className="p-3"
            type="switch"
            id="whatsAppCommunication"
            style={{ fontSize: "1.5em" }}
            label="WhatsApp Communication"
            checked={whatsAppCommunication}
            onChange={handleWhatsAppCommunicationChange}
          />
          <Form.Check
            className="p-3"
            type="switch"
            style={{ fontSize: "1.5em" }}
            id="appCommunication"
            label="App Communication"
            checked={appCommunication}
            onChange={handleAppCommunicationChange}
          />
        </Col>{" "}
        <Card className="w-100" style={{ border: "none" }}>
          <Row>
            <Col md={12} className="d-flex justify-content-center">
              {showPreviousButton && (
                <Button
                  className="m-2"
                  variant="danger"
                  style={{
                    backgroundColor: secondaryColor,
                    borderColor: secondaryColor,
                    color: secondaryFontColor,
                    fontSize: "1.2rem",
                  }}
                  onClick={handlePreviousClick}
                >
                  Volver
                </Button>
              )}
              {showNextButton && (
                <Button
                  type="submit"
                  className="m-2"
                  style={{
                    backgroundColor: primaryColor,
                    borderColor: secondaryColor,
                    fontSize: "1.2rem",
                  }}
                  disabled={disableNextButton}
                >
                  Continuar
                </Button>
              )}
            </Col>
          </Row>
        </Card>
      </Row>
    </Form>
  );
}

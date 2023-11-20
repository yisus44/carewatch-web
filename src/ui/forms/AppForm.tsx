import React, { useState } from "react";
import {
  Form,
  Card,
  CardTitle,
  CardBody,
  Alert,
  Button,
  Col,
  Row,
} from "react-bootstrap";
import {
  primaryColor,
  secondaryColor,
  secondaryFontColor,
} from "../../common/constants/colors";
import { login } from "../../common/services/login";

export default function AppForm({
  showNextButton,
  handleNextClick,
  disableNextButton,
  showPreviousButton,
  handlePreviousClick,
  request,
  setRequest,
}) {
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (!email || !password) {
      setShowAlert(true);
    } else {
      const response = await login(email, password);
      if (!response) return alert("Credenciales incorrectas");
      setRequest({
        ...request,
        userId: response,
      });
      console.log({ response });
      handleNextClick();
    }
  };

  return (
    <Form
      className="m-2 d-flex justify-content-center"
      onSubmit={handleSubmit}
      style={{ height: "300px" }}
    >
      <Card className="w-100" style={{ border: "none" }}>
        <CardTitle className="p-3 d-flex justify-content-center">
          <h3>Ingresa con tu cuenta de Carewatch</h3>
        </CardTitle>
        <CardBody>
          Correo electrónico
          <Form.Control
            type="email"
            name="email"
            placeholder="Ingresa tu correo electrónico"
          />
        </CardBody>
        <CardBody>
          Contraseña
          <Form.Control
            type="password"
            name="password"
            placeholder="Ingresa tu contraseña"
          />
          {showAlert && (
            <Alert variant="danger" className="p-1 mt-1 mb-0">
              Por favor, completa todos los campos
            </Alert>
          )}
        </CardBody>

        <Row>
          <Col className="d-flex justify-content-center">
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
    </Form>
  );
}

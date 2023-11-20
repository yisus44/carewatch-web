import React, { useState } from "react";
import {
  Form,
  Card,
  CardTitle,
  CardBody,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import { useParams } from "react-router-dom";

import {
  primaryColor,
  secondaryColor,
  secondaryFontColor,
} from "../../common/constants/colors";
import { confirmUserGroup } from "../../common/services/confirm-user-group";

export default function ConfirmForm({
  showNextButton,
  handleNextClick,
  disableNextButton,
  showPreviousButton,
  handlePreviousClick,
  request,
  setRequest,
}) {
  const [hasJoined, setHasJoined] = useState(false);
  const { userGroupToken } = useParams();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await confirmUserGroup(userGroupToken, request);
    if (!response)
      return alert(
        "Hubo un error, intentalo nuevamente o revisa que hayas escrito correctamento todo"
      );
    alert("Te has unido al grupo con exito ");
    setHasJoined(true);
  };
  return (
    <Form
      className=" m-2 d-flex justify-content-center"
      onSubmit={handleSubmit}
      style={{ height: "300px" }}
    >
      {" "}
      <Card style={{ border: "none" }}>
        <CardBody className=" d-flex justify-content-center">
          {hasJoined ? (
            <p>
              Felicidades, te has unido a un grupo y puedes cerrar esta ventana
              :)
            </p>
          ) : (
            <h1>
              {" "}
              <Button
                variant="success"
                className="w-90 h-50"
                style={{
                  backgroundColor: primaryColor,
                  borderColor: primaryColor,
                  fontSize: "2rem",
                }}
                type="submit"
              >
                Unirme al grupo
              </Button>
            </h1>
          )}
        </CardBody>
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
    </Form>
  );
}

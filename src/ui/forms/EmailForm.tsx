import React from "react";
import {
  Card,
  CardTitle,
  CardBody,
  Form,
  Alert,
  Col,
  Row,
  Button,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import {
  primaryColor,
  secondaryColor,
  secondaryFontColor,
} from "../../common/constants/colors";

export default function EmailForm({
  showNextButton,
  handleNextClick,
  disableNextButton,
  showPreviousButton,
  handlePreviousClick,
  request,
  setRequest,
  defaultValue,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data.email) {
      console.log(data); // Proceed with form submission
      setRequest({
        ...request,
        guestEmail: data.email,
      });
      handleNextClick();
    } else {
      alert("Please fill in the email field");
    }
  };

  return (
    <Form
      className="col-12 m-2 d-flex justify-content-center"
      style={{ height: "300px" }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Card className="w-100" style={{ border: "none" }}>
        <CardTitle className="p-3 d-flex justify-content-center">
          <h3>Ingresa tu correo electrónico</h3>
        </CardTitle>
        <CardBody>
          <Form.Control
            type="email"
            defaultValue={defaultValue}
            {...register("email", { required: true })}
          />
          {errors.email && errors.email.type === "required" && (
            <Alert variant="danger" className="p-1 mt-1 mb-0">
              Por favor, ingresa tu correo electrónico
            </Alert>
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

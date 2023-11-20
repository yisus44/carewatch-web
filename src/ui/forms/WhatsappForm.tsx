import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Form,
  Alert,
  Row,
  Col,
} from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  primaryColor,
  secondaryColor,
  secondaryFontColor,
} from "../../common/constants/colors";

export default function WhatsappForm({
  showNextButton,
  handleNextClick,
  disableNextButton,
  showPreviousButton,
  handlePreviousClick,
  request,
  setRequest,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (Object.keys(errors).length === 0) {
      console.log(data); // Proceed with form submission
      setRequest({
        ...request,
        guestPhone: data.whatsapp,
      });
      console.log({ request }); // Proceed with form submission

      handleNextClick();
    } else {
      // Show a message to the user about required fields
      console.log("Please fill in all required fields");
    }
  };

  return (
    <Form
      className=" m-2 d-flex justify-content-center"
      style={{ height: "300px" }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Card className="w-100" style={{ border: "none" }}>
        <CardTitle className="p-3 d-flex justify-content-center">
          <h3>Ingresa tu número de Whatsapp</h3>
        </CardTitle>
        <CardBody>
          <Form.Control
            type="text"
            {...register("whatsapp", {
              required: true,
              pattern: {
                value: /^\+(?:[0-9] ?){6,14}[0-9]$/,
                message: "Favor de ingresar un numero valido de whatsapp",
              },
            })}
          />
          {errors.whatsapp && (
            <Alert variant="danger" className="p-1 mt-1 mb-0">
              Por favor, ingresa tu número de WhatsApp para continuar
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

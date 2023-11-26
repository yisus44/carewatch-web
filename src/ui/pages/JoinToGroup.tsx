import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import EmailForm from "../forms/EmailForm";
import WhatsappForm from "../forms/WhatsappForm";
import AppForm from "../forms/AppForm";
import SelectionForm from "../forms/SelectionForm";
import { FormsEnum } from "../../common/constants/formsEnum";
import ConfirmForm from "../forms/ConfirmForm";
import Navbar from "../components/Navbar";
import { Container, Row, Col, Button, CardTitle } from "react-bootstrap";
import { primaryColor } from "../../common/constants/colors";
import { ConfirmGroupRequest } from "../../common/services/confirm-user-group";
export function MultiStepForm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const email = searchParams.get("email");
  const phone = searchParams.get("phone");

  const [emailCommunication, setEmailCommunication] = useState();
  const [whatsAppCommunication, setWhatsAppCommunication] = useState();
  const [appCommunication, setAppCommunication] = useState(false);
  const [currentForm, setCurrentForm] = useState(0);
  const [selectedForms, setSelectedForms] = useState([]);
  const [request, setRequest] = useState<ConfirmGroupRequest>({
    guestEmail: email,
    guestPhone: phone,
  });

  useEffect(() => {
    if (email) handleEmailCommunicationChange();
    if (phone) handleWhatsAppCommunicationChange();
  }, []);

  const handleEmailCommunicationChange = () => {
    const communication = !emailCommunication;
    let newSelectedForms = [];

    if (communication)
      newSelectedForms = [...selectedForms, FormsEnum.EMAIL_FORM];
    else {
      newSelectedForms = selectedForms.filter(
        (form) => form != FormsEnum.EMAIL_FORM
      );
      console.log({ newSelectedForms });
    }

    setEmailCommunication(communication);
    setSelectedForms(newSelectedForms);
    console.log({ newSelectedForms, communication });
  };

  const handleWhatsAppCommunicationChange = () => {
    const communication = !whatsAppCommunication;
    let newSelectedForms = [];

    if (communication)
      newSelectedForms = [...selectedForms, FormsEnum.WHATSAPP_FORM];
    else
      newSelectedForms = selectedForms.filter(
        (form) => form != FormsEnum.WHATSAPP_FORM
      );

    setWhatsAppCommunication(communication);
    setSelectedForms(newSelectedForms);
    console.log({ newSelectedForms, communication });
  };

  const handleAppCommunicationChange = () => {
    const communication = !appCommunication;
    let newSelectedForms = [];

    if (communication)
      newSelectedForms = [...selectedForms, FormsEnum.APP_FORM];
    else
      newSelectedForms = selectedForms.filter(
        (form) => form != FormsEnum.APP_FORM
      );

    setAppCommunication(communication);
    setSelectedForms(newSelectedForms);
  };

  const handleNextClick = () => {
    let nextForm = currentForm + 1;
    while (nextForm < FormsEnum.CONFIRM_FORM) {
      if (selectedForms.includes(nextForm)) return setCurrentForm(nextForm);
      nextForm++;
    }

    if (nextForm >= FormsEnum.CONFIRM_FORM)
      return setCurrentForm(FormsEnum.CONFIRM_FORM);

    if (nextForm <= FormsEnum.SELECTION_FORM)
      return setCurrentForm(FormsEnum.SELECTION_FORM);
  };

  const handlePreviousClick = () => {
    let previousForm = currentForm - 1;
    while (previousForm > FormsEnum.SELECTION_FORM) {
      if (selectedForms.includes(previousForm))
        return setCurrentForm(previousForm);
      console.log({ previousForm, selectedForms });

      previousForm--;
    }
    if (previousForm <= FormsEnum.SELECTION_FORM)
      return setCurrentForm(FormsEnum.SELECTION_FORM);
  };

  return (
    <Container>
      <Row className="p-4">
        <Col md={12} className="d-flex justify-content-center">
          <h2>Unete a un grupo!</h2>
        </Col>
      </Row>
      {currentForm === FormsEnum.SELECTION_FORM && (
        <SelectionForm
          appCommunication={appCommunication}
          handleAppCommunicationChange={handleAppCommunicationChange}
          emailCommunication={emailCommunication}
          handleEmailCommunicationChange={handleEmailCommunicationChange}
          whatsAppCommunication={whatsAppCommunication}
          handleWhatsAppCommunicationChange={handleWhatsAppCommunicationChange}
          showNextButton={currentForm !== FormsEnum.CONFIRM_FORM}
          disableNextButton={
            !emailCommunication && !whatsAppCommunication && !appCommunication
          }
          handleNextClick={handleNextClick}
          handlePreviousClick={handlePreviousClick}
          showPreviousButton={currentForm !== FormsEnum.SELECTION_FORM}
          request={request}
          setRequest={setRequest}
        />
      )}
      {currentForm === FormsEnum.WHATSAPP_FORM && (
        <WhatsappForm
          showNextButton={currentForm !== FormsEnum.CONFIRM_FORM}
          disableNextButton={
            !emailCommunication && !whatsAppCommunication && !appCommunication
          }
          handleNextClick={handleNextClick}
          handlePreviousClick={handlePreviousClick}
          showPreviousButton={currentForm !== FormsEnum.SELECTION_FORM}
          request={request}
          setRequest={setRequest}
          defaultValue={phone}
        />
      )}
      {currentForm === FormsEnum.APP_FORM && (
        <AppForm
          showNextButton={currentForm !== FormsEnum.CONFIRM_FORM}
          disableNextButton={
            !emailCommunication && !whatsAppCommunication && !appCommunication
          }
          handleNextClick={handleNextClick}
          handlePreviousClick={handlePreviousClick}
          showPreviousButton={currentForm !== FormsEnum.SELECTION_FORM}
          request={request}
          setRequest={setRequest}
        />
      )}
      {currentForm === FormsEnum.EMAIL_FORM && (
        <EmailForm
          showNextButton={currentForm !== FormsEnum.CONFIRM_FORM}
          disableNextButton={
            !emailCommunication && !whatsAppCommunication && !appCommunication
          }
          handleNextClick={handleNextClick}
          handlePreviousClick={handlePreviousClick}
          showPreviousButton={currentForm !== FormsEnum.SELECTION_FORM}
          request={request}
          setRequest={setRequest}
          defaultValue={email}
        />
      )}
      {currentForm === FormsEnum.CONFIRM_FORM && (
        <ConfirmForm
          showNextButton={currentForm !== FormsEnum.CONFIRM_FORM}
          disableNextButton={
            !emailCommunication && !whatsAppCommunication && !appCommunication
          }
          handleNextClick={handleNextClick}
          handlePreviousClick={handlePreviousClick}
          showPreviousButton={currentForm !== FormsEnum.SELECTION_FORM}
          request={request}
          setRequest={setRequest}
        />
      )}
    </Container>
  );
}

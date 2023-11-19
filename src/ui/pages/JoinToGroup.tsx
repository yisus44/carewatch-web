import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import EmailForm from "../forms/EmailForm";
import WhatsappForm from "../forms/WhatsappForm";
import AppForm from "../forms/AppForm";
import SelectionForm from "../forms/SelectionForm";
import { FormsEnum } from "../../common/constants/formsEnum";
import ConfirmForm from "../forms/ConfirmForm";

export function MultiStepForm() {
  const [emailCommunication, setEmailCommunication] = useState(false);
  const [whatsAppCommunication, setWhatsAppCommunication] = useState(false);
  const [appCommunication, setAppCommunication] = useState(false);
  const [currentForm, setCurrentForm] = useState(0);
  const [selectedForms, setSelectedForms] = useState([]);

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
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Multi-Step Form</h1>
        </div>
      </div>
      {currentForm == FormsEnum.SELECTION_FORM && (
        <SelectionForm
          appCommunication={appCommunication}
          handleAppCommunicationChange={handleAppCommunicationChange}
          emailCommunication={emailCommunication}
          handleEmailCommunicationChange={handleEmailCommunicationChange}
          whatsAppCommunication={whatsAppCommunication}
          handleWhatsAppCommunicationChange={handleWhatsAppCommunicationChange}
        />
      )}
      {currentForm == FormsEnum.WHATSAPP_FORM && <WhatsappForm />}
      {currentForm == FormsEnum.APP_FORM && <AppForm />}
      {currentForm == FormsEnum.EMAIL_FORM && <EmailForm />}
      {currentForm == FormsEnum.CONFIRM_FORM && <ConfirmForm />}

      <div className="row">
        <div className="col-md-12">
          <button
            className="btn btn-primary"
            disabled={
              !emailCommunication && !whatsAppCommunication && !appCommunication
            }
            onClick={handleNextClick}
          >
            Siguiente
          </button>
          {currentForm !== FormsEnum.SELECTION_FORM && (
            <button className="btn btn-danger" onClick={handlePreviousClick}>
              Volver
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

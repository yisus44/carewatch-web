import React from "react";

export default function SelectionForm({
  appCommunication,
  handleAppCommunicationChange,
  emailCommunication,
  handleEmailCommunicationChange,
  whatsAppCommunication,
  handleWhatsAppCommunicationChange,
}) {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="emailCommunication"
            checked={emailCommunication}
            onChange={handleEmailCommunicationChange}
          />
          <label className="form-check-label" htmlFor="emailCommunication">
            Email Communication
          </label>
        </div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="whatsAppCommunication"
            checked={whatsAppCommunication}
            onChange={handleWhatsAppCommunicationChange}
          />
          <label className="form-check-label" htmlFor="whatsAppCommunication">
            WhatsApp Communication
          </label>
        </div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="appCommunication"
            checked={appCommunication}
            onChange={handleAppCommunicationChange}
          />
          <label className="form-check-label" htmlFor="appCommunication">
            App Communication
          </label>
        </div>
      </div>
    </div>
  );
}

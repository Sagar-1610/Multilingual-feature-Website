import React from "react";
import { useTranslation } from "react-i18next";
import key from "../locales/Key/key.json";

const TrialSection = () => {
  const { t } = useTranslation();

  const TrialData = [
    {
      type: "email",
      id: "inputEmail4",
      placeholder: t(key.emailKey),
      label: t(key.emailKey),
    },
    {
      type: "password",
      id: "inputPassword4",
      placeholder: t(key.passKey),
      label: t(key.passKey),
    },
    {
      type: "text",
      id: "inputAddress",
      placeholder: t(key.addKey),
      label: t(key.addKey),
    },
    {
      type: "text",
      id: "inputAddress2",
      placeholder: t(key.addkey2),
      label: t(key.addkey2),
    },
  ];

  return (
    <div className="pb-4 w-full">
      <div className="text-center h2 pt-4 ">{t(key.trial)}</div>
      <div className="text-center h6 pt-2">{t(key.loremKey)}</div>
      <div className="p-5">
        <form>
          <div className="form-row">
            {TrialData.map((item) => {
              return (
                <div key={item.id} className="form-group col-md-6">
                  <label>{item.label}</label>
                  <input
                    type={item.type}
                    className="form-control"
                    id={item.id}
                    placeholder={item.placeholder}
                  />
                </div>
              );
            })}
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>{t(key.citKey)}</label>
              <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="form-group col-md-4">
              <label>{t(key.staKey)}</label>
              <select id="inputState" className="form-control">
                <option selected>{t(key.choose)}</option>
                <option>...</option>
              </select>
            </div>
            <div className="form-group col-md-2">
              <label>{t(key.zipKey)}</label>
              <input type="text" className="form-control" id="inputZip" />
            </div>
          </div>
          <div className="form-group">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label">{t(key.checkKey)}</label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            {t(key.sigKey)}
          </button>
        </form>
      </div>
    </div>
  );
};

export default TrialSection;

import React from "react";
import { useTranslation } from "react-i18next";
import key from "../locales/Key/key.json";

const SnapSectionCard = ({ item }) => {
  const { t } = useTranslation();
  return (
    <div className="col-lg-6 col-sm-12 d-flex justify-content-center">
      <div className="card " style={{ width: "18rem" }}>
        <div className="card-body d-flex flex-column align-items-center">
          <h5 className="card-title ">{item.title}</h5>
          <p className="card-text text-center">{item.text}</p>
          <a href="#" className="btn btn-primary">
            {t(key.go_key)}
          </a>
        </div>
      </div>
    </div>
  );
};

export default SnapSectionCard;

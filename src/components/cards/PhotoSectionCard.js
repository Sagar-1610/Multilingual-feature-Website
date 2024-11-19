import React from "react";
import key from "../locales/Key/key.json";
import { useTranslation } from "react-i18next";

const PhotoSectionCard = ({ item }) => {
  const { t } = useTranslation();
  return (
    <div className="col-lg-4 col-sm-12 ">
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={item.url} alt="Card image cap" />
        <div className="card-body text-center">
          <h5 className="card-title">{t(key.ctkey)}</h5>
          <p className="card-text">{item.text}</p>
          <a href="#" className="btn btn-primary">
            {t(key.go_key)}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PhotoSectionCard;

import React from "react";
import { useTranslation } from "react-i18next";

const MediaSectionCard = ({ item }) => {
  const { t } = useTranslation();
  return (
    <div className="card-body">
      <h5 className="card-title text-center text-sm-left">{item.title}</h5>
      <p className="card-text text-center text-sm-left">{item.text}</p>
    </div>
  );
};

export default MediaSectionCard;

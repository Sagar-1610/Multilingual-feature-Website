import React, { useContext, useTransition } from "react";
import PhotoSectionCard from "../cards/PhotoSectionCard";
import { useTranslation } from "react-i18next";
import key from "../locales/Key/key.json";

const PhotoSection = () => {
  const { t } = useTranslation();

  const MediaSectionData = [
    {
      id: 1,
      title: t(key.Spekey),
      text: t(key.supkey),
      url: "https://img.freepik.com/free-photo/digital-art-ai-technology-background_23-2151719594.jpg?t=st=1728102747~exp=1728106347~hmac=9d75c175adffefae8c6ba9848f86349ece052c187b7f77ab0a87de156fb6c257&w=1060",
    },
    {
      id: 2,
      title: t(key.Spekey),
      text: t(key.supkey),
      url: "https://img.freepik.com/free-photo/digital-art-ai-technology-background_23-2151719631.jpg?t=st=1728102868~exp=1728106468~hmac=2cba2c1b4f688aaf8b9eb54d1df31890002674fd5dbe32d2a49fe5622ba3ce2b&w=1060",
    },
    {
      id: 3,
      title: t(key.Spekey),
      text: t(key.supkey),
      url: "https://img.freepik.com/free-photo/digital-art-ai-technology-background_23-2151719633.jpg?t=st=1728102934~exp=1728106534~hmac=ac5f5efccb6d17b6b2a75bf7dd97165c91c1926ed0c073f7303e92b2b03b8598&w=1060",
    },
  ];

  return (
    <div className="pb-4 w-full">
      <div className="text-center h2 pt-4 ">{t(key.stkey)}</div>
      <div className="text-center h6 pt-2">{t(key.loremKey)}</div>

      <div className="container-fluid pt-5 d-flex align-items-center justify-content-center">
        <div className="row ">
          {MediaSectionData.map((item) => {
            return (
              <div className="col-lg-4 col-sm-12 col-md-4 m-md-auto">
                <PhotoSectionCard item={item} key={item.id} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PhotoSection;

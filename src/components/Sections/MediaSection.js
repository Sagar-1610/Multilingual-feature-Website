import React, { useContext } from "react";
import MediaSectionCard from "../cards/MediaSectionCard";
import { useTranslation } from "react-i18next";
import key from "../locales/Key/key.json";

const MediaSection = () => {
  const { t } = useTranslation();

  const Mdata = [
    {
      id: 1,
      title: t(key.Spekey),
      text: t(key.supkey),
    },
    {
      id: 2,
      title: t(key.Spekey),
      text: t(key.supkey),
    },
    {
      id: 3,
      title: t(key.Spekey),
      text: t(key.supkey),
    },
    {
      id: 4,
      title: t(key.Spekey),
      text: t(key.supkey),
    },
  ];

  return (
    <div className="w-full">
      <div className="text-center h3 pt-4 pb-4">{t(key.Mkey)}</div>
      <div className="text-center h6 pb-4">{t(key.loremKey)}</div>
      <div className="fluid-container">
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            {Mdata.map((item) => {
              return <MediaSectionCard key={item.id} item={item} />;
            })}
          </div>
          <div className="col-lg-6 col-sm-12">
            <img
              className="img-fluid p-4"
              src="https://img.freepik.com/free-photo/modern-business-buildings-financial-district_1359-346.jpg?t=st=1728103003~exp=1728106603~hmac=aa257b24b5d6a917f8deb14971147374837298002b7d65fff2c9d34195344266&w=900"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaSection;

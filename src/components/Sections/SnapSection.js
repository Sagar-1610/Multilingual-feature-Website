import React from "react";
import SnapSectionCard from "../cards/SnapSectionCard";
import { useTranslation } from "react-i18next";
import key from "../locales/Key/key.json";

const SnapSection = () => {
  const { t } = useTranslation();
  const Sdata = [
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

  const group1 = Sdata.slice(0, 2);
  const group2 = Sdata.slice(2, 4);

  return (
    <div className="w-full">
      <div className="pt-5 pb-5 display-4 text-center font-weight-bold underline-text">
        {t(key.Lkey)}
      </div>

      <div className="row">
        {group1.map((item) => {
          return <SnapSectionCard item={item} key={item.id} />;
        })}
      </div>

      <div className="row pt-5  pb-5">
        {group2.map((item) => {
          return <SnapSectionCard item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default SnapSection;

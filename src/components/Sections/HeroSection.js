import React from "react";
import key from "../locales/Key/key.json";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full">
      <div className="card text-white ">
        <img
          className="card-img"
          src="https://img.freepik.com/free-photo/woman-typing-laptop-with-cup-coffee-plants-background_9975-24604.jpg?t=st=1728102556~exp=1728106156~hmac=f03db4d6dbafd10f6097579c8db3fc264593a009a8f6f28c947dd5c94e7990a8&w=1060"
          alt="Card image"
        />
        <div className="card-img-overlay">
          <h5 className="card-title text-center">{t(key.ctkey)}</h5>
          <p className="card-text text-center">{t(key.wikey)}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

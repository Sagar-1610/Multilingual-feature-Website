import React, { useContext } from "react";
import { GlobalContext } from "../ContextApi/Context";
import { useTranslation } from "react-i18next";
import key from "../locales/Key/key.json";

const Navbar = () => {
  const { languages, ChangeLanguages, lang } = useContext(GlobalContext);
  const { t } = useTranslation();

  const stored = languages.find((item) => item.code === lang)?.lang;
  const url = languages.find((item) => item.code === lang)?.url;
  return (
    <div className="w-full">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <a className="navbar-brand">{t(key.Nkey)}</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mr-auto">
            {[t(key.Fkey), t(key.PrKey), t(key.Cokey), t(key.SuKey)].map(
              (item, index) => {
                return (
                  <li key={index} className="nav-item">
                    <a className="nav-link">{item}</a>
                  </li>
                );
              }
            )}
            <li className="nav-item dropdown ">
              <a
                className="nav-link dropdown-toggle pointer-event d-flex align-items-center justify-content-center "
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  src={url||"https://flagsapi.com/US/flat/32.png"}
                  alt=""
                  className="img-fluid"
                  style={{ maxWidth: "30px", height: "auto" }}
                />
                <p className="ml-2 mb-0">{stored||"English"}</p>
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                {languages.map((item) => {
                  return (
                    <div className="d-flex p-2 align-items-center">
                      <button
                        key={item.code}
                        onClick={() => ChangeLanguages(item.code)}
                        className="dropdown-item d-flex gap-3"
                      >
                        <img src={item.url} alt="" className="mr-2" />
                        {item.lang}
                      </button>
                    </div>
                  );
                })}
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <button className="btn btn-outline-primary mr-2">
              {t(key.lokey)}
            </button>
            <button className="btn btn-primary my-2 my-sm-0" type="submit">
              {t(key.Rkey)}
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

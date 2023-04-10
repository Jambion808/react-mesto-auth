import React from "react";
import headerLogo from "../images/Logo/Vector.svg";
import { Link, Route, Routes } from "react-router-dom";

function Header({ onLogout, userEmail }) {
  return (
    <header className="header">
      <img alt="Логотип проекта:Место" className="logo" src={headerLogo} />

      <Routes>
        <Route
          path="/"
          element={
            <div className="header__conteiner">
              <p className="header__email">{userEmail}</p>
              <Link to="/sign-in" className="header__exit" onClick={onLogout}>
                Выйти
              </Link>
            </div>
          }
        />

        <Route
          path="/sign-in"
          element={
            <Link to="/sign-up" className="header__link">
              Регистрация
            </Link>
          }
        />

        <Route
          path="/sign-up"
          element={
            <Link to="/sign-in" className="header__link">
              Войти
            </Link>
          }
        />
      </Routes>
    </header>
  );
}

export default Header;

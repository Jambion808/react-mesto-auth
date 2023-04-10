import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = ({ handleRegister }) => {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let { email, password } = formValue;
    handleRegister(email, password);
  };

  return (
    <>
      <div className="ingress">
        <h2 className="ingress__title">Регистрация</h2>
        <form className="ingress__form" onSubmit={handleSubmit}>
          <input
            className="ingress__input"
            placeholder="Email"
            type="email"
            required
            name="email"
            onChange={handleChange}
            value={formValue.email}
            minLength={2}
            maxLength={30}
          />

          <input
            className="ingress__input"
            placeholder="Пароль"
            type="password"
            required
            name="password"
            onChange={handleChange}
            value={formValue.password}
            minLength={2}
            maxLength={30}
          />

          <button className="ingress__button" type="submit">
            Зарегистрироваться
          </button>
        </form>
        <Link className="ingress__link" to="sign-up">
          Уже зарегистрированы? Войти
        </Link>
      </div>
    </>
  );
};

export default Register;

import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onUpdateUser, onClose}) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [about, setAbout] = React.useState('');

  React.useEffect(() => {
    setName(currentUser.name);
    setAbout(currentUser.about);
  }, [currentUser]);

  function handleOnChangeName(evt) {
    setName(evt.target.value);
  }

  function handleOnChangeAbout(evt) {
    setAbout(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser({
      name: name,
      about: about,
    });
  }

  return (
    <PopupWithForm
      name="popup_profile"
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <>
        <input
          type="text"
          id="name-input"
          className="popup__input popup__input_type_name"
          name="name"
          placeholder="Имя"
          minLength="2"
          maxLength="40"
          required
          value={name || ''}
          onChange={handleOnChangeName}
        />

        <span className="popup__input-error description-input-error"></span>

        <input
          type="text"
          id="description-input"
          className="popup__input popup__input_type_description"
          name="about"
          placeholder="Вид деятельности"
          required
          value={about || ''}
          onChange={handleOnChangeAbout}
        />

        <span className="popup__input-error description-input-error"></span>
      </>
    </PopupWithForm>
  );
}

export default EditProfilePopup;

import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [place, setPlace] = React.useState("");
  const [link, setLink] = React.useState("");

  React.useEffect(() => {
    setPlace("");
    setLink("");
  }, [isOpen]);

  function handleOnChangePlace(e) {
    setPlace(e.target.value);
  }

  function handleOnChangeLink(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: place,
      link: link,
    });
  }

  return (
    <PopupWithForm
      name="popup_card"
      title="Новое место"
      buttonText="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <>
        <input
          type="text"
          id="place-input"
          className="popup__input popup__input_type_place"
          name="name"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          required
          value={place}
          onChange={handleOnChangePlace}
        />

        <span className="popup__input-error place-input-error"></span>

        <input
          type="url"
          id="url-input"
          className="popup__input popup__input_type_url"
          name="link"
          placeholder="Ссылка на картинку"
          required
          minLength="2"
          maxLength="200"
          value={link}
          onChange={handleOnChangeLink}
        />

        <span className="popup__input-error url-input-error"></span>
      </>
    </PopupWithForm>
  );
}

export default AddPlacePopup;

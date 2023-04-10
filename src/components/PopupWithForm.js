import React from 'react';


function PopupWithForm({name, title, isOpen, onSubmit, buttonText, children, onClose}) {
  return (
    <div className={`popup popup_${name} ${isOpen ? 'popup_opened' : ''}`}>
    <div className="popup__container">
      <h2 className="popup__title">{title}</h2> 
      <form className="popup__form" onSubmit={onSubmit}>
        {children}
        <button type="submit" className="popup__submit">{buttonText}</button>
      </form>
      <button type="button" className="popup__close" onClick={onClose}></button>
    </div>
  </div>
  );
}

export default PopupWithForm;
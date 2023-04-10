import React from 'react';


function ImagePopup(props) {
  return (
<div className={`popup popup_image ${props.card.link ? 'popup_opened' : ''}`} >
    <div className="popup__image-container">
      <img className="popup__image-photo" src={props.card.link} alt={props.card.name} />
      <p className="popup__image-description">{props.card.name}</p>
      <button
        className="popup__close popup__image-close"
        type="button" onClick={props.onClose}
      ></button>
    </div>
  </div>
  );
}

export default ImagePopup;
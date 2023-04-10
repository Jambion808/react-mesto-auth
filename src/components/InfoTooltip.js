import closeIcon from "../images/Close-Icon.png";
import failImage from "../images/Register-fail.png";
import approvingImage from "../images/Register-ok.png";

function InfoTooltip({ name, isOpen, onClose, isSucces }) {
  return (
    <div className={`popup popup_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button type="button" className="popup__close" onClick={onClose}>
          <img
            className="popup__close-icon"
            src={closeIcon}
            alt="Закрыть"
          ></img>
        </button>
        <img
          className="popup__answer-image"
          src={isSucces ? approvingImage : failImage}
          alt="Ошибка"
        ></img>
        <p className="popup__answer-text">
          {isSucces
            ? "Вы успешно зарегистрировались!"
            : "Что-то пошло не так! Попробуйте ещё раз."}
        </p>
      </div>
    </div>
  );
}

export default InfoTooltip;

import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({isOpen, onUpdateAvatar, onClose}){
    const avatarRef = React.useRef();

    React.useEffect(()=>{
        avatarRef.current.value = '';
    },[isOpen])

    function handleSubmit(e) {
        e.preventDefault();
      
        onUpdateAvatar({
          avatar: avatarRef.current.value
        });
      } 

return(
    <PopupWithForm
    name="popup_avatar"
    title="Обновить аватар"
    buttonText="Сохранить"
    isOpen={isOpen}
    onClose={onClose}
    onSubmit={handleSubmit}
  >
    <>
      <input
        type="url"
        id="link-input-avatar"
        className="popup__input popup__input_type_avatar"
        name="avatar"
        placeholder="Ссылка на аватар"
        required
        ref={avatarRef}
      />
      <span className="popup__input-error link-input-avatar-error"></span>
    </>
  </PopupWithForm>
)
}
export default EditAvatarPopup;
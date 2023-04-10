import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Card({card, onCardClick, onDeleteClick, onLikeClick}) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = ( 
    `card__like ${isLiked && 'card__like_active'}` 
  );

  function handleClick() {
    onCardClick(card);
  }  

  function handleLikeClick(){
    onLikeClick(card);
  }

  function handleDeleteClick(){
    onDeleteClick(card)
  }


// добавляем онКлик в 19 и 23 строку handleDeleteClick и handleLikeClick
  return (
    <div className="card">
      <img className="card__image" src={card.link} alt={card.name} onClick={handleClick}/>
      {isOwn && <button className='card__delete' onClick={handleDeleteClick}  type="button"/>}
      <div className="card__info">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-container">
          <button className={cardLikeButtonClassName} type="button" onClick={handleLikeClick}></button>
          <p className="card__like-number">{card.likes.length}</p>
        </div>
 
      </div>
    </div>
  );
}

export default Card;

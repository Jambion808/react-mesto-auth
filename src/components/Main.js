import React from "react";
// import api from "../utils/Api.js";
import Card from "./Card.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Main({cards, onEditAvatar, onEditProfile, onAddPlace, onCardClick, onLikeClick, onDeleteClick}) {
  const currentUser = React.useContext(CurrentUserContext);
  // const [userName, setUserName] = React.useState("");
  // const [userDescription, setUserDescription] = React.useState("");
  // const [userAvatar, setUserAvatar] = React.useState("");
  // const [cards, setCards] = React.useState([]);

  // React.useEffect(() => {
  //     api.getInfoAboutUser() 
  //       .then((userData) => {
  //         setUserName(userData.name);
  //         setUserDescription(userData.about);
  //         setUserAvatar(userData.avatar);
          
  //       })

  //       .catch((err) => {
  //         console.log(`Ошибка ${err}`);
  //       })
  //       api.getCardsUser().then((cardsUser)=> {
  //         setCards(cardsUser
  //           .map((data)=>({
  //           name: data.name,
  //           link: data.link,
  //           idCard: data._id,
  //           likes: data.likes
  //         })))
  //       })
  //       .catch((err) => {
  //         console.log(`Ошибка ${err}`);
  //       })
  //   }, []);

  return (
    <div className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <button
            type="button"
            className="profile__avatar-button"
            onClick={onEditAvatar}
          >
            <img
              src={currentUser.avatar}
              alt="Аватар профиля"
              className="profile__avatar"
            />
          </button>
        </div>

        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button
            className="profile__edit"
            type="button"
            onClick={onEditProfile}
          ></button>
          <p className="profile__description">{currentUser.about}</p>
        </div>
        <button
          className="profile__add-content"
          type="button"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="element">
        {cards.map((card)=>(
          <Card 
            card={card}
            key={card._id}
            link={card.link}
            name={card.name}
            likes={card.likes}
            onCardClick={onCardClick}
            onDeleteClick={onDeleteClick}
            onLikeClick={onLikeClick}
            />
        ))}
      </section>
    </div>
  );
}

export default Main;

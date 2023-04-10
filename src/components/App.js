import React, {useEffect, useState} from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import ImagePopup from "./ImagePopup.js";
import PopupWithForm from "./PopupWithForm.js";
import EditProfilePopup from "./EditProfilePopup.js";
import EditAvatarPopup from "./EditAvatarPopup.js";
import AddPlacePopup from "./AddPlacePopup.js";

import api from "../utils/Api.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import { Routes, Route, Navigate } from "react-router-dom";
import  ProtectedRoute  from "./ProtectedRoute.js"
import Login from "./Login.js";
import Register from "./Register.js";
import * as auth from "../utils/Auth.js"
import InfoTooltip from "./InfoTooltip.js";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [isInfoTooltip, setIsInfoToottip] = useState(false);
  const [isSucces, setIsSucces] = useState(false)

  // useEffect(() => {
  //   handleTokenCheck()
  // }, [])

  // function handleTokenCheck

  


  function handleLogin() {
    setLoggedIn(true);
  };

  // function handleRegister(email) {
  //   setUserEmail(email);
  // };

  React.useEffect(() => {
    api
      .getInfoAboutUser()
      .then((userData) => setCurrentUser(userData))

      .catch((err) => {
        console.log(`Ошибка ${err}`);
      });

    api
      .getCardsUser()
      .then((cardsUser) => {
        setCards(
          cardsUser.map((card) => ({
            name: card.name,
            link: card.link,
            _id: card._id,
            likes: card.likes,
            owner: card.owner,
          }))
        );
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`);
      });
  }, []);

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    api
      .setLikes(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`);
      });
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`);
      });
  }

  function handleUpdateUser(upUserInfo) {
    api
      .setInfoAboutUser(upUserInfo)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`);
      });
  }

  function handleUpdateAvatar(upAvatar) {
    api
      .setUserAvatarProfile(upAvatar)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`);
      });
  }

  function handleAddPlaceSubmit(cardsUser) {
    api
      .setAddUserCard(cardsUser)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />

        <Routes>

          <Route path="/sign-up" element={<Register />}></Route>

          <Route
            path="/sign-in"
            element={<Login handleLogin={handleLogin}/>}
          />

          <Route
            path="*"
            element={
              loggedIn ? <Navigate to="/" /> : <Navigate to="/sign-in" />
            }
          />

          <Route
            path="/"
            element={
              <Main
                onEditAvatar={setIsEditAvatarPopupOpen}
                onEditProfile={setIsEditProfilePopupOpen}
                onAddPlace={setIsAddPlacePopupOpen}
                onCardClick={setSelectedCard}
                onLikeClick={handleCardLike}
                onDeleteClick={handleCardDelete}
                cards={cards}
                loggedIn={loggedIn}
                // component={Main}
              />
            }
          />
        </Routes>

        <Footer />

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />

        <PopupWithForm
          name="popup_delete"
          title="Вы уверены?"
          buttonText="Да"
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

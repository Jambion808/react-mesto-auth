class Api {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getInfoAboutUser() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    }).then(processResponse);
  }

  getCardsUser() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    }).then(processResponse);
  }

  setInfoAboutUser(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then(processResponse);
  }

  setAddUserCard(item) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: item.name,
        link: item.link,
      }),
    }).then(processResponse);
  }

  setLikes(id, isLiked) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`,{
        method: isLiked ? "PUT" :"DELETE",
        headers: this._headers,
      }
    ).then(processResponse);
  }

  deleteLike(id){
    return fetch(
      `${this._baseUrl}/cards/${id}/likes`,
      {
        method: "DELETE",
        headers: this._headers,
      }
    ).then(processResponse);
  }

  deleteCard(id){
    return fetch(
      `${this._baseUrl}/cards/${id}`,
      {
        method: "DELETE",
        headers: this._headers,
      }
    ).then(processResponse);
  }

  setUserAvatarProfile(data) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar
      }),
    }).then(processResponse);
  }


}

const processResponse = (res) => {
  if (res.ok) {
    const response = res.json();
    // console.log(response);
    return response;
  }
  return Promise.reject(new Error("Ошибка"));
};

const api = new Api({ 
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-60",  
  headers: { 
    authorization: "cc77f94d-b1ef-42c0-9cc3-7185b7071d0e", 
    "Content-Type": "application/json", 
  }, 
}); 

export default api


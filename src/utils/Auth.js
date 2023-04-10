export const baseUrl = 'https://auth.nomoreparties.co'

const processResponse = (res) => {
    if (res.ok) {
      const response = res.json();
      return response;
    }
    return Promise.reject(new Error("Ошибка"));
  };

export const register = ({email, password}) => {
    return fetch (`${baseUrl}/signup`,{
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json" 
        },
        body: JSON.stringify({email, password})
    }).then(processResponse);
};

export const login = ({email, password}) => {
    return fetch (`${baseUrl}/signin`,{
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json" 
        },
        body: JSON.stringify({email, password})
    }).then(processResponse);
};

export const checkToken = (token) => {
    return fetch (`${baseUrl}/users/me`,{
        method: 'GET',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${token}`
        }
    }).then(processResponse);
};
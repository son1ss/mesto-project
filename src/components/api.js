const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-24',
  headers: {
    authorization: 'a43877ea-9dd0-4042-ac70-8f9f2817a645',
    'Content-Type': 'application/json'
  }
}

const getResponseData = (res) => { 
  if (res.ok) return res.json()
  return Promise.reject(`Ошибка ${res.status}`)
}

export const getCards = () => 
fetch(`${config.baseUrl}/cards`, {
  headers: config.headers
}).then(getResponseData)

export const getUser = () => 
fetch(`${config.baseUrl}/users/me`, {
  headers: config.headers
}).then(getResponseData)

export const editUser = (user) => 
fetch(`${config.baseUrl}/users/me`, {
  method: 'PATCH',
  headers: config.headers,
  body: JSON.stringify(user)
}).then(getResponseData)

export const addCard = (card) => 
fetch(`${config.baseUrl}/cards`, {
  method: 'POST',
  headers: config.headers,
  body: JSON.stringify(card)
}).then(getResponseData)

export const removeCard = (id) => 
fetch(`${config.baseUrl}/cards/${id}`, {
  method: 'DELETE',
  headers: config.headers
}).then(response => {
  if (!response.ok) return Promise.reject(`Ошибка ${response.status}`)
})

export const addLike = (id) => 
fetch(`${config.baseUrl}/cards/likes/${id}`, {
  method: 'PUT',
  headers: config.headers
}).then(getResponseData)

export const removeLike = (id) => 
fetch(`${config.baseUrl}/cards/likes/${id}`, {
  method: 'DELETE',
  headers: config.headers
}).then(getResponseData)

export const editAvatar = (avatar) =>
fetch(`${config.baseUrl}/users/me/avatar`, {
  method: 'PATCH',
  headers: config.headers,
  body: JSON.stringify({avatar: avatar})
}).then(getResponseData)
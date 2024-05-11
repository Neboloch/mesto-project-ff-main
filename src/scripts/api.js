import {checkResponse} from "./utils";
// Токен: a7cbffd2-9816-4609-b789-b2caed9acffd
// https://nomoreparties.co/v1/wff-cohort-12

// Шаблон fetch
const apiConfig = {
  baseUrl: 'https://nomoreparties.co/v1/wff-cohort-12',
  headers: {
    authorization: 'a7cbffd2-9816-4609-b789-b2caed9acffd',
    'Content-Type': 'application/json'
  }
}

// Создание запросов
const request = async (endpoint, options) => {
  return fetch(`${apiConfig.baseUrl + endpoint}`, options).then(checkResponse)
}

// Запрос карточек
export const getInitialCards = () => {
  return request('/cards', {headers: apiConfig.headers})
}

// Запрос данных профиля
export const getUserData = () => {
  return request('/users/me', {headers: apiConfig.headers})
}

// Запрос обновления данных профиля
export const patchUserData = (name, job) => {
  return request('/users/me', {
    method: 'PATCH',
    headers: apiConfig.headers,
    body: JSON.stringify({
      name: name,
      about: job
    })
  })
}

// Запрос обновления аватара
export const patchUserAvatar = (link) => {
  return request('/users/me/avatar', {
    method: 'PATCH',
    headers: apiConfig.headers,
    body: JSON.stringify({
      avatar: link
    })
  })
}

// Запрос новой карточки
export const postNewCard = (namePlace, link) => {
  return request('/cards', {
    method: 'POST',
    headers: apiConfig.headers,
    body: JSON.stringify({
      name: namePlace,
      link: link
    })
  })
}

// Запрос удаления своей карточки
export const deleteCard = (cardId) => {
  return request(`/cards/${cardId}`, {
    method: 'DELETE',
    headers: apiConfig.headers,
  })
}

// Запрос лайка карточки
export const putLikeCard = (cardId) => {
  return request(`/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: apiConfig.headers,
  })
}

// Запрос отмены лайка
export const deleteLikeCard = async (cardId) => {
  return request(`/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: apiConfig.headers,
  })
}
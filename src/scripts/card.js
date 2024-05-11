// Запросы апи
import { putLikeCard, deleteLikeCard, deleteCard } from './api.js';

// Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// Создание карточки
export const createCard = (cardData, userData, functionData) => {
  const cardContent = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardContent.querySelector('.card__image');
  const cardTitle = cardContent.querySelector('.card__title');
  const delButton = cardContent.querySelector('.card__delete-button');
  const likeButton = cardContent.querySelector('.card__like-button');
  const likeScore = cardContent.querySelector('.like__score');

  // Проверка соответствий 
  if (userData._id !== cardData.owner._id) {
    delButton.classList.add('card__delete-button-disabled');
  } else {
    delButton.addEventListener('click', () => functionData.openDeleteCardPopup(cardContent, cardData._id));
  }

  const isLiked = cardData.likes.some(el => el._id === userData._id);
  if (isLiked) {
    likeButton.classList.add('card__like-button_is-active');
  }

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;
  likeScore.textContent = cardData.likes.length;
  likeButton.addEventListener('click', () => functionData.likeImg(likeButton, cardData, likeScore));
  cardImage.addEventListener('click', () => functionData.openImageModal(cardData));

  return cardContent;
};

// Удаление карточки 
export const submitDeleteCard = (data, popup, closeModal) => {
  deleteCard(data.cardId)
    .then(() => {
      data.card.remove();
      closeModal(popup);
    })
    .catch(err => {
      console.log(`Ошибка удаления карточки : ${err}`);
    });
};

// Лайк карточки 
export const likeImg = (button, cardData, likeScore) => {
  const isLiked = button.classList.contains('card__like-button_is-active');
  const likeMethod = isLiked ? deleteLikeCard : putLikeCard;

  likeMethod(cardData._id)
    .then(data => {
      likeScore.textContent = data.likes.length;
      button.classList.toggle('card__like-button_is-active');
    })
    .catch(err => console.log(`Ошибка ${isLiked ? 'убирания' : 'лайка'} карточки : ${err}`));
};

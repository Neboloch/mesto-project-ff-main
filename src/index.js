//index.js
//импорт
import './pages/index.css';
import {createCard, submitDeleteCard, likeImg} from "./scripts/card.js";
import {openModal, closeModal} from './scripts/modal.js';
import {enableValidation, resetValidation, disabledButton} from './scripts/validation.js';
import { getInitialCards, getUserData, patchUserData, patchUserAvatar, postNewCard} from './scripts/api.js';
import {handleSubmit} from './scripts/utils.js';

//общ const
let user;
let functionData = {};
let markedCard = {};
const submitData = {closeModal, disabledButton, validationConfig: {
  fieldsetSelector: ".form__set",
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button-disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
}};
const popups = document.querySelectorAll('.popup')

// DOM
const cardContainer = document.querySelector('.places__list');

// Ред профиля
const editButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_type_edit');
const profileForm = document.forms.edit_profile;
const nameInput = profileForm.elements.name;
const jobInput = profileForm.elements.description;

// Данные профиля
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const profileAvatar = document.querySelector('.profile__image')

// Аватар
const popupAvatarEdit = document.querySelector('.popup_type_edit-avatar');
const editAvatarButton = document.querySelector('.profile__avatar-button');
const avatarForm = document.forms.new_avatar;
const avatarLinkInput = avatarForm.elements.avatar_link;

// Удалить карточку
const popupCardDelete = document.querySelector('.popup_type_delete-card');
const сardDeleteForm = document.forms.delete_card;

// Добавить карточку
const popupNewСard = document.querySelector('.popup_type_new-card');
const addButton = document.querySelector('.profile__add-button');
const addCardForm = document.forms.new_place;
const namePlaceInput = addCardForm.elements.place_name;
const linkInput = addCardForm.elements.link;

// Большие карточки 
const popupBigPicture = document.querySelector('.popup_type_image');
const popupImage = popupBigPicture.querySelector('.popup__image');
const popupCaption = popupBigPicture.querySelector('.popup__caption');

// Fetch запросы 
Promise.all([getInitialCards(), getUserData()])
  .then(([cardList, userData]) => {
    user = userData;
    functionData = {openDeleteCardPopup, likeImg, openImageModal};
    cardList.forEach(cardData => cardContainer.append(createCard(cardData, userData, functionData)));
    profileTitle.textContent = userData.name;
    profileDescription.textContent = userData.about;
    profileAvatar.style.backgroundImage = `url(${userData.avatar})`;
  })
  .catch(([cardList, userData]) => {
    console.log(`ошибка получения данных: ${cardList} ${userData}`);
  });

// Вызов валидации
enableValidation(submitData.validationConfig);

// Открытие карточки 
const openImageModal = (cardData) => {
  popupImage.src = cardData.link;
  popupImage.alt = cardData.name;
  popupCaption.textContent = cardData.name;
  openModal(popupBigPicture);
}

// Открытие редактирования профиля
const openEditProfilePopup = (popup) => {
  resetValidation(popup, submitData.validationConfig);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  openModal(popup);
}

// Отправка профиля
const handleEditProfileSubmit= (evt) => {
  function makeRequest() {
    return patchUserData(nameInput.value, jobInput.value).then((userData) => {
      profileTitle.textContent = userData.name;
      profileDescription.textContent = userData.about;
    });
  }
  handleSubmit(makeRequest, evt, popupProfile, submitData);
}

// Отправка аватара
const handleEditAvatarSubmit= (evt) => {
  function makeRequest() {
    return patchUserAvatar(avatarLinkInput.value).then((data) => {
      profileAvatar.style.backgroundImage = `url(${data.avatar})`;
    });
  }
  handleSubmit(makeRequest, evt, popupAvatarEdit, submitData);
}

// Отправка новой карточки
const handleAddNewCard= (evt) => {
  function makeRequest() {
    return postNewCard(namePlaceInput.value, linkInput.value).then((cardData) => {
      cardContainer.prepend(createCard(cardData, user, functionData));
    });
  }
  handleSubmit(makeRequest, evt, popupNewСard, submitData);
}

// Открыть удаление карточки
const openDeleteCardPopup = (card, cardData) => {
  markedCard.card = card;
  markedCard.cardId = cardData
  openModal(popupCardDelete);
}

// Слушатель ред
editButton.addEventListener('click', () => openEditProfilePopup(popupProfile));
profileForm.addEventListener('submit', handleEditProfileSubmit);

// Слушатель аватара
editAvatarButton.addEventListener('click', () => openModal(popupAvatarEdit));
avatarForm.addEventListener('submit', handleEditAvatarSubmit);

// Слушатель карточки
addButton.addEventListener('click', () => openModal(popupNewСard));
addCardForm.addEventListener('submit', handleAddNewCard);

// Слушатель удалить 
сardDeleteForm.addEventListener('submit', () => submitDeleteCard(markedCard, popupCardDelete, closeModal));

// Слушатель закрытия попапов
popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_is-opened')) {
        closeModal(evt.target)
      }
      if (evt.target.classList.contains('popup__close')) {
        closeModal(popup)
      }
  })
})

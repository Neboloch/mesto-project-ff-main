
import './pages/index.css';
import {initialCards} from "./scripts/cards";
import {createCard, deleteCard, likeImg} from "./scripts/card";
import {openModal, closeModal, closeModalOverlay} from './scripts/modal';

// DOM узлы
const cardContainer = document.querySelector('.places__list');

// Инициализация 
initialCards.forEach(cardData => cardContainer.append(createCard(cardData, deleteCard, likeImg, openImageModal)));

//  редактирования профиля
const editButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_type_edit');
const popupProfileClose = popupProfile.querySelector('.popup__close');
const profileForm = document.forms.edit_profile;
const nameInput = profileForm.elements.name;
const jobInput = profileForm.elements.description;

// Данные профиля
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

// Добавления карточки
const popupNewСard = document.querySelector('.popup_type_new-card');
const addButton = document.querySelector('.profile__add-button');
const popupNewСardClose = popupNewСard.querySelector('.popup__close');
const addCardForm = document.forms.new_place;
const namePlaceInput = addCardForm.elements.place_name;
const linkInput = addCardForm.elements.link;

// Большая картинка 
const popupBigPicture = document.querySelector('.popup_type_image');
const popupImage = popupBigPicture.querySelector('.popup__image');
const popupCaption = popupBigPicture.querySelector('.popup__caption');
const popupBigPictureClose = popupBigPicture.querySelector('.popup__close');

// Функция открытие карточки  
function openImageModal (cardData) {
  popupImage.src = cardData.link;
  popupImage.alt = cardData.name;
  popupCaption.textContent = cardData.name;
  openModal(popupBigPicture);
}

// Редактирования профиля 
function openEditProfilePopup (popup) {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  openModal(popup);
};

// Отправка формы профиля 
function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  const nameValue = nameInput.value;
  const jobValue = jobInput.value;
  profileTitle.textContent = nameValue;
  profileDescription.textContent = jobValue;
  profileForm.reset();
  closeModal(popupProfile);
}

// Отправка формы карточки
function handleAddNewCard(evt) {
  evt.preventDefault();
  const namePlaceValue = namePlaceInput.value;
  const linkValue = linkInput.value;
  const newCardObj = [];
  newCardObj['name'] = namePlaceValue;
  newCardObj['link'] = linkValue;
  cardContainer.prepend(createCard(newCardObj, deleteCard, likeImg, openImageModal));
  addCardForm.reset();
  closeModal(popupNewСard);
}

// Окно редактирование
editButton.addEventListener('click', () => openEditProfilePopup(popupProfile));
profileForm.addEventListener('submit', handleEditProfileSubmit);
popupProfileClose.addEventListener('click', () => closeModal(popupProfile));
popupProfile.addEventListener('click', closeModalOverlay);

// Добавления карточки 
addButton.addEventListener('click', () => openModal(popupNewСard));
addCardForm.addEventListener('submit', handleAddNewCard);
popupNewСard.addEventListener('click', closeModalOverlay);
popupNewСardClose.addEventListener('click', () => closeModal(popupNewСard));

// Открытая картинка 
popupBigPicture.addEventListener('click', closeModalOverlay);
popupBigPictureClose.addEventListener('click', () => closeModal(popupBigPicture));
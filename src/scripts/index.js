import '../pages/index.css';
import {modalWindows} from './modal.js';
import {initialCards} from './cards.js';


// Темплейт
const cardTemplate = document.querySelector('#card-template').content; 

//  DOM 
const cardsOnPage = document.querySelector('.places__list');

// создания карточки
function createCard(place, deleteFunction, likeFunction){
    const cardItem = cardTemplate.querySelector('.card').cloneNode(true);
    const deleteButton = cardItem.querySelector('.card__delete-button');
    const cardImage = cardItem.querySelector('.card__image');
    const cardTitle = cardItem.querySelector('.card__title');
    cardImage.src = place.link;
    cardImage.alt = 'Фотография с места - ' + place.name;
    cardTitle.textContent = place.name;
    deleteButton.addEventListener('click', deleteFunction);
    return cardItem;
};

// удаления карточки
function deleteCard(evt){
    const cardToRemove = evt.target.closest('.card');
    cardToRemove.remove();
}

// лайк

function likeCard(evt) {
    const currentCard = evt.target.closest('.card');
    const cardToLike = currentCard.querySelector('.card__like-button');
    cardToLike.classList.toggle('card__like-button_is-active');
}

cardsOnPage.addEventListener('click', function(evt) {
    if (evt.target.classList.contains('card__like-button')) {
        likeCard(evt);
    }
});

// addCards
function addCards() {
    while (cardsOnPage.firstChild) {
        cardsOnPage.removeChild(cardsOnPage.firstChild);
    }
    initialCards.forEach(function(place) {
        cardsOnPage.appendChild(createCard(place, deleteCard, likeCard)); 
    });
}

//Добавление карточки
function addCardToCardsArray(evt) {
    evt.preventDefault();
    const newPlace = document.forms.newPlace;
    const placeName = newPlace.querySelector('.popup__input_type_card-name');
    const placeLink = newPlace.querySelector('.popup__input_type_url');
    const newCard =     {
        name: placeName.value,
        link: placeLink.value,
    };
    initialCards.unshift(newCard);
    document.querySelector('.popup_type_new-card').style.display = 'none';
    newPlace.reset();
    addCards();
  }


addCards();
newPlace.addEventListener('submit', addCardToCardsArray); 

modalWindows();


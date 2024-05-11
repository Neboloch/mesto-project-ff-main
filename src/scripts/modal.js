// Открытие окна
export const openModal = (popupElement) => {
  popupElement.classList.add('popup_is-opened'); 
  document.addEventListener('keydown', closeModalEscape);
}

//Закрытие окна 
export const closeModal = (popupElement) => {
  popupElement.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', closeModalEscape);
}

// ESC
const closeModalEscape = (event) => {
  if (event.key ==='Escape') {
    const openedPopup = document.querySelector('.popup_is-opened');
    if (openedPopup) {
      closeModal(openedPopup);
    }
  }
}
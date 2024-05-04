// Открыть
export function openModal (popupElement) {
  popupElement.classList.add('popup_is-opened'); 
  document.addEventListener('keydown', closeModalEscape);
}

// Закрыть
export function closeModal (popupElement) {
  popupElement.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', closeModalEscape);
}

// ESC
function closeModalEscape (event) {
  if (event.key ==='Escape') {
    const openedPopup = document.querySelector('.popup_is-opened');
    if (openedPopup) {
      closeModal(openedPopup);
    }
  }
}

// Оверлей  
export function closeModalOverlay (event) {
  if (event.target.classList.contains('popup_is-opened'))
  closeModal(event.target);
}

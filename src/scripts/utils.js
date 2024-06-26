// Проверка ответа
export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.status);
}

// Изменение текста кнопки
const renderLoading = (isLoading, button, buttonText='Сохранить', loadingText='Сохранение...') => {
  if (isLoading) {
    button.textContent = loadingText
  } else {
    button.textContent = buttonText
  }
}

// Универсальная отправка
export const handleSubmit = (request, evt, popup, submitData, loadingText = "Сохранение...") => {
  evt.preventDefault();
  const submitButton = evt.submitter;
  const initialText = submitButton.textContent;
  renderLoading(true, submitButton, initialText, loadingText);
  request()
    .then(() => {
      evt.target.reset(submitData.disabledButton(submitButton, submitData.validationConfig));
      submitData.closeModal(popup);
    })
    .catch((err) => {
      console.error(`Ошибка: ${err}`);
    })
    .finally(() => {
      renderLoading(false, submitButton, initialText);
    });
}

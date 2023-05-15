import './pages/index.css';

import { openPopup, closePopup } from './components/modal'
import { renderCard, generateCard } from './components/card'
import { initialCards,
        addButton,
        editButton,
        profilePopup,
        profileForm,
        popupCloseButtons,
        profileName,
        profileDesc,
        picturePopup,
        pictureForm } from './components/utils'
import { enableValidation } from './components/validate';

initialCards.forEach(item => {
  renderCard(generateCard(item), '.elements__list');
})

editButton.addEventListener('click', () => {
  openPopup(profilePopup);
  profileForm.elements.name.value = profileName.textContent;
  profileForm.elements.description.value = profileDesc.textContent;
})

addButton.addEventListener('click', () => {
  openPopup(picturePopup);
})

profileForm.addEventListener('submit', evt => {
  evt.preventDefault();
  profileName.textContent = profileForm.elements.name.value
  profileDesc.textContent = profileForm.elements.description.value
  closePopup(profilePopup);
})

pictureForm.addEventListener('submit', evt => {
  evt.preventDefault();
  const inputs = {
    name: pictureForm.elements.name.value,
    link: pictureForm.elements.link.value
  }

  renderCard(generateCard(inputs), '.elements__list')

  pictureForm.reset()

  closePopup(picturePopup)
})

popupCloseButtons.forEach(item => {
  item.addEventListener('click', () => {
    closePopup(item.closest('.popup'));
  })
})

enableValidation({
  formSelector: '.popup__forms',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error'
})
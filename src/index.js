import './pages/index.css';

import { openPopup, closePopup } from './components/modal'
import { renderCard, renderInitialCard, generateCard } from './components/card'
import { addButton,
        editButton,
        profilePopup,
        profileForm,
        popupCloseButtons,
        profileName,
        profileDesc,
        picturePopup,
        pictureForm,
        avatarButton,
        avatarPopup,
        avatarForm,
        avatar,
        setLoadingState } from './components/utils'
import { enableValidation, toggleButtonState } from './components/validate';
import * as api from './components/api'

api.getCards().then(cards => {
  cards.forEach(card => {renderInitialCard(generateCard(card))})
}).catch(err => {console.log(err)})

api.getUser().then(user => {
  profileName.textContent = user.name
  profileDesc.textContent = user.about
  avatar.src = user.avatar
}).catch(err => {console.log(err)})

editButton.addEventListener('click', () => {
  openPopup(profilePopup);
  profileForm.elements.name.value = profileName.textContent;
  profileForm.elements.description.value = profileDesc.textContent;
  toggleButtonState(Array.from(profileForm.elements), profilePopup.querySelector('.popup__submit'))
})

addButton.addEventListener('click', () => {
  openPopup(picturePopup);
  toggleButtonState(Array.from(pictureForm.elements), picturePopup.querySelector('.popup__submit'))
})

profileForm.addEventListener('submit', evt => {
  evt.preventDefault();
  const submit = setLoadingState(profileForm);
  api.editUser({
    name: profileForm.elements.name.value,
    about: profileForm.elements.description.value
  }).then(user => {
    profileName.textContent = user.name
    profileDesc.textContent = user.about
  }).catch(err => {console.log(err)})
  .finally(() => {
    closePopup(profilePopup);
    submit.textContent = 'Сохранить'
  })
})

pictureForm.addEventListener('submit', evt => {
  evt.preventDefault();
  const inputs = {
    name: pictureForm.elements.name.value,
    link: pictureForm.elements.link.value
  }
  const submit = setLoadingState(pictureForm);

  api.addCard(inputs)
  .then(card => {renderCard(generateCard(card))})
  .catch(err => {console.log(err)})
  .finally(() => {
    pictureForm.reset()
    closePopup(picturePopup)
    submit.textContent = 'Создать'
  })

})

avatarButton.addEventListener('click', () => {
  openPopup(avatarPopup)
})

avatarForm.addEventListener('submit', e => {
  e.preventDefault();
  const submit = setLoadingState(avatarForm);

  api.editAvatar(avatarForm.elements.link.value)
  .then(user => avatar.src = user.avatar)
  .catch(err => {console.log(err)})
  .finally(() => {
    closePopup(avatarPopup);
    avatarForm.reset()
    submit.textContent = 'Сохранить'
  })
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
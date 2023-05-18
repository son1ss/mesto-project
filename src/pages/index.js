import './index.css';

import { openPopup, closePopup } from '../components/modal'
import { renderCard, renderInitialCard, generateCard } from '../components/card'
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
        setLoadingState } from '../components/utils'
import { enableValidation, toggleButtonState } from '../components/validate';
import * as api from '../components/api'

Promise.all([
  api.getCards(),
  api.getUser()
]).then(([cards, user]) => {
  cards.forEach(card => {renderInitialCard(generateCard(card, user._id))})
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
    closePopup(profilePopup)
  }).catch(err => {console.log(err)})
  .finally(() => {
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
  .then(card => {
    renderCard(generateCard(card))
    closePopup(picturePopup)
  })
  .catch(err => {console.log(err)})
  .finally(() => {
    pictureForm.reset()
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
  .then(user => {
    avatar.src = user.avatar
    closePopup(avatarPopup)
  })
  .catch(err => {console.log(err)})
  .finally(() => {
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
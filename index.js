const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
const addButton = document.querySelector('.profile__add-button');
const editButton = document.querySelector('.profile__edit-button');
const profilePopup = document.querySelector('.popup_type_profile-info');
const profileForm = profilePopup.querySelector('.popup__forms');
const nameInput = profilePopup.querySelector('.popup__input_type_name');
const descInput = profilePopup.querySelector('.popup__input_type_description');
const profileSubmit = profilePopup.querySelector('.popup__submit');
const popupCloseButtons = document.querySelectorAll('.popup__close-button');
const profileName = document.querySelector('.profile__name');
const profileDesc = document.querySelector('.profile__description');
const picturePopup = document.querySelector('.popup_type_add-picture');
const pictureForm = picturePopup.querySelector('.popup__forms');
const picNameInput = picturePopup.querySelector('.popup__input_type_picture-name');
const picLinkInput = picturePopup.querySelector('.popup__input_type_picture-link');
const cardTemplate = document.querySelector('.photo-element').content;
const cardContainer = document.querySelector('.elements__list');
const imagePopup = document.querySelector('.popup_type_show-picture');
const imgLink = imagePopup.querySelector('.popup__image');
const imgCaption = imagePopup.querySelector('.popup__caption');

const openPopup = popup => {
  popup.classList.add('popup_active')
}

const closePopup = popup => {
  popup.classList.remove('popup_active')
}

const generateCard = cardObject => {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__photo').src = cardObject.link;
  cardElement.querySelector('.element__photo').alt = cardObject.name;
  cardElement.querySelector('.element__title').textContent = cardObject.name;
  const likeButton = cardElement.querySelector('.element__like-button');
  likeButton.addEventListener('click', () => {likeButton.classList.toggle('element__like-button_active')});
  cardElement.querySelector('.element__remove').addEventListener('click', () => {
    cardElement.closest('.element').remove();
  })
  const cardImage = cardElement.querySelector('.element__photo');
  cardImage.addEventListener('click', () => {
    openPopup(imagePopup);;
    imgLink.src = cardObject.link;
    imgLink.alt = cardObject.name;
    imgCaption.textContent = cardObject.name;
  })
  return cardElement
}

const renderCard = cardElement => {
  cardContainer.prepend(cardElement)
}

initialCards.forEach(item => {
  renderCard(generateCard(item));
})

editButton.addEventListener('click', () => {
  openPopup(profilePopup);
  nameInput.value = profileName.textContent;
  descInput.value = profileDesc.textContent;
})

profileForm.addEventListener('submit', evt => {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDesc.textContent = descInput.value;
  closePopup(profilePopup);
})

addButton.addEventListener('click', () => {
  openPopup(picturePopup);
})

pictureForm.addEventListener('submit', evt => {
  evt.preventDefault();
  const inputs = {
    name: picNameInput.value,
    link: picLinkInput.value
  }

  renderCard(generateCard(inputs));

  picNameInput.value = '';
  picLinkInput.value = '';

  closePopup(picturePopup);
})

popupCloseButtons.forEach(item => {
  item.addEventListener('click', () => {
    closePopup(item.closest('.popup'));
  })
})
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
const popupClose = document.querySelectorAll('.popup__close-button');
const profileName = document.querySelector('.profile__name');
const profileDesc = document.querySelector('.profile__description');
const picturePopup = document.querySelector('.popup_type_add-picture');
const pictureForm = picturePopup.querySelector('.popup__forms');
const picNameInput = picturePopup.querySelector('.popup__input_type_picture-name');
const picLinkInput = picturePopup.querySelector('.popup__input_type_picture-link');
const cardTemplate = document.querySelector('.photo-element').content;
const cardsList = document.querySelector('.elements__list');
const imagePopup = document.querySelector('.popup_type_show-picture');
const imgLink = imagePopup.querySelector('.popup__image');
const imgCaption = imagePopup.querySelector('.popup__caption');

initialCards.forEach(item => {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__photo').src = item.link;
  cardElement.querySelector('.element__photo').alt = item.name;
  cardElement.querySelector('.element__title').textContent = item.name;
  cardsList.append(cardElement);
})

const likeButtons = document.querySelectorAll('.element__like-button');
const removeButtons = document.querySelectorAll('.element__remove');
const cardImages = document.querySelectorAll('.element__photo');

likeButtons.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('element__like-button_active');
  })
})

removeButtons.forEach(item => {
  item.addEventListener('click', () => {
    item.closest('.element').remove();
  })
})

cardImages.forEach(item => {
  item.addEventListener('click', () => {
    const imgName = item.nextSibling.nextSibling.textContent;
    imagePopup.classList.add('popup_active');
    imgLink.src = item.src;
    imgLink.alt = imgName;
    imgCaption.textContent = imgName;
  })
})

editButton.addEventListener('click', () => {
  profilePopup.classList.add('popup_active')
})

profileForm.addEventListener('submit', evt => {
  evt.preventDefault();
  const name = nameInput.value;
  const description = descInput.value;
  profileName.textContent = name;
  profileDesc.textContent = description;
  profilePopup.classList.remove('popup_active');
})

addButton.addEventListener('click', () => {
  picturePopup.classList.add('popup_active')
})

pictureForm.addEventListener('submit', evt => {
  evt.preventDefault();
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__photo').src = picLinkInput.value;
  cardElement.querySelector('.element__photo').alt = picNameInput.value;
  cardElement.querySelector('.element__title').textContent = picNameInput.value;
  const likeButton = cardElement.querySelector('.element__like-button');
  const removeButton = cardElement.querySelector('.element__remove');
  const cardImage = cardElement.querySelector('.element__photo');

  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('element__like-button_active');
  });

  removeButton.addEventListener('click', () => {
    removeButton.closest('.element').remove();
  });
  
  cardImage.addEventListener('click', () => {
    const imgName = cardImage.nextSibling.nextSibling.textContent;
    imagePopup.classList.add('popup_active');
    imgLink.src = cardImage.src;
    imgLink.alt = imgName;
    imgCaption.textContent = imgName;
  });

  cardsList.append(cardElement);
  picturePopup.classList.remove('popup_active');
})

popupClose.forEach(item => {
  item.addEventListener('click', () => {
    profilePopup.classList.remove('popup_active');
    imagePopup.classList.remove('popup_active');
    picturePopup.classList.remove('popup_active');
  })
})
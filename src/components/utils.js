export const initialCards = [
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
export const addButton = document.querySelector('.profile__add-button');
export const editButton = document.querySelector('.profile__edit-button');
export const profilePopup = document.querySelector('.popup_type_profile-info');
export const profileForm = profilePopup.querySelector('.popup__forms');
export const popupCloseButtons = document.querySelectorAll('.popup__close-button');
export const profileName = document.querySelector('.profile__name');
export const profileDesc = document.querySelector('.profile__description');
export const picturePopup = document.querySelector('.popup_type_add-picture');
export const pictureForm = picturePopup.querySelector('.popup__forms');
export const imagePopup = document.querySelector('.popup_type_show-picture'); 
export const imgLink = imagePopup.querySelector('.popup__image');
export const imgCaption = imagePopup.querySelector('.popup__caption');
export const cardContainer = document.querySelector('.elements__list');

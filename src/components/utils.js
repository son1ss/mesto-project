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
export const avatar = document.querySelector('.profile__picture');
export const avatarButton = document.querySelector('.profile__picture-edit');
export const avatarPopup = document.querySelector('.popup_type_edit-avatar');
export const avatarForm = avatarPopup.querySelector('.popup__forms');
export const setLoadingState = form => {
  form.querySelector('.popup__submit').textContent = 'Сохранение...'
  return form.querySelector('.popup__submit')
}
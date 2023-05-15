import { openPopup } from './modal'

export const generateCard = cardObject => {
  const cardTemplate = document.querySelector('.photo-element').content;
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const imagePopup = document.querySelector('.popup_type_show-picture');
  const imgLink = imagePopup.querySelector('.popup__image');
  const imgCaption = imagePopup.querySelector('.popup__caption');
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
    openPopup(imagePopup);
    imgLink.src = cardObject.link;
    imgLink.alt = cardObject.name;
    imgCaption.textContent = cardObject.name;
  })
  return cardElement
}

export const renderCard = (cardElement, cardContainerSelector) => {
  const cardContainer = document.querySelector(cardContainerSelector);
  cardContainer.prepend(cardElement)
}
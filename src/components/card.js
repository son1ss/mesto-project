import { imagePopupHandler } from './modal'
import { cardContainer } from './utils'

export const generateCard = cardObject => {
  const cardTemplate = document.querySelector('.photo-element').content;
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const cardImage = cardElement.querySelector('.element__photo');
  cardImage.src = cardObject.link;
  cardImage.alt = cardObject.name;
  cardElement.querySelector('.element__title').textContent = cardObject.name;
  const likeButton = cardElement.querySelector('.element__like-button');
  likeButton.addEventListener('click', () => {likeButton.classList.toggle('element__like-button_active')});
  cardElement.querySelector('.element__remove').addEventListener('click', () => {
    cardElement.closest('.element').remove();
  })
  cardImage.addEventListener('click', () => {
    imagePopupHandler(cardObject)
  })
  return cardElement
}

export const renderCard = (cardElement) => {
  cardContainer.prepend(cardElement)
}
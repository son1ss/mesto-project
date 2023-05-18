import { imagePopupHandler } from './modal'
import { cardContainer } from './utils'
import * as api from './api'

export const generateCard = (cardObject, id = cardObject.owner._id) => {
  const cardTemplate = document.querySelector('.photo-element').content;
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const cardImage = cardElement.querySelector('.element__photo');
  const removeButton = cardElement.querySelector('.element__remove');
  const likeButton = cardElement.querySelector('.element__like-button');
  const likesCount = cardElement.querySelector('.element__likes')

  cardImage.src = cardObject.link;
  cardImage.alt = cardObject.name;
  cardElement.querySelector('.element__title').textContent = cardObject.name;

  if (cardObject.owner._id === id) {
    removeButton.addEventListener('click', () => {
      api.removeCard(cardObject._id).then(() => {
        cardElement.closest('.element').remove();
      }).catch(err => {console.log(err)})
    })
  } else removeButton.remove()

  const likes = cardObject.likes.map(user => user._id)

  likesCount.textContent = likes.length;

  if (likes.includes(id)) {
    likeButton.classList.add('element__like-button_active')
  }

  likeButton.addEventListener('click', () => {
    if (likeButton.classList.contains('element__like-button_active')) {
      api.removeLike(cardObject._id).then(() => {
        likeButton.classList.remove('element__like-button_active')
        likesCount.textContent--
      }).catch(err => {console.log(err)})
    } else {
      api.addLike(cardObject._id).then(() => {
        likeButton.classList.add('element__like-button_active')
        likesCount.textContent++
      }).catch(err => {console.log(err)})
    }
  });

  cardImage.addEventListener('click', () => {
    imagePopupHandler(cardObject)
  })
  return cardElement
}

export const renderCard = (cardElement) => {
  cardContainer.prepend(cardElement)
}

export const renderInitialCard = (cardElement) => {
  cardContainer.append(cardElement)
}
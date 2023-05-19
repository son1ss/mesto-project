import { imagePopup, imgLink, imgCaption } from './utils'

const handleEsc = e => {
  if (e.key === 'Escape') {closePopup(document.querySelector('.popup_active'))}
}

const handleOverlayClose = e => {
  if(e.target.className.includes('popup_active')) {closePopup(e.target)}
}

export const openPopup = popup => {
  popup.classList.add('popup_active')
  document.addEventListener('keydown', handleEsc)
  popup.addEventListener('click', handleOverlayClose)
}

export const closePopup = popup => {
  popup.classList.remove('popup_active')
  document.removeEventListener('keydown', handleEsc)
  popup.removeEventListener('click', handleOverlayClose)
}
export const imagePopupHandler = (cardObject) => {
  openPopup(imagePopup);
  imgLink.src = cardObject.link;
  imgLink.alt = cardObject.name;
  imgCaption.textContent = cardObject.name;
}
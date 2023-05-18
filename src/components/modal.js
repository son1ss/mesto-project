import { imagePopup, imgLink, imgCaption } from './utils'

const handleEsc = (popup) => {
  return e => {if (e.key === 'Escape') {closePopup(popup)}}
}

const handleOverlayClose = (popup) => {
  return e => {if(e.target.className.includes('popup_active')) {closePopup(popup)}}
}

export const openPopup = popup => {
  popup.classList.add('popup_active')
  document.addEventListener('keydown', handleEsc(popup))
  popup.addEventListener('click', handleOverlayClose(popup))
}

export const closePopup = popup => {
  popup.classList.remove('popup_active')
  document.removeEventListener('keydown', handleEsc(popup))
  popup.removeEventListener('click', handleOverlayClose(popup))
}
export const imagePopupHandler = (cardObject) => {
  openPopup(imagePopup);
  imgLink.src = cardObject.link;
  imgLink.alt = cardObject.name;
  imgCaption.textContent = cardObject.name;
}
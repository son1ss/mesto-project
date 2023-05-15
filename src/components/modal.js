import { imagePopup, imgLink, imgCaption } from './utils'

const handleEsc = (e, popup) => {
  if (e.key === 'Escape') {closePopup(popup)}
}

const handleOverlayClose = (e, popup) => {
  if(e.target.className.includes('popup_active')) {closePopup(popup)}
}

export const openPopup = popup => {
  popup.classList.add('popup_active')
  document.addEventListener('keydown', e => handleEsc(e, popup))
  popup.addEventListener('click', e => handleOverlayClose(e, popup))
}

export const closePopup = popup => {
  popup.classList.remove('popup_active')
  document.removeEventListener('keydown', e => handleEsc(e, popup))
  popup.removeEventListener('click', e => handleOverlayClose(e, popup))
}
export const imagePopupHandler = (cardObject) => {
  openPopup(imagePopup);
  imgLink.src = cardObject.link;
  imgLink.alt = cardObject.name;
  imgCaption.textContent = cardObject.name;
}
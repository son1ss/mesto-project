

const showInputError = (inputElement, inputErrorClass, errorElement) => {
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = inputElement.validationMessage
}

const hideInputError = (inputElement, inputErrorClass, errorElement) => {
  inputElement.classList.remove(inputErrorClass);
  errorElement.textContent = ''
}

const checkInputValidity = (inputElement, inputErrorClass, errorElement) => {
  if (inputElement.validity.patternMismatch) {
    inputElement.setCustomValidity(inputElement.dataset.errorMessage)
  } else {
    inputElement.setCustomValidity('')
  }

  if (inputElement.validity.valid) {
    hideInputError(inputElement, inputErrorClass, errorElement)
  } else {
    showInputError(inputElement, inputErrorClass, errorElement)
  }
}

const hasInvalidInput = inputList => inputList.some(inputElement => !inputElement.validity.valid)

export const toggleButtonState = (inputList, buttonElement) => {
  buttonElement.disabled = hasInvalidInput(inputList)
}

const setEventListeners = (formElement, classes) => { 
  const inputList = Array.from(formElement.querySelectorAll(classes.inputSelector))
  const submitButton = formElement.querySelector(classes.submitButtonSelector)

  toggleButtonState(inputList, submitButton)

  inputList.forEach(inputElement => inputElement.addEventListener('input', () => {
    const errorElement = formElement.querySelector(`${classes.inputSelector}-error_type_${inputElement.name}`)
    checkInputValidity(inputElement, classes.inputErrorClass, errorElement)
    toggleButtonState(inputList, submitButton)
  }))
}

export const enableValidation = classes => {
  const forms = Array.from(document.querySelectorAll(classes.formSelector))
  
  forms.forEach(form => {
    setEventListeners(form, classes)
  });
}
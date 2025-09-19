const showInputError = (inputElement, options) => {
  const errorElement = document.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(options.inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(options.errorClass);
};

const hideInputError = (inputElement, options) => {
  const errorElement = document.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(options.inputErrorClass);
  errorElement.classList.remove(options.errorClass);
  errorElement.textContent = "";
};

const checkInputValidity = (inputElement, options) => {
  if (!inputElement.validity.valid) {
    showInputError(inputElement, options);
  } else {
    hideInputError(inputElement, options);
  }
};

const toggleButtonState = (inputList, buttonElement, options) => {
  if (inputList.some((inputElement) => !inputElement.validity.valid)) {
    buttonElement.classList.add(options.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(options.inactiveButtonClass);
    buttonElement.disabled = false;
  }
};

const setEventListeners = (options, formElement) => {
  const inputList = Array.from(
    formElement.querySelectorAll(options.inputSelector),
  );
  const buttonElement = formElement.querySelector(options.submitButtonSelector);

  toggleButtonState(inputList, buttonElement, options);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(inputElement, options);
      toggleButtonState(inputList, buttonElement, options);
    });
  });
};

const enableValidation = (options) => {
  const formList = document.querySelectorAll(options.formSelector);

  formList.forEach((formElement) => {
    setEventListeners(options, formElement);
  });
};

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__save-button",
  inactiveButtonClass: "modal__save-button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__input-error_active",
};

enableValidation(config);

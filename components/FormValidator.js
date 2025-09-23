export default class FormValidator {
  constructor(settings, formSelector) {
    this._formSelector = formSelector;
    this._inputSelector = settings.inputSelector;
    this._submitSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;

    this._formElement = document.querySelector(this._formSelector);
    this._inputList = [
      ...this._formElement.querySelectorAll(this._inputSelector),
    ];
    this._submitButton = this._formElement.querySelector(this._submitSelector);
  }

  _checkInputValidity(inputElement) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`,
    );
    if (!inputElement.validity.valid) {
      inputElement.classList.add(this._inputErrorClass);
      errorElement.textContent = inputElement.validationMessage;
      errorElement.classList.add(this._errorClass);
    } else {
      inputElement.classList.remove(this._inputErrorClass);
      errorElement.classList.remove(this._errorClass);
      errorElement.textContent = "";
    }
  }

  _toggleButtonState() {
    if (this._inputList.some((inputElement) => !inputElement.validity.valid)) {
      this._submitButton.classList.add(this._inactiveButtonClass);
      this._submitButton.disabled = true;
    } else {
      this._submitButton.classList.remove(this._inactiveButtonClass);
      this._submitButton.disabled = false;
    }
  }
  _setEventListeners() {
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }
  enableValidation() {
    this._setEventListeners();
  }
}

export default class FormValidator {
  constructor(options, formSelector) {
    this._options = options;
    this._formSelector = formSelector;
  }

  _setEventListeners() {}

  _checkInputValdity() {}

  _toggleButtonState() {}

  enableValidation() {
    this._formElement = document.querySelector(`${formSelector}`);
  }

  resetValidation() {}
}

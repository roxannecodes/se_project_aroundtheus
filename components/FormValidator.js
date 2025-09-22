export default class FormValidator {
  constructor(options, formSelector) {
    this._options = options;
    this._formSelector = formSelector;
  }

  _checkInputValdity() {}

  _toggleButtonState() {}

  _setEventListeners() {}

  enableValidation() {
    this._formElement = document.querySelector(`${formSelector}`);
  }

  resetValidation() {}
}

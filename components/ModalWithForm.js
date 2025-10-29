import Modal from "./Modal.js";

export default class ModalWithForm extends Modal {
  constructor(modalSelector, handleFormSubmit) {
    super(modalSelector);
    this._handleFormSubmit = handleFormSubmit;

    this._form = this._modal.querySelector(".modal__form");
    this._inputList = this._form.querySelectorAll(".modal__input");
    this._firstInput = this._inputList[0];
    this._secondInput = this._inputList[1];
  }

  _getInputValues() {
    const data = {
      firstInput: this._firstInput.value,
      secondInput: this._secondInput.value,
    };
    return data;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault;
      this._handleFormSubmit(this._getInputValues);
    });
  }
}

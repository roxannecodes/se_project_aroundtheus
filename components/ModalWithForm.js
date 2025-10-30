export default class ModalWithForm extends Modal {
  constructor(modalSelector, handleFormSubmit) {
    super(modalSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._modal.querySelector(".modal__form");
  }

  _getInputValues() {
    this._inputList = this._form.querySelectorAll(".modal__input");

    const inputValues = {
      firstInput: this._inputList[0].value,
      secondInput: this._inputList[1].value,
    };
    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault;
      this._handleFormSubmit(this._getInputValues);
    });
  }
}

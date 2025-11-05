import Modal from "./Modal.js";

export default class ModalWithImage extends Modal {
  constructor(modalSelector) {
    super(modalSelector);
    this._previewImage = this._modal.querySelector(".modal__image");
    this._previewCaption = this._modal.querySelector(".modal__caption");
  }

  open(data) {
    this._previewImage.src = data.link;
    this._previewImage.alt = `Enlarged view of ${data.name}`;
    this._previewCaption.textContent = data.name;
    super.open();
  }
}

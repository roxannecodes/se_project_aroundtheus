export default class Modal {
  constructor(modalSelector) {
    this._modal = document.querySelector(modalSelector);
  }
  open() {
    this._modal.classList.add("modal_opened");
    document.addEventListener("keydown", () => {
      this._handleEscClose();
    });
  }

  close() {
    this._modal.classList.remove("modal_opened");
    document.removeEventListener("keydown", () => {
      this._handleEscClose();
    });
  }

  _handleEscClose(evt) {
    // Close modal via  Esc key
    if (evt.key === "Escape") {
      const openModal = document.querySelector(".modal_opened");
      if (openModal) {
        this.close();
      }
    }
  }

  setEventListeners() {
    // Close modal Via close button
    this._modalCLoseButton = this._modal.querySelector(".modal__close-button");
    this._modalCLoseButton.addEventListener("click", () => {
      this.close();
    });

    // Close modal via overlay click
    this._modal.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("modal")) {
        this.close();
      }
    });
  }
}

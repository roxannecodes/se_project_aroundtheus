
export default class Modal {
  constructor(modalSelector) {
    this.modalSelector = modalSelector;
      this.modal = document.querySelector(this.modalSelector);
  }
  open() {
    this.modal.classList.add("modal_opened");
    document.addEventListener("keydown", _handleEscClose);
  }

  close() {
    this.modal.classList.remove("modal_opened");
    document.removeEventListener("keydown", _handleEscClose);
  }

  _handleEscClose(evt) {
    // Handle close Via ** close Esc key **
    if (evt.key === "Escape") {
      const openModal = document.querySelector(".modal_opened");
      if (openModal) {
        this.close();
      }
    }
  }

  setEventListeners() {
  
    // Handle close Via ** close button click **
    this.modalCLoseButton = this.modal.querySelector(
      ".modal__close-button"
    );

    this.modalCLoseButton.addEventListener("click", this.close());

    // Handle close  via ** overlay click **
    this.modalElement.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("modal")) {
        this.close();
      }
    });
  }
}

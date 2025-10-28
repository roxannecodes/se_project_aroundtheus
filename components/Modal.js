export default class Modal {
  constructor(modalSelector) {
    this.modalSelector = modalSelector;
  }
  open() {
    this.modalElement.classList.add("modal_opened");
    document.removeEventListener("keydown", _handleEscClose);
  }

  close() {
    this.modalElement.classList.remove("modal_opened");
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
    this.modalElement = document.querySelector(this.modalSelector);
    this.modalCLoseButton = this.modalElement.querySelector(
      ".modal__close-button"
    );
    
    // Handle close Via ** close button click **
    this.modalCLoseButton.addEventListener("click", this.close());

    // Handle close  via ** overlay click **
    this.modalElement.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("modal")) {
        this.close();
      }
    });
  }
}

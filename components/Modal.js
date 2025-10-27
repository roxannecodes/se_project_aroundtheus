export default class Modal {
  constructor(modalSelector) {
    this.modalElement = document.querySelector(modalSelector);
  }
  open() {}

  close() {}
  _handleEscClose() {}

  setEventListeners() {
    //for close button
    //for over-lay click
  }
}
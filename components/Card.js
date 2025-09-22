export default class Card {
  constructor({ name, link }, cardSelector, handleImageClick) {
    this._title = name;
    this._image = link;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
  }

  // _handleLikeButton() {
  //   this._cardLikeButton.classList.toggle("card__like-button_active");
  // }

  // _handleDeleteButton() {
  //   this._element.remove();
  //   this._cardElement = null;
  // }

  _setEventListeners() {
    this._cardImage.addEventListener("click", () => {
      this._handleImageClick({
        name: this._title,
        link: this._image,
      });
    });

    this._cardLikeButton.addEventListener("click", () => {
      this._cardLikeButton.classList.toggle("card__like-button_active");
    });

    this._cardDeleteButton.addEventListener("click", () => {
      this._element.remove();
      this._cardElement = null;
    });
  }

  generateCard() {
    this._element = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    this._cardTitle = this._element.querySelector(".card__title");
    this._cardImage = this._element.querySelector(".card__image");
    this._cardLikeButton = this._element.querySelector(".card__like-button");
    this._cardDeleteButton = this._element.querySelector(
      ".card__delete-button",
    );

    this._cardImage.src = this._image;
    this._cardImage.alt = this._title;
    this._cardTitle.textContent = this._title;

    this._setEventListeners();

    return this._element;
  }
}

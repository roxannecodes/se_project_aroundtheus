export default class Card {
  constructor(data, cardSelector, handleImageClick) {
    this._title = data.name;
    this._image = data.link;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
  }

  _handleLikeButton() {
    this._likeButton.classList.toggle("card__like-button_active");
  }

  _handleDeleteButton() {
    this._element.remove();
    this._cardElement = null;
  }

  _setEventListeners() {
    this._cardImage.addEventListener("click", () => {
      this._handleImageClick(this);
    });

    this._cardLikeButton.addEventListener("click", () => {
      this._handleLikeButton();
    });

    this._cardDeleteButton.addEventListener("click", () => {
      this._handleDeleteButton();
    });
  }

  generateCard() {
    this._element = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    this._cardTitle = this._element.querySelector(".card__title");
    this._cardImage = this._element.querySelector(".card__image");
    this._cardLikeButton = this._element.querySelector(".Card__like-button");
    this._cardDeleteButton = this._element.querySelector(".Card__delete-button");

    this._cardImage.src = this._link;
    this._cardImage.alt = this._title;
    this._cardTitle.textContent = this._title;

    this._setEventListeners();

    return this._element;
  }
}

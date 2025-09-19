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
  }

  _setEventListeners() {
    this._image.addEventListener("click", () => {
      this._handleImageClick(this);
    });

    this._likeButton.addEventListener("click", () => {
      this._handleLikeButton();
    });

    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteButton();
    });
  }

  generateCard() {
    this._element = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    this._element.querySelector(".card__image").src = this._link;
    this._element.querySelector(".card__image").alt = this._title;
    this._element.querySelector(".card__title").textContent = this._title;

    this._likeButton = this._element.querySelector(".Card__like-button");

    this._deleteButton = this._element.querySelector(".Card__delete-button");

    this._setEventListeners();

    return this._element;
  }
}

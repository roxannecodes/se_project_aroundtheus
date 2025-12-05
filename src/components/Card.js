export default class Card {
  constructor(
    data,
    cardSelector,
    handleImageClick,
    handleDeleteButton,
    handleLikeButton
  ) {
    this._title = data.name;
    this.cardId = data._id;
    this._image = data.link;
    this.isLiked = data.isLiked;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
    this._handleDeleteButton = handleDeleteButton;
    this._handleLikeButton = handleLikeButton;
  }

  toggleCardLike() {
    this._cardLikeButton.classList.toggle("card__like-button_active");
  }

  removeCard() {
    this._element.remove();
  }

  _setEventListeners() {
    this._cardImage.addEventListener("click", () => {
      this._handleImageClick({
        name: this._title,
        link: this._image,
      });
    });

    this._cardLikeButton.addEventListener("click", () => {
      this._handleLikeButton(this);
    });

    this._cardDeleteButton.addEventListener("click", () => {
      this._handleDeleteButton(this);
    });
  }

  generateCard() {
    this._template = document.querySelector(this._cardSelector);
    this._element = this._template.content
      .querySelector(".card")
      .cloneNode(true);
    this._cardTitle = this._element.querySelector(".card__title");
    this._cardImage = this._element.querySelector(".card__image");
    this._cardLikeButton = this._element.querySelector(".card__like-button");
    this._cardDeleteButton = this._element.querySelector(
      ".card__delete-button"
    );

    this._cardImage.src = this._image;
    this._cardImage.alt = this._title;
    this._cardTitle.textContent = this._title;

    this._setEventListeners();

    // Render cards' current like states when page loads
    if (this.isLiked) {
      this._cardLikeButton.classList.add("card__like-button_active");
    }
 
    return this._element;
  }
}

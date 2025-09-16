export default class Card {
    constructor(data, cardSelector, handleImageClick) {
        this._title = data.name;
        this._image = data.link;
        this._cardSelector = cardSelector;
        this._handleImageClick = handleImageClick;
    }

    _getTemplate () {
     const cardElement = document
       .querySelector(this._cardSelector)
       .content.querySelector(".card")
       .cloneNode(true);

     return cardElement;
    }


    _handleLikeButton() {
        
    }
    
    _handleDeleteButton() {
    
    }
    
    _setEventListeners() {
        this._cardImage.addEventListener('click', () => {
            this._handleImageClick(this)
        });
    }

    generateCard() {
          this._element = this._getTemplate();
          this._setEventListeners();

          this._element.querySelector(".card__image").style.backgroundImage =
            `url(${this._image})`;
          this._element.querySelector(".card__title").textContent = this._title;

          return this._element;
    }
}


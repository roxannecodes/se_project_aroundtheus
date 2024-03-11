

//TODO: store initial cards' data into an array of objects 
const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

// TODO: Handle modal open and close events

let modal = document.querySelector(".modal");
let profileName = document.querySelector(".profile__name");
let profileDescription = document.querySelector(".profile__description");
let inputName = modal.querySelector("#profile-name");
let inputDescription = modal.querySelector("#profile-description");



let modalOpenButton = document.querySelector(".profile__edit-button");
modalOpenButton.addEventListener("click", () => {
  inputName.value = profileName.textContent;
  inputDescription.value = profileDescription.textContent;
  modal.classList.add("modal_opened");
});

let modalCloseButton = modal.querySelector(".modal__close-button");
modalCloseButton.addEventListener("click", () => {
  modal.classList.remove("modal_opened");
});

//TODO: Handle submit button events

let modalForm = document.querySelector(".modal__form");
modalForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileDescription.textContent = inputDescription.value;
  modal.classList.remove("modal_opened");
});

//TODO: Clone card template and fill element with user data

let cardsContainer = document.querySelector(".cards__list");

function getCardElement(data) {
  let cardTemplate = document.querySelector("#card-template")
    .content.querySelector(".card");
  let cardElement = cardTemplate.cloneNode(true);
  let cardImage = cardElement.querySelector(".card__image");
  let cardTitle = cardElement.querySelector(".card__title");

  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardTitle.textContent = data.name;
  return cardElement;
}

//TODO: Iterate over cards to render grid

for (let i = 0; i < initialCards.length; i++) {
  let card = getCardElement(initialCards[i]);
  cardsContainer.append(card);
}

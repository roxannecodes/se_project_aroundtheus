

//TODO: store initial cards' data into an array of objects 
const cardData = [
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

const modal = document.querySelector(".modal");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const inputName = modal.querySelector("#profile-name");
const inputDescription = modal.querySelector("#profile-description");


const modalOpenButton = document.querySelector(".profile__edit-button");

modalOpenButton.addEventListener("click", function (evt) {
  inputName.value = profileName.textContent;
  inputDescription.value = profileDescription.textContent;
  modal.classList.add("modal_opened");
});

const modalCloseButton = modal.querySelector(".modal__close-button");

modalCloseButton.addEventListener("click", function (evt) {
  closeProfileModal(); 
});

const closeProfileModal = () => modal.classList.remove("modal_opened");


//TODO: Handle submit button events

const modalForm = document.querySelector(".modal__form");

modalForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileDescription.textContent = inputDescription.value;
    closeProfileModal(); 
});



//TODO: Clone card template and fill element with user data

function getCardElement(data) {
  const cardTemplate = document.querySelector("#card-template")
    .content.querySelector(".card");
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");

  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardTitle.textContent = data.name;
  return cardElement;
}

//TODO: Iterate over cards to render grid

const cardsContainer = document.querySelector(".cards__list");

for (let i = 0; i < cardData.length; i++) {
  const card = getCardElement(cardData[i]);
  cardsContainer.append(card);
}

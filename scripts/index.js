
// TODO: Handle profile modal events/changes in profile info
const profileInfo = document.querySelector(".profile__info");
const profileName = profileInfo.querySelector(".profile__name");
const profileDescription = profileInfo.querySelector(".profile__description");

const profileModal = document.querySelector("#profile-modal");
const profileNameInput = document.querySelector("#profile-name");
const profileDescriptionInput = document.querySelector("#profile-description");

//TODO: Handle opening profile modal

const profileEditButton = document.querySelector(".profile__edit-button");
profileEditButton.addEventListener("click", function () {
    profileModal.classList.add("modal_opened");
});


//TODO: Handle closing profile modal 

const profileCloseButton = document.querySelector("#profile-close");
profileCloseButton.addEventListener("click", closeProfileModal);

function closeProfileModal() {
  profileModal.classList.remove("modal_opened");
}

//TODO: Handle submitting profile modal form 


const profileModalForm = document.querySelector("#profile-form");
profileModalForm.addEventListener("submit", submitProfileModal);

 function submitProfileModal (evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
    closeProfileModal(); 
}


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



//TODO:  Rendering cards above via the arr.forEach() method

cardData.forEach((data) => {
  const cardsContainer = document.querySelector(".cards__list");
  const card = createCard(data);
  cardsContainer.append(card);
});



//TODO:  making a new card by copying template in html via JS

function createCard (data) {
  const cardTemplate = document.querySelector("#card-template")
    .content;
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");

  cardTitle.textContent = data.name;
  cardImage.src = data.link;
  cardImage.alt = data.name;
  return cardElement;
}


//TODO: handle card modal events

const cardModal = document.querySelector("#card-modal");

// OPEN MODAL
const addImageButton = document.querySelector(".profile__add-button");
addImageButton.addEventListener("click", function () {
  cardModal.classList.add("modal_opened");
});


//CLOSE MODAL
const cardcloselButton = document.querySelector("#card-close");
cardcloselButton.addEventListener("click", closeCardModal);

function closeCardModal() {
  cardModal.classList.remove("modal_opened");
}

//TODO: SUBMIT MODAL FORM

const cardTitleInput = document.querySelector("#card-title");
const cardImageInput = document.querySelector("#card-image");

const cardModalForm = document.querySelector("#card-form");
cardModalForm.addEventListener("submit", submitCardModal);

function submitCardModal() {

  const data = { name: "", link: "" };
  data.name = cardTitleInput.value;
  data.link = cardImageInput.value;
  const card = createCard(data);
  const cardsContainer = document.querySelector(".cards__list");
  cardsContainer.prepend(card);
  closeCardModal();
}


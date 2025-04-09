
// TODO: Handle profile modal events/changes in profile info

//TODO: Declare DOM variables
const profileInfo=document.querySelector(".profile__info")
const profileName = profileInfo.querySelector(".profile__name");
const profileDescription = profileInfo.querySelector(".profile__description");

const profileModal = document.querySelector("#profile-modal");
const profileNameInput = document.querySelector("#profile-name");
const profileDescriptionInput = document.querySelector("#profile-description");

//TODO: Handle opening profile modal

const modalOpenButton = document.querySelector(".profile__edit-button");
modalOpenButton.addEventListener("click", openModal);

function openModal () {
  profileModal.classList.add("modal_opened");

  inputName.value = profileName.textContent;
  inputDescription.value = profileDescription.textContent;
}

//TODO: Handle closing profile modal 
const modalCloseButton = document.querySelector(".modal__close-button");
modalCloseButton.addEventListener("click", closeModal);

function closeModal() {
 profileModal.classList.remove("modal_opened");
}


//TODO: Handle submitting profile modal form 

const modalForm = document.querySelector(".modal__form");
modalForm.addEventListener("submit", submitModal);

 function submitModal (e) {
  e.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
    closeModal(); 
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


//TODO: Iterate over cards to render initial grid items via a for-loop


// for (let i = 0; i < cardData.length; i++) {
//   const cardsContainer = document.querySelector(".cards__list");
//   const card = createCard(cardData[i]);
//   cardsContainer.append(card);
// }

//TODO:  Rendering cards via the arr.forEach() method

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

  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardTitle.textContent = data.name;
  return cardElement;
 
}


//TODO: handle adding card modal




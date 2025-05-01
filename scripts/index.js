// TODO: Handle profile modal events/changes in profile info

const profileInfo = document.querySelector(".profile__info");
const profileName = profileInfo.querySelector(".profile__name");
const profileDescription = profileInfo.querySelector(".profile__description");

const profileModal = document.querySelector("#profile-modal");
const profileNameInput = document.querySelector("#profile-name");
const profileDescriptionInput = document.querySelector("#profile-description");

function openModal(modal) {
  modal.classList.add("modal_opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
}

//TODO: Handle opening profile modal

const profileEditButton = document.querySelector(".profile__edit-button");
profileEditButton.addEventListener("click", () => {
  openModal(profileModal);
});

//TODO: Handle closing profile modal

const profileCloseButton = document.querySelector("#profile-close");
profileCloseButton.addEventListener("click", () => {
  closeModal(profileModal);
});

//TODO: Handle submitting profile modal form

const profileModalForm = document.querySelector("#profile-form");
profileModalForm.addEventListener("submit", submitProfileModal);

function submitProfileModal(evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closeModal(profileModal);
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

const cardsContainer = document.querySelector(".cards__list");

cardData.forEach((data) => {
  const card = createCard(data);
  cardsContainer.prepend(card);
});

//TODO:  Declare DOM variables for the card image PREVIEW MODAL

const previewModal = document.querySelector("#preview-modal");
const previewModalImage = previewModal.querySelector(".modal__image");
const previewModalCaption = previewModal.querySelector(".modal__caption");
const previewModalCloseBtn = previewModal.querySelector(".modal__close-button");
previewModalCloseBtn.addEventListener("click", () => {
  closeModal(previewModal);
});

//TODO:  making a new card by copying template in html via JS

function createCard(data) {
  const cardTemplate = document
    .querySelector("#card-template")
    .content.querySelector(".card");
  const cardElement = cardTemplate.cloneNode(true);

  const cardTitle = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__delete-button");
  const cardImage = cardElement.querySelector(".card__image");

  cardTitle.textContent = data.name;
  cardImage.src = data.link;
  cardImage.alt = data.name;

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });

  deleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

  cardImage.addEventListener("click", () => {
    openModal(previewModal);
    previewModalImage.src = data.link;
    previewModalImage.alt = `Enlarged view of ${data.name}`;
    previewModalCaption.textContent = data.name;
  });

  return cardElement;
}

//TODO: handle creating new card modal events

const cardModal = document.querySelector("#card-modal");
const cardTitleInput = document.querySelector("#card-title");
const cardImageInput = document.querySelector("#card-image");
const cardModalForm = document.querySelector("#card-form");

const addImageButton = document.querySelector(".profile__add-button");
addImageButton.addEventListener("click", () => {
  openModal(cardModal);
});

cardModalForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const data = {
    name: cardTitleInput.value,
    link: cardImageInput.value,
  };
  const card = createCard(data);
  const cardsContainer = document.querySelector(".cards__list");
  cardsContainer.prepend(card);
  closeModal(cardModal);
});

const cardcloselButton = document.querySelector("#card-close");
cardcloselButton.addEventListener("click", () => {
  closeModal(cardModal);
});

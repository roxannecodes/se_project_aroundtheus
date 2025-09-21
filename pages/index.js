import Card from "../components/Card.js";
// import FormValidator from "../components/FormValidator.js";

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

//TODO: Declare properties of settings object for configuring Form Validation

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__save-button",
  inactiveButtonClass: "modal__save-button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__input-error_active",
};

// TODO: Declare PROFILE section & modal DOM variables

const profileInfo = document.querySelector(".profile__info");
const profileName = profileInfo.querySelector(".profile__name");
const profileEditButton = profileInfo.querySelector(".profile__edit-button");
const profileDescription = profileInfo.querySelector(".profile__description");

const profileModal = document.querySelector("#profile-modal");
const profileModalForm = profileModal.querySelector("#profile-form");
const profileNameInput = profileModal.querySelector("#profile-name");
const profileDescriptionInput = profileModal.querySelector(
  "#profile-description",
);

//TODO: Handle opening profile modal

profileEditButton.addEventListener("click", () => {
  openModal(profileModal);
  profileNameInput.value = profileName.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
});


function openModal(modal) {
  modal.classList.add("modal_opened");
  modal.addEventListener("keydown", handleEscKey);
  modal.addEventListener("click", handleOverlayClick);
}

//TODO: Handle closing modals (for all 3 modals)

//! Via ** close button click **

const modalCloseBtns = document.querySelectorAll(".modal__close-button");

modalCloseBtns.forEach((btn) => {
  btn.addEventListener("click", (evt) => {
    const openModal = document.querySelector(".modal_opened");
    closeModal(openModal);
  });
});

function closeModal(modal) {
  modal.classList.remove("modal_opened");
  modal.removeEventListener("keydown", handleEscKey);
  modal.removeEventListener("click", handleOverlayClick);
}

//! via ** esc key **
function handleEscKey(event) {
  if (event.key === "Escape") {
    const openModal = document.querySelector(".modal_opened");
    if (openModal) {
      closeModal(openModal);
    }
  }
}

//! via ** overlay click **
function handleOverlayClick(event) {
  if (event.target.classList.contains("modal")) {
    closeModal(event.target);
  }
}

//TODO: Handle submitting profile modal form

profileModalForm.addEventListener("submit", submitProfileModal);

function submitProfileModal(evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closeModal(profileModal);
}

//TODO:  Handle opening card image PREVIEW MODAL

const previewModal = document.querySelector("#preview-modal");
const previewModalImage = previewModal.querySelector(".modal__image");
const previewModalCaption = previewModal.querySelector(".modal__caption");

function openPreviewModal(data) {
  openModal(previewModal);
  previewModalImage.src = data.link;
  previewModalImage.alt = `Enlarged view of ${data.name}`;
  previewModalCaption.textContent = data.name;
}

//TODO:  Handle adding a new card

const cardsContainer = document.querySelector(".cards__list");

function renderCard(data) {
  const card = createCard(data);
  cardsContainer.prepend(card);
}

// ! Via ** classic functions **

// function createCard(data) {
//   const cardTemplate = document
//     .querySelector("#card-template")
//     .content.querySelector(".card");

//   const cardElement = cardTemplate.cloneNode(true);

//   const cardTitle = cardElement.querySelector(".card__title");
//   const likeButton = cardElement.querySelector(".card__like-button");
//   const deleteButton = cardElement.querySelector(".card__delete-button");
//   const cardImage = cardElement.querySelector(".card__image");

//   cardTitle.textContent = data.name;
//   cardImage.src = data.link;
//   cardImage.alt = data.name;

//   likeButton.addEventListener("click", () => {
//     likeButton.classList.toggle("card__like-button_active");
//   });

//   deleteButton.addEventListener("click", () => {
//     cardElement.remove();
//   });

//   cardImage.addEventListener("click", () => {
//     openPreviewModal(data);
//   });

//   return cardElement;
// }

//! via ** insntantiating Card class **

function createCard(data) {
  const card = new Card(data, "#card-template", openPreviewModal);
  const cardElement = card.generateCard();
  return cardElement;
}

//TODO: Render initial cards

initialCards.forEach((data) => {
  renderCard(data);
});

//TODO: handle adding a new card modal events

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

  renderCard(data);

  closeModal(cardModal);
  cardModalForm.reset();
});

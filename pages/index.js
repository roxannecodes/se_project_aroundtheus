//TODO: import modules
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";

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

//TODO: Declare properties of the settings object for configuring Form Validation

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
const profileSubmitBtn = profileModalForm.querySelector(".modal__save-button");

//TODO: Handle opening profile modal

profileEditButton.addEventListener("click", () => {
  openModal(profileModal);
  profileNameInput.value = profileName.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
});

function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", handleEscKey);
  document.addEventListener("click", handleOverlayClick);
}

//TODO: Handle submitting profile modal form

profileModalForm.addEventListener("submit", submitProfileModal);

function submitProfileModal(evt) {
  evt.preventDefault();

  profileName.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;

  closeModal(profileModal);

  profileFormValidation.resetValidation();
}

//TODO: Handle closing all modals

function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", handleEscKey);
  document.removeEventListener("click", handleOverlayClick);
}

//! Via ** close button click **

const modalCloseBtns = document.querySelectorAll(".modal__close-button");

modalCloseBtns.forEach((btn) => {
  btn.addEventListener("click", (evt) => {
    const openModal = document.querySelector(".modal_opened");
    closeModal(openModal);
  });
});

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

//TODO: handle opening new card modal

const addCardButton = document.querySelector(".profile__add-button");

addCardButton.addEventListener("click", () => {
  openModal(cardModal);
});

//TODO:  Handle creating a new card & adding it to DOM tree

const cardModal = document.querySelector("#card-modal");
const cardTitleInput = cardModal.querySelector("#card-title");
const cardImageInput = cardModal.querySelector("#card-image");
const cardSubmitBtn = cardModal.querySelector(".modal__save-button");

const cardsContainer = document.querySelector(".cards__list");

function createCard(data) {
  const card = new Card(data, "#card-template", openPreviewModal);
  const cardElement = card.generateCard();
  return cardElement;
}

function renderCard(data) {
  const card = createCard(data);
  cardsContainer.prepend(card);
}

// Render ** initial cards *
initialCards.forEach((data) => {
  renderCard(data);
});

// TODO: handle submitting card modal form

const cardModalForm = document.querySelector("#card-form");

cardModalForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const data = {
    name: cardTitleInput.value,
    link: cardImageInput.value,
  };

  renderCard(data);

  closeModal(cardModal);

  cardFormValidation.resetValidation();
});

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

//TODO: instantiation of the FormValidator class

const profileFormValidation = new FormValidator(config, profileModalForm);
profileFormValidation.enableValidation();

const cardFormValidation = new FormValidator(config, cardModalForm);
cardFormValidation.enableValidation();

//TODO: import modules
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import ModalWithImage from "../components/ModalWithImage.js";
import ModalWithForm from "../components/ModalWithForm.js";

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

// TODO: Declare profile section & modal DOM variables

const profileInfo = document.querySelector(".profile__info");
const profileName = profileInfo.querySelector(".profile__name");
const profileEditButton = profileInfo.querySelector(".profile__edit-button");
const profileDescription = profileInfo.querySelector(".profile__description");

const profileModalForm = document.querySelector("#profile-form");
const profileNameInput = profileModalForm.querySelector("#profile-name");
const profileDescriptionInput = profileModalForm.querySelector(
  "#profile-description"
);

//TODO: Handle opening & submitting PROFILE MODAL

// Instantiate subclass & initalize
const profileModal = new ModalWithForm("#profile-modal", submitProfileForm);
profileModal.setEventListeners();

profileEditButton.addEventListener("click", () => {
  profileModal.open();
  profileNameInput.value = profileName.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
});

function submitProfileForm(values) {
  profileName.textContent = values.firstInput;
  profileDescription.textContent = values.secondInput;

  profileModal.close();

  profileFormValidation.resetValidation();
}

//TODO: Declare CARD section & modal DOM variables

const addCardButton = document.querySelector(".profile__add-button");
const cardsContainer = document.querySelector(".cards__list");
const cardModalForm = document.querySelector("#card-form");

//TODO:  Create new card fxn

function createCard(data) {
  const card = new Card(data, "#card-template", openPreviewModal);
  return card.generateCard();
}

//TODO: handle opening & submitting adding new CARD MODAL

// Instantiate subclass & initalize
const cardModal = new ModalWithForm("#card-modal", submitCardForm);
cardModal.setEventListeners();

addCardButton.addEventListener("click", () => {
  cardModal.open();
});

function submitProfileForm(inputValues) {
  const data = {
    name: inputValues.firstInput,
    link: inputValues.secondInput,
  };

  const cardElement = createCard(data);
  cardsContainer.prepend(cardElement);

  cardModal.close();

  cardFormValidation.resetValidation();
}

//TODO: Render inital cards when page loads

const initialCardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const cardElement = createCard(item);
      initialCardList.addItem(cardElement);
    },
  },
  ".cards__list"
);

initialCardList.renderItems();

//TODO:  Handle opening preview modal on card image click

// Instantiate subclass & initalize
const previewModal = new ModalWithImage("#preview-modal");
previewModal.setEventListeners();

function openPreviewModal(data) {
  previewModal.open(data);
}

//TODO: instantiation of the FormValidator class

const profileFormValidation = new FormValidator(config, profileModalForm);
profileFormValidation.enableValidation();

const cardFormValidation = new FormValidator(config, cardModalForm);
cardFormValidation.enableValidation();

//TODO: import modules
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import ModalWithImage from "../components/ModalWithImage.js";
import ModalWithForm from "../components/ModalWithForm.js";
import UserInfo from "../components/UserInfo.js";

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

//TODO: Handle opening & submitting PROFILE MODAL

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  titleSelector: ".profile__description",
});

// Instantiate subclass & initalize
const profileModal = new ModalWithForm("#profile-modal", submitProfileForm);
profileModal.setEventListeners();

// Open edit profile modal
const profileEditButton = document.querySelector(".profile__edit-button");

const profileNameInput = document.querySelector("#profile-name");
const profileDescriptionInput = document.querySelector("#profile-description");

profileEditButton.addEventListener("click", () => {
  profileModal.open();
  const currentUserInfo = userInfo.getUserInfo();
  profileNameInput.value = currentUserInfo.name;
  profileDescriptionInput.value = currentUserInfo.title;
});

// Submit profile modal form
function submitProfileForm(data) {
  userInfo.setUserInfo(data);

  profileModal.close();

  profileFormValidation.resetValidation();
}

//TODO: Instantiate & initalize class for Rendering cards

const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const cardElement = createCard(item);
      cardList.addItem(cardElement);
    },
  },
  ".cards__list"
);

// Render Inital cards when page loads
cardList.renderItems();

//TODO:  Create new card fxn

function createCard(data) {
  const card = new Card(data, "#card-template", openPreviewModal);
  return card.generateCard();
}

//TODO: handle opening & submitting add-CARD MODAL

// Instantiate subclass & initalize
const cardModal = new ModalWithForm("#card-modal", submitCardForm);
cardModal.setEventListeners();

// Open new card modal
const addCardButton = document.querySelector(".profile__add-button");

addCardButton.addEventListener("click", () => {
  cardModal.open();
});

//Submit new card modal form
function submitCardForm(inputValues) {
  const cardElement = createCard(inputValues);
  cardList.addItem(cardElement);

  cardModal.close();

  cardFormValidation.resetValidation();
}

//TODO:  Handle opening preview modal on card image click

// Instantiate subclass & initalize
const previewModal = new ModalWithImage("#preview-modal");
previewModal.setEventListeners();

function openPreviewModal(data) {
  previewModal.open(data);
}

//TODO: instantiation of the FormValidator class

const profileModalForm = document.querySelector("#profile-form");
const cardModalForm = document.querySelector("#card-form");

const profileFormValidation = new FormValidator(config, profileModalForm);
profileFormValidation.enableValidation();

const cardFormValidation = new FormValidator(config, cardModalForm);
cardFormValidation.enableValidation();

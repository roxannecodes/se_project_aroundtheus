//TODO: import modules
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import ModalWithImage from "../components/ModalWithImage.js";
import ModalWithForm from "../components/ModalWithForm.js";
import UserInfo from "../components/UserInfo.js";
import "./index.css"

import {
  initialCards,
  config,
  profileEditButton,
  addCardButton,
} from "../utils/constants.js";

//TODO: Handle opening & submitting PROFILE MODAL

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  titleSelector: ".profile__description",
});

// Instantiate subclass & initalize
const profileModal = new ModalWithForm("#profile-modal", submitProfileForm);
profileModal.setEventListeners();

// Open edit profile modal
profileEditButton.addEventListener("click", () => {
  profileModal.open();

  const currentInfo = userInfo.getUserInfo();

  profileModal.setInputValues(currentInfo);
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
addCardButton.addEventListener("click", () => {
  cardModal.open();
});

//Submit new card modal form
function submitCardForm(data) {
  const cardElement = createCard(data);
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

//TODO: instantiating & enabling form validators

const profileModalForm = profileModal.getForm();
const cardModalForm = cardModal.getForm();

const profileFormValidation = new FormValidator(config, profileModalForm);
profileFormValidation.enableValidation();

const cardFormValidation = new FormValidator(config, cardModalForm);
cardFormValidation.enableValidation();

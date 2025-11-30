//TODO: import css, class components, & constants

import "./index.css";

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import ModalWithImage from "../components/ModalWithImage.js";
import ModalWithForm from "../components/ModalWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

// TODO: Fetch user info and initial cards from API and render them

let cardList; // to hold Section instance for cards

function renderPage() {
  return Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([userInfoObj, initialCardsArr]) => {
      //render user info
      userInfo.setUserInfo({
        name: userInfoObj.name,
        description: userInfoObj.about,
      });
      //Instantiate & initialize Section class for rendering initial cards
      cardList = new Section(
        {
          items: initialCardsArr,
          renderer: (item) => {
            const cardElement = createCard(item);
            cardList.addItem(cardElement);
          },
        },
        ".cards__list"
      );
      cardList.renderItems();
    })
    .catch((error) => {
      console.error("Problem rendering cards.", error);
    });
}

// Instantiate class for API interactions
const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "4a9d2b77-fdc3-443b-b9f6-848c3f9e0ab5",
    "Content-Type": "application/json",
  },
});

//Instantiate class for getting/setting user info
const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  titleSelector: ".profile__description",
});

// Initial render of user profile & cards on page load
renderPage();

//TODO: Handle opening & submitting [PROFILE MODAL]

// Instantiate subclass & initalize
const profileModal = new ModalWithForm("#profile-modal", submitProfileForm);
profileModal.setEventListeners();

// Open edit profile modal
const profileEditButton = document.querySelector(".profile__edit-button");

profileEditButton.addEventListener("click", () => {
  profileModal.open();
  const currentInfo = userInfo.getUserInfo();
  profileModal.setInputValues(currentInfo);
});

// Submit profile modal form
function submitProfileForm(data) {
  api
    .editUserInfo(data)
    .then((updatedUserInfo) => {
      userInfo.setUserInfo({
        name: updatedUserInfo.name,
        description: updatedUserInfo.about,
      });
      profileModal.close();
      profileFormValidation.resetValidation();
    })
    .catch((error) => {
      console.error("Failed to update user info:", error);
    });
}

//TODO: handle opening & submitting [ADD-CARD MODAL]

// Instantiate subclass & initalize
const cardModal = new ModalWithForm("#card-modal", submitCardForm);
cardModal.setEventListeners();

// ** Open ** add-card modal
const addCardButton = document.querySelector(".profile__add-button");

addCardButton.addEventListener("click", () => {
  cardModal.open();
});

// ** Submit **  add-card modal form
function submitCardForm(data) {
  api
    .addNewCard(data)
    .then((newCardData) => {
      const cardElement = createCard(newCardData);
      cardList.addItem(cardElement);
      cardModal.close();
      cardFormValidation.resetValidation();
    })
    .catch((error) => {
      console.error("Failed to add new card:", error);
    });
}

//TODO:  Handle opening [PREVIEW MODAL] on card image click

// Instantiate subclass & initalize
const previewModal = new ModalWithImage("#preview-modal");
previewModal.setEventListeners();

function openPreviewModal(data) {
  previewModal.open(data);
}

 //TODO: Handle opening & submitting [CONFIRMATION MODAL]  
 
 //instantiate subclass & initalize  
 const confirmationModal = new ModalWithForm(
   "#confirmation-modal",
   submitConfirmationForm
 );
 confirmationModal.setEventListeners();
 
 //Open confirmation modal on delete button click in Card class
 
 function openConfirmationModal() {
   confirmationModal.open();
 }
 
 // Submit confirmation modal form to delete card
 
 function submitConfirmationForm() {
   //call API to delete the card from the server
   // and then remove it from the DOM if the API call is successful.
   confirmationModal.close();
 }


//TODO:  Create [new card function]

function createCard(data) {
  const card = new Card(data, "#card-template", openPreviewModal);
  return card.generateCard();
}

//TODO: instantiating & enabling [form validator] for both modals

export const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__save-button",
  inactiveButtonClass: "modal__save-button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__input-error_active",
};
const profileModalForm = profileModal.getForm();
const cardModalForm = cardModal.getForm();

const profileFormValidation = new FormValidator(config, profileModalForm);
profileFormValidation.enableValidation();

const cardFormValidation = new FormValidator(config, cardModalForm);
cardFormValidation.enableValidation();
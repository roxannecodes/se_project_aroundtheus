//TODO: import css, class components, & constants

import "./index.css";

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import ModalWithImage from "../components/ModalWithImage.js";
import ModalWithForm from "../components/ModalWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

// Instantiate class for API interactions
const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "4a9d2b77-fdc3-443b-b9f6-848c3f9e0ab5",
    "Content-Type": "application/json",
  },
});

//Instantiate class for getting & setting user info
const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  titleSelector: ".profile__description",
});

// TODO: Display the user's profile info and card posts when page loads

let cardList; // to hold Section instance for cards

function renderPage() {
  // Call api to fetch user's current info and cards data
  return (
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      // and then, if successfully reached:
      .then(([userInfoObj, initialCardsArr]) => {
        // Render user info
        userInfo.setUserInfo({
          name: userInfoObj.name,
          description: userInfoObj.about,
        });
        // Instantiate Section class for creating the cards and adding them to the DOM
        cardList = new Section(
          {
            items: initialCardsArr.reverse(),
            renderer: (item) => {
              const cardElement = createCard(item);
              cardList.addItem(cardElement);
            },
          },
          ".cards__list"
        );
        // and ititialize it
        cardList.renderItems();
      })
      .catch((error) => {
        console.error("Error rendering cards:", error);
      })
  );
}

// Inital call to render current user info & cards list
renderPage();

//TODO: Handle opening & submitting [PROFILE MODAL]

// Instantiate edit profile popup subclass
const profileModal = new ModalWithForm("#profile-modal", submitProfileForm);
// and initialize it
profileModal.setEventListeners();

// ** Open ** edit profile modal
const profileEditButton = document.querySelector(".profile__edit-button");

profileEditButton.addEventListener("click", () => {
  profileModal.open();
  // Reset validation errors in case the user previously closed modal containing invalid input data
  profileFormValidation.resetValidation();
  // Get users current info from DOM
  const currentInfo = userInfo.getUserInfo();
  // Set the current values in form inputs
  profileModal.setInputValues(currentInfo);
});

// ** Submit ** profile popup form to edit user's name & about info
function submitProfileForm(data) {
  // Call api to access user's current profile data
  api
    .editUserInfo(data)
    // and update it if successful
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

//TODO: handle opening & submitting [CARD MODAL] to add new card

// Instantiate new card popup subclass
const cardModal = new ModalWithForm("#card-modal", submitCardForm);
// and initialize it
cardModal.setEventListeners();

// ** Open ** new card modal
const addCardButton = document.querySelector(".profile__add-button");

addCardButton.addEventListener("click", () => {
  cardModal.open();
  cardFormValidation.resetValidation();
});

// ** Submit ** the card popup form to add to page
function submitCardForm(data) {
  //call api at the /cards endpoint to store card
  api
    .addNewCard(data)
    // and then create new card and add it the DOM if POST call is successful
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

//TODO:  Handle opening [PREVIEW MODAL] to view a larger card image

// Instantiate the image popup subclass
const previewModal = new ModalWithImage("#preview-modal");
// and initialize it
previewModal.setEventListeners();

// ** Open ** image popup on card image click
function openPreviewModal(data) {
  previewModal.open(data);
}

//TODO: Handle opening & submitting [CONFIRMATION MODAL] to delete card

// Instantiate confirmation popup subclass
const confirmationModal = new ModalWithForm(
  "#confirmation-modal",
  submitConfirmationForm
);
// and initialize it
confirmationModal.setEventListeners();

// ** Open ** confirmation modal on delete button click
let cardToDelete;

function openConfirmationModal(card) {
  cardToDelete = card;
  confirmationModal.open();
  confirmationModal.setInputValues({ cardId: card.cardId });
}

// ** Submit ** confirmation modal form to delete card

function submitConfirmationForm(data) {
  //call API to delete the card
  api
    .deleteCard(data.cardId)
    // and then remove it from the DOM if the API call is successful.
    .then(() => {
      cardToDelete.removeCard();
      cardToDelete = null;
      confirmationModal.close();
    })
    .catch((error) => {
      console.error(`Failed to delete card:${error}`);
    });
}

// TODO: handle [card like-button]

function handleCardLike(card) {
  // If card is already liked, call API w/DELETE request
  if (card.isLiked) {
    api
      .unlikeCard(card.cardId)
      .then(() => {
        // then render flipped like state on page
        card.toggleCardLike();
        // and flip the internal like status
        card.isLiked = !card.isLiked;
      })
      .catch((error) => {
        console.error("Failed to dislike card:", error);
      });
  } else {
    // If card is NOT already liked, call API w/PUT request
    api
      .likeCard(card.cardId)
      .then(() => {
        // then render flipped like state on page
        card.toggleCardLike();
        // and flip the internal like status
        card.isLiked = !card.isLiked;
      })
      .catch((error) => {
        console.error("Failed to like card:", error);
      });
  }
}

//TODO:  Create [new card function]

function createCard(data) {
  const card = new Card(
    data,
    "#card-template",
    openPreviewModal,
    openConfirmationModal,
    handleCardLike
  );
  return card.generateCard();
}

//TODO: [Form validation] for the editing profile and adding a new card popup forms

// Set options object for configuration
const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__save-button",
  inactiveButtonClass: "modal__save-button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__input-error_active",
};

// Search for the forms
const profileModalForm = document.forms["profile-form"];
const cardModalForm = document.forms["card-form"];

//Instantiate validation for both forms
const profileFormValidation = new FormValidator(config, profileModalForm);
const cardFormValidation = new FormValidator(config, cardModalForm);
// and enable them when the page loads
profileFormValidation.enableValidation();
cardFormValidation.enableValidation();

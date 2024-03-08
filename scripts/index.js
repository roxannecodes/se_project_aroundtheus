//TODO: store initial cards (stage 2 )

let initialCards = [
  {
    name: "Yosemite Valley",
    link: "https: //practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
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

for (let i = 0; i < initialCards.length; i++) {
  console.log(initialCards[i].name);
  console.log(initialCards[i].link, "\n");
}

// TODO: Handle modal open and close events (stage 3)
let modal = document.querySelector(".modal");

let editButton = document.querySelector(".profile__edit-button");

editButton.addEventListener("click", () => {
  modal.classList.add("modal_opened");
});

let modalCloseButton = document.querySelector(".modal__close-button");

modalCloseButton.addEventListener("click", () => {
  modal.classList.remove("modal_opened");
});
//TODO: store initial cards info in an array of objects (stage 1 )

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

//TODO: (stage 2 & 4)

for (let i = 0; i < initialCards.length; i++) {
  console.log(initialCards[i].name);
  console.log(initialCards[i].link, "\n");
}

// TODO: Handle modal open and close events (stage 3)

let modal = document.querySelector(".modal");
let profileName = document.querySelector(".profile__name");
let profileDescription = document.querySelector(".profile__description");
let inputName = modal.querySelector(".modal__name");
let inputDescription = modal.querySelector(".modal__description");

let modalOpenButton = document.querySelector(".profile__edit-button");
modalOpenButton.addEventListener("click", () => {
  modal.classList.add("modal_opened");
}
);

let modalCloseButton = modal.querySelector(".modal__close-button");
modalCloseButton.addEventListener("click", () => {
  modal.classList.remove("modal_opened");
}
);

//TODO: Handle submit button events (stage 4-final) 

let modalSubmitButton = modal.querySelector(".modal__save-button");
modalSubmitButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileDescription.textContent = inputDescription.value;
  modal.classList.remove("modal_opened");
}
);

  
    
  
  


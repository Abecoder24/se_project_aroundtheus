import FormValidator from "./FormValidator.js";
import Card from "./Card.js";

const initialCards = [
  { name: "Yosemite Valley", link: "./images/yosemite.png" },
  { name: "Lake Louise", link: "./images/lake-louise.png" },
  { name: "Bald Mountains", link: "./images/bald-mountains.png" },
  { name: "Latemar", link: "./images/latemar.png" },
  {
    name: "Vanoise National Park",
    link: "./images/vanoise-national-park.png",
  },
  { name: "Lago di Braies", link: "./images/lago-di-braies.png" },
];

const previewTitle = document.querySelector(".modal__container-text");
const previewImage = document.querySelector(".modal__preview-image");
const addForm = document.querySelector("#add-form");
const cardInputTitle = document.querySelector(".modal__input_type_title");
const cardInputUrl = document.querySelector(".modal__input_type_url");
const profileCardButton = document.querySelector(".profile__plus-button");
const cardList = document.querySelector(".cards__list");
const cardTemplate = document.querySelector("#card-template");
const profileCloseButton = document.querySelector(".modal__close");
const profileEditButton = document.querySelector(".profile__button");
const profileForm = document.querySelector(".modal__form");
const profileName = document.querySelector(".profile__name");
const profileParagraph = document.querySelector(".profile__paragraph");
const inputName = document.querySelector(".modal__input_type_name");
const inputDecsription = document.querySelector(
  ".modal__input_type_description"
);
const previewModal = document.querySelector("#preview-modal");
const addModal = document.querySelector("#add-modal");
const editModal = document.querySelector("#edit-modal");
const addModalCloseBtn = addModal.querySelector(".modal__close");
const previewCloseBtn = previewModal.querySelector(".modal__close");
// Input function may not need duplicated on line 50 - 54
const fillProfileInputs = () => {
  inputName.value = profileName.textContent;
  inputDecsription.value = profileParagraph.textContent;
};

const openModal = (modal) => {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", closeByEscape);
};

// close modal
const closeModal = () => {
  const modal = document.querySelector(".modal_opened");
  if (modal) {
    modal.classList.remove("modal_opened");
  }
  document.removeEventListener("keydown", closeByEscape);
};

//Inputs

const handlesProfileFormSubmit = (event) => {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileParagraph.textContent = inputDecsription.value;
  closeModal();
};
const handlesNewCards = (event) => {
  event.preventDefault();
  const data = {
    name: cardInputTitle.value,
    link: cardInputUrl.value,
  };
  // const card = getCardElement(data);
  const card = new Card(data, cardTemplate, () => {
    openModal(previewModal);
    previewImage.src = data.link;
    previewImage.alt = data.name;
    previewTitle.textContent = data.name;
  });

  cardList.prepend(card.getView());
  addForm.reset();
  closeModal();
};

//event listeners
document.querySelectorAll(".modal").forEach((e) => {
  e.addEventListener("click", function (e) {
    if (e.target.classList.contains("modal")) {
      closeModal();
    }
  });
});

function closeByEscape(evt) {
  if (evt.key === "Escape") {
    closeModal();
  }
}

profileCloseButton.addEventListener("click", closeModal);
addModalCloseBtn.addEventListener("click", closeModal);
previewCloseBtn.addEventListener("click", closeModal);
profileCardButton.addEventListener("click", () => openModal(addModal));
profileEditButton.addEventListener("click", () => {
  inputName.value = profileName.textContent;
  inputDecsription.value = profileParagraph.textContent;
  openModal(editModal);
});

addForm.addEventListener("submit", handlesNewCards);

profileForm.addEventListener("submit", handlesProfileFormSubmit);
// previewModalCloseButton.addEventListener("click", () => toggle);

function createCard(data) {
  const cardElement = new Card(data, cardTemplate, () => {
    openModal(previewModal);
    previewImage.src = data.link;
    previewImage.alt = data.name;
    previewTitle.textContent = data.name;
  });
  return cardElement.getView();
}
initialCards.forEach((data) => {
  const card = createCard(data);
  cardList.prepend(card);
});

// Using FormValidator Class
const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  ///^make it red
  errorClass: "modal__error_visible",
};
const formEls = [...document.querySelectorAll(config.formSelector)];

formEls.forEach((el) => {
  new FormValidator(config, el).enableValidation();
});

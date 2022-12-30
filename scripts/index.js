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
console.log(previewTitle);
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

// Input function may not need duplicated on line 50 - 54
const fillProfileInputs = () => {
  inputName.value = profileName.textContent;
  inputDecsription.value = profileParagraph.textContent;
};
// open modal ask question about id
const openModal = (modal) => {
  modal.classList.add("modal_opened");
  modal.querySelector(".modal__close").addEventListener("click", closeModal);
};

// close modal
const closeModal = () => {
  const modal = document.querySelector(".modal_opened");
  if (modal) {
    modal.classList.remove("modal_opened");
  }
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
  const card = getCardElement(data);
  cardList.prepend(card);
  addForm.reset();
  closeModal();
};
//event listeners
profileCardButton.addEventListener("click", () => openModal(addModal));
profileEditButton.addEventListener("click", () => {
  inputName.value = profileName.textContent;
  inputDecsription.value = profileParagraph.textContent;
  openModal(editModal);
});

addForm.addEventListener("submit", handlesNewCards);

profileForm.addEventListener("submit", handlesProfileFormSubmit);
// previewModalCloseButton.addEventListener("click", () => toggle);

const getCardElement = (data) => {
  const newCard = cardTemplate.content.cloneNode(true);
  const newCardImage = newCard.querySelector(".card__photo");
  newCardImage.addEventListener("click", () => {
    openModal(previewModal);
    previewImage.src = data.link;
    previewImage.alt = data.name;
    previewTitle.textContent = data.name;
  });

  const likeCardButton = newCard.querySelector(".card__like-button");
  const deleteCard = newCard.querySelector(".card__trash-button");
  const newCardElement = newCard.querySelector(".card");

  likeCardButton.addEventListener("click", () => {
    likeCardButton.classList.toggle("card_background-color");
  });
  deleteCard.addEventListener("click", () => {
    newCardElement.remove();
  });

  newCardImage.src = data.link;
  newCardImage.alt = data.name;
  const newCardTitle = newCard.querySelector(".card__name");
  newCardTitle.textContent = data.name;
  return newCard;
};

initialCards.forEach(function (object) {
  const card = getCardElement(object);
  cardList.prepend(card);
});

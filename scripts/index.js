let initialCards = [
  { name: "Yosemite Valley", link: "./images/yosemite-valley.jpg" },
  { name: "Lake Louise", link: "./images/lake-louise.png" },
  { name: "Bald Mountains", link: "./images/bald-mountains.png" },
  { name: "Latemar", link: "./images/latemar.png" },
  {
    name: "Vanoise National Park",
    link: "./images/vanoise-national-park.png",
  },
  { name: "Lago di Braies", link: "./images/lago-di-braies.png" },
];
const cardList = document.querySelector(".cards__list");
const cardTemplate = document.querySelector("#card-template");
const profileCloseButton = document.querySelector(".modal__close");
const profileEditButton = document.querySelector(".profile__button");
const modal = document.querySelector(".modal");
const modalForm = document.querySelector(".modal__form");
const profileName = document.querySelector(".profile__name");
const profileParagraph = document.querySelector(".profile__paragraph");
const inputName = document.querySelector("#profileNameInput");
const inputDecsription = document.querySelector("#profileDescriptionInput");

const openModal = () => {
  inputName.value = profileName.textContent;
  inputDecsription.value = profileParagraph.textContent;
  modal.classList.add("modal_opened");
};
const closeModal = () => {
  modal.classList.remove("modal_opened");
};

const profileSubmit = (event) => {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileParagraph.textContent = inputDecsription.value;
  closeModal();
};

profileEditButton.addEventListener("click", openModal);
profileCloseButton.addEventListener("click", closeModal);
modalForm.addEventListener("submit", profileSubmit);

const getCardElement = (data) => {
  const newCard = cardTemplate.content.cloneNode(true);
  const newCardImage = newCard.querySelector(".card__photo");
  newCardImage.src = data.link;
  newCardImage.alt = data.name;
  const newCardTitle = newCard.querySelector(".card__name");
  newCardTitle.textContent = data.name;
  return newCard;
};
for (let i = 0; i < initialCards.length; i++) {
  const card = getCardElement(initialCards[i]);
  cardList.appendChild(card);
}

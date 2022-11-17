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
const profileSaveButoon = document.querySelector(".modal__save-button");
const modal = document.querySelector(".modal");
const modalForm = document.querySelector(".modal__form");
const profileName = document.querySelector(".profile__name");
const profilePara = document.querySelector(".profile__paragraph");
const inputModal = document.querySelector(".modal__input_one");
const inputModem = document.querySelector(".modal__input_two");

const openModal = () => {
  inputModal.value = profileName.textContent;
  inputModem.value = profilePara.textContent;
  modal.classList.add("modal_opened");
};
const closedModal = () => {
  modal.classList.remove("modal_opened");
};

const profileSubmit = (event) => {
  event.preventDefault();
  profileName.textContent = inputModal.value;
  profilePara.textContent = inputModem.value;
  console.log("saved", event);
};

profileEditButton.addEventListener("click", openModal);
profileCloseButton.addEventListener("click", closedModal);
modalForm.addEventListener("submit", profileSubmit);

const getCardElement = () => {
  for (let i = 0; i < initialCards.length; i++) {
    const newCard = cardTemplate.content.cloneNode(true);
    const newCardImage = newCard.querySelector(".card__photo");
    newCardImage.src = initialCards[i].link;
    newCardImage.alt = initialCards[i].name;
    const newCardTitle = newCard.querySelector(".card__name");
    newCardTitle.textContent = initialCards[i].name;
    cardList.appendChild(newCard);
  }
};
getCardElement();

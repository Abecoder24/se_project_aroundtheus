export default class Card {
  constructor(data, cardSelector, handleImageClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;

    this._handleImageClick = handleImageClick;
  }

  _setEventListeners() {
    const newCardImage = this._cardElement.querySelector(".card__photo");
    const likeCardButton =
      this._cardElement.querySelector(".card__like-button");
    const deleteCard = this._cardElement.querySelector(".card__trash-button");

    newCardImage.addEventListener("click", this._handleImageClick);

    likeCardButton.addEventListener("click", () => {
      this._handleLikeButton();
    });
    deleteCard.addEventListener("click", () => {
      this._handleDeleteButton();
    });
  }

  _handleDeleteButton() {
    this._cardElement.remove();
  }

  _handleLikeButton() {
    // can i say likeCardButton.classList.toggle?
    this._cardElement
      .querySelector(".card__like-button")
      .classList.toggle("card_background-color");
  }

  getView() {
    this._cardElement = this._cardSelector.content
      .querySelector(".card")
      .cloneNode(true);
    this._setEventListeners();
    // -------------------------------
    // set the data
    this._cardImage = this._cardElement.querySelector(".card__photo");
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    const newCardTitle = this._cardElement.querySelector(".card__name");
    newCardTitle.textContent = this._name;
    return this._cardElement;
  }
}

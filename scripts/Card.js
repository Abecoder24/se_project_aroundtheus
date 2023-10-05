export default class Card {
  constructor({ name, link }, cardSelector, handleImageClick) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
  }

  _setEventListeners() {
    //".card__trash-button"
    deleteCard = this._cardElement
      .querySelector(".card__trash-button")
      .addEventListener("click", () => {
        this._handleLikeButton();
      });
    // ".card__like-button"
    likeCardButton = this._cardElement
      .querySelector(".card__like-button")
      .addEventListener("clikc", () => {
        this._handleDeleteButton();
      });

    //   this._handleImageClick {

    //   }
  }

  _handleDeleteButton() {
    this._cardElement.remove();
  }

  handleLikeButton() {
    // can i say likeCardButton.classList.toggle?
    this._cardElement
      .querySelector(".card__like-button")
      .classList.toggle("card_background-color");
  }

  getView() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    this._setEventListeners();
  }
}

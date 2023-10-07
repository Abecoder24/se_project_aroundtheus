export default class FormValidator {
  constructor(config, formEls) {
    this.config = config;
    this.formEls = formEls;
    this._enableValidation();
  }

  _hideInputError(formEl, inputEl) {
    const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.remove(this.config.inputErrorClass);
    errorMessageEl.textContent = "";
    errorMessageEl.classList.remove(this.config.errorClass);
  }

  _showInputError(formEl, inputEl, { inputErrorClass, errorClass }) {
    const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.add(this.config.inputErrorClass);
    errorMessageEl.textContent = inputEl.validationMessage;
    errorMessageEl.classList.add(this.config.errorClass);
  }

  _checkInputValidity(formEl, inputEl) {
    if (!inputEl.validity.valid) {
      return this._showInputError(formEl, inputEl, this.config);
    }
    this._hideInputError(formEl, inputEl);
  }

  _hasInvalidInput(inputList) {
    return !inputList.every((inputEl) => inputEl.validity.valid);
  }

  _toggleButtonState(inputEls, submitButton) {
    if (this._hasInvalidInput(inputEls)) {
      submitButton.classList.add(this.config.inactiveButtonClass);
      submitButton.disabled = true;
      return;
    }
    submitButton.classList.remove(this.config.inactiveButtonClass);
    submitButton.disabled = false;
  }

  _setEventListeners(formEl) {
    const { inputSelector } = this.config;
    const inputEls = [...formEl.querySelectorAll(inputSelector)];
    const submitButton = formEl.querySelector(this.config.submitButtonSelector);
    inputEls.forEach((inputEl) => {
      inputEl.addEventListener("input", (e) => {
        this._checkInputValidity(formEl, inputEl);
        this._toggleButtonState(inputEls, submitButton);
      });
    });
  }

  _enableValidation(options) {
    // formEl is one of the elements for formEls
    this.formEls.forEach((formEl) => {
      formEl.addEventListener("submit", (e) => {
        e.preventDefault();
      });

      this._setEventListeners(formEl, options);
    });
  }
}

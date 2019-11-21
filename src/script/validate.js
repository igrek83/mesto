import {titleInput, nameInput, avatarInput, imageInput, aboutInput, addFirstForm, addSecondForm, addAvatarForm} from "./global.js";
//класс с валидацией, аргумент конструктора - поле ввода
export class Validate {
  constructor(input) {
    this.input = input;
    this.input.addEventListener(`input`, this.handleValidate.bind(this)); 
  }
  validate() {
    let button = this.input.parentNode.querySelector(".popup__button");
    if (!this.input.checkValidity()) {
      this.errorMessage();
      button.classList.remove(`popup__button_color_black`);
      button.classList.add(`popup__button_color_white`);
      button.setAttribute(`disabled`, `true`);
    } 
    if (this.input.checkValidity()) {
      this.resetError();
      if (titleInput.checkValidity() && imageInput.checkValidity()) {
        addFirstForm.classList.add(`popup__button_color_black`);
        addFirstForm.classList.remove(`popup__button_color_white`);
        addFirstForm.removeAttribute(`disabled`);
      }
      if (nameInput.checkValidity() && aboutInput.checkValidity()) {
        addSecondForm.classList.add(`popup__button_color_black`);
        addSecondForm.classList.remove(`popup__button_color_white`);
        addSecondForm.removeAttribute(`disabled`);
      }
      if (avatarInput.checkValidity()) {
        addAvatarForm.classList.add(`popup__button_color_black`);
        addAvatarForm.classList.remove(`popup__button_color_white`);
        addAvatarForm.removeAttribute(`disabled`);
      }
    }
  }
  errorMessage() {
    let element = this.input;
    let error = element.nextElementSibling;
    error.classList.add(`popup__openerr`);
    if (element.validity.valueMissing === true) {
      error.textContent = "Это обязательное поле";
    }
    if (element.validity.tooShort === true) {
      error.textContent = "Должно быть от 2 до 30 символов";
    }
    if ((!imageInput.checkValidity() && element.name === `link`) || !avatarInput.checkValidity() && element.name === `avatar`) {
      error.textContent = "Здесь должна быть ссылка";
    }
  }
  resetError() {
    this.input.nextElementSibling.classList.remove(`popup__openerr`);
    this.input.nextElementSibling.texcontent = '';
  }
  handleValidate(event) {
    this.validate(event.target);
  }
}
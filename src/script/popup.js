import {nameInput, aboutInput, userName, userAbout, imageForm, aboutForm, avatarForm, addFirstForm, addSecondForm} from "./global.js";
export class Popup {
    constructor(container, element) {
      this.container = container;
      this.element = element;
      this.adding();
      this.element,addEventListener(`click`, this.open);
      this.container.querySelector(`.popup__close`).addEventListener(`click`, this.close);
    }
    open(event) {
      if(event.target.classList.contains(`user-info__button`)) {
        document.querySelector(".popup").classList.add(`popup_is-opened`);
        document.querySelector("#popupEdit").classList.add(`popup__content_display_none`);
        document.querySelector("#popupAvatar").classList.add(`popup__content_display_none`);
        document.querySelector("#langeImage").classList.add(`popup__content_display_none`);
      }
      if(event.target.classList.contains(`user-info__buttons`)) {
        document.querySelector(".popup").classList.add(`popup_is-opened`);
        document.querySelector("#popupImage").classList.add(`popup__content_display_none`);
        document.querySelector("#popupAvatar").classList.add(`popup__content_display_none`);
        document.querySelector("#langeImage").classList.add(`popup__content_display_none`);
        nameInput.setAttribute(`value`, userName.textContent);                                        /*value - в поле "имя"*/
        aboutInput.setAttribute(`value`, userAbout.textContent);                                      /*value - в поле "о себе"*/
      }
      if(event.target.classList.contains(`user-info__photo`)) {
        document.querySelector(".popup").classList.add(`popup_is-opened`);
        document.querySelector("#popupImage").classList.add(`popup__content_display_none`);
        document.querySelector("#popupEdit").classList.add(`popup__content_display_none`);
        document.querySelector("#langeImage").classList.add(`popup__content_display_none`);
      }
      if(event.target.classList.contains(`place-card__image`)) {
        document.querySelector(".popup").classList.add(`popup_is-opened`);
        document.querySelector("#popupImage").classList.add(`popup__content_display_none`);
        document.querySelector("#popupEdit").classList.add(`popup__content_display_none`);
        document.querySelector("#popupAvatar").classList.add(`popup__content_display_none`);
        document.querySelector(`.popup__lange-image`).setAttribute(`src`, event.target.style.backgroundImage.slice(5, -2));
      }  
    }
    close() {
      document.querySelector(".popup").classList.remove(`popup_is-opened`);
      document.querySelector("#popupImage").classList.remove(`popup__content_display_none`);
      document.querySelector("#popupEdit").classList.remove(`popup__content_display_none`);
      document.querySelector("#popupAvatar").classList.remove(`popup__content_display_none`);
      document.querySelector("#langeImage").classList.remove(`popup__content_display_none`);
      document.querySelector(`#imageButton`).classList.remove(`popup__button_color_black`);
      document.querySelector(`#imageButton`).classList.add(`popup__button_color_white`);
      document.querySelector(`#imageButton`).setAttribute("disabled", "true");
      document.querySelector(`#avatarButton`).classList.remove(`popup__button_color_black`);
      imageForm.reset();
      aboutForm.reset();
      avatarForm.reset();
      //titleValidate.resetError();
      //imageValidate.resetError();
     // nameValidate.resetError();
     // aboutValidate.resetError();
     // avatarValidate.resetError();
    }
    adding() {
      addFirstForm.classList.add(`popup__button_color_white`);
      addFirstForm.classList.remove(`popup__button_color_black`);
      addFirstForm.setAttribute(`disabled`, `true`);
      addSecondForm.classList.add(`popup__button_color_black`);
      addSecondForm.classList.remove(`popup__button_color_white`);
      addSecondForm.removeAttribute(`disabled`);
      document.querySelector(`#avatarButton`).classList.add(`popup__button_color_white`);
      document.querySelector(`#avatarButton`).setAttribute(`disabled`, `true`);
    }
}
import {titleInput, imageInput, nameInput, aboutInput, avatarInput, userName, userAbout, imageForm, aboutForm, avatarForm, addFirstForm, addSecondForm, addAvatarForm} from "./global.js";
import {Validate} from "./validate.js";
const titleValidate = new Validate(titleInput);                                                    
const imageValidate = new Validate(imageInput);
const nameValidate = new Validate(nameInput);
const aboutValidate = new Validate(aboutInput);
const avatarValidate = new Validate(avatarInput);
const popupImage = document.querySelector("#popupImage");
const popupEdit = document.querySelector("#popupEdit");
const popupAvatar = document.querySelector("#popupAvatar");
const popupBigImage = document.querySelector("#langeImage");
const popup = document.querySelector(".popup");                                              
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
        popup.classList.add(`popup_is-opened`);
        popupEdit.classList.add(`popup__content_display_none`);
        popupAvatar.classList.add(`popup__content_display_none`);
        popupBigImage.classList.add(`popup__content_display_none`);
      }
      if(event.target.classList.contains(`user-info__buttons`)) {
        popup.classList.add(`popup_is-opened`);
        popupImage.classList.add(`popup__content_display_none`);
        popupAvatar.classList.add(`popup__content_display_none`);
        popupBigImage.classList.add(`popup__content_display_none`);
        nameInput.setAttribute(`value`, userName.textContent);                                        /*value - в поле "имя"*/
        aboutInput.setAttribute(`value`, userAbout.textContent);                                      /*value - в поле "о себе"*/
      }
      if(event.target.classList.contains(`user-info__photo`)) {
        popup.classList.add(`popup_is-opened`);
        popupImage.classList.add(`popup__content_display_none`);
        popupEdit.classList.add(`popup__content_display_none`);
        popupBigImage.classList.add(`popup__content_display_none`);
      }
      if(event.target.classList.contains(`place-card__image`)) {
        popup.classList.add(`popup_is-opened`);
        popupImage.classList.add(`popup__content_display_none`);
        popupEdit.classList.add(`popup__content_display_none`);
        popupAvatar.classList.add(`popup__content_display_none`);
        document.querySelector(`.popup__lange-image`).setAttribute(`src`, event.target.style.backgroundImage.slice(5, -2));
      }  
    }
    close() {
      popup.classList.remove(`popup_is-opened`);
      popupImage.classList.remove(`popup__content_display_none`);
      popupEdit.classList.remove(`popup__content_display_none`);
      popupAvatar.classList.remove(`popup__content_display_none`);
      popupBigImage.classList.remove(`popup__content_display_none`);
      addFirstForm.classList.remove(`popup__button_color_black`);
      addFirstForm.classList.add(`popup__button_color_white`);
      addFirstForm.setAttribute("disabled", "true");
      addSecondForm.classList.remove(`popup__button_color_white`);
      addSecondForm.classList.add(`popup__button_color_black`);
      addSecondForm.removeAttribute(`disabled`);
      addAvatarForm.classList.remove(`popup__button_color_black`);
      addAvatarForm.classList.add("popup__button_color_white");
      addAvatarForm.setAttribute("disabled", "true");
      imageForm.reset();
      aboutForm.reset();
      avatarForm.reset();
      titleValidate.resetError();
      imageValidate.resetError();
      nameValidate.resetError();
      aboutValidate.resetError();
      avatarValidate.resetError();
    }
    adding() {
      addFirstForm.classList.add(`popup__button_color_white`);
      addFirstForm.classList.remove(`popup__button_color_black`);
      addFirstForm.setAttribute(`disabled`, `true`);
      addSecondForm.classList.add(`popup__button_color_black`);
      addSecondForm.classList.remove(`popup__button_color_white`);
      addSecondForm.removeAttribute(`disabled`);
      addAvatarForm.classList.add(`popup__button_color_white`);
      addAvatarForm.classList.remove(`popup__button_color_black`);
      addAvatarForm.setAttribute(`disabled`, `true`);
    }
}
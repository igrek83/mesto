import {userName, userAbout, avatarButton} from "./global.js";
export class Edit {
    constructor() {
    }
    renderEdit(element) {
      userName.textContent = element.name;
      userAbout.textContent = element.about;
      avatarButton.style.backgroundImage = `url(${element.avatar})`;
    }
    renderErrorEdit(element) {
      userName.textContent = element;
      userAbout.textContent = element;
      avatarButton.textContent = element;
    }
  }
//класс с API
import {initialCards} from "./array.js";
import {Edit} from "./edit.js";
import {CardList} from "./cardList.js";
import {Popup} from "./popup.js";
const firstContent = new Popup(document.querySelector(`#popupImage`), document.querySelector("user-info__button"));                   //попуп, добавление картинок
const secondContent = new Popup(document.querySelector(`#popupEdit`), document.querySelector(".user-info__buttons"));                 //попуп, редактирующий профиль
const avatarContent = new Popup(document.querySelector(`#popupAvatar`), document.querySelector(".user-info__photo"));                 //попуп, аватар
const redactorEdit = new Edit();
const cardListImage = new CardList(document.querySelector(".places-list"), "");                     //аргументы: элемент DOM, в котором лежат карточки и массив с карточками
export class Api {
  constructor(baseUrl, authorization) {
    this.bazeUrl = baseUrl;
    this.authorization = authorization;
    this.serverAbout();
    this.serverCard();
  }
  //получаю с сервера заполнение полей "Имя", "О себе" и аватар
  serverAbout() {
    fetch(this.bazeUrl + "users/me", {
      method: 'GET',
      headers: {
        authorization: this.authorization
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        else {
          return Promise.reject("нет связи с сервером, попробуйте еще раз");
        }
      })
      .then((result) => {
        redactorEdit.renderEdit(result);
      })
      .catch((error) => {
        redactorEdit.renderErrorEdit(error);
      })
  }
  //метод, отправляющий значения полей формы 2 "Имя" и "о себе"на сервер при субмите. Использую в редактировании профиля 
  initialNameAbout(name, about, aboutUrl) {
    fetch(this.bazeUrl + aboutUrl, {
      method: 'PATCH',
      headers: {
        authorization: this.authorization,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        about: about,
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        else {
          return Promise.reject("нет связи с сервером, попробуйте еще раз");
        }
      })
      .then(() => {
        secondContent.close();
      })
  }
  //метод, отправляющий аватар на сервер
  initialAvatar(avatar, avatarUrl) {
    fetch(this.bazeUrl + avatarUrl, {
      method: 'PATCH',
      headers: {
        authorization: this.authorization,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: avatar
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        else {
          return Promise.reject("нет связи с сервером, попробуйте еще раз");
        }
      })
      .then(() => {
        avatarContent.close();
      })
  }
  //метод, принимающий картинки с сервера
  serverCard() {
    fetch(this.bazeUrl + "cards", {
      method: 'GET',
      headers: {
        authorization: this.authorization
      },
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        else {
          return Promise.reject(initialCards);
        }
      })
      .then((result) => {
        cardListImage.render(result);
      })
      .catch((error) => {
        cardListImage.render(error);
      });
  };
  //метод, отправляющий добавленные карточки на сервер. Использую в добавлении новых карточек
  initialCard(name, link) {
    fetch(this.bazeUrl + "cards", {
      method: 'POST',
      headers: {
        authorization: this.authorization,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        link: link
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        else {
          return Promise.reject("нет связи с сервером");
        }
      })
      .then(() => {
        firstContent.close();
      })
      .catch((err) => {
        console.log(err);
      })
  }
  delete(id) {
    fetch(this.bazeUrl + "cards/" + id, {
      method: 'DELETE',
      headers: {
        authorization: 'd237845d-1acc-4f45-87df-e31543b7d977',
        'Content-Type': 'application/json'
      },
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
  }
}
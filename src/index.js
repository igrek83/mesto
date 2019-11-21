import {imageForm, aboutForm, avatarForm} from "./script/global.js";
import {titleInput, imageInput, nameInput, aboutInput, avatarInput, userName, userAbout} from "./script/global.js";
import "./style.css";
import {Validate} from "./script/validate.js";
import {CardList} from "./script/cardList.js";
import {Api} from "./script/api.js";
import {Popup} from "./script/popup.js";
const serverUrl = NODE_ENV === 'development' ? 'http://praktikum.tk/cohort4/' : 'https://praktikum.tk/cohort4/';
const api = new Api(serverUrl, "d237845d-1acc-4f45-87df-e31543b7d977");
const cardListImage = new CardList(document.querySelector(".places-list"), "");                                                     //аргументы: элемент DOM, в котором лежат карточки и массив с карточками
const titleValidate = new Validate(titleInput);                                                    
const imageValidate = new Validate(imageInput);
const nameValidate = new Validate(nameInput);
const aboutValidate = new Validate(aboutInput);
const avatarValidate = new Validate(avatarInput);
const imageContent = new Popup(document.querySelector(`#langeImage`));                                                                //попуп с большой картинкой
//меняю аватар
const avatarEdit = event => {
    event.preventDefault();
    function avatarLink(link) {
      document.querySelector(".user-info__photo").style.backgroundImage = `url(${link})`;
    }
      let avatar = avatarForm.elements.avatar;
      api.initialAvatar(avatar.value, "users/me/avatar");
      avatarLink(avatar.value);
      avatarForm.reset();
  }
  /*редактирую профиль*/
  const editProfile = event =>  {
    event.preventDefault();
    function profileAdd(nameValue, userAboutValue) {
      userName.textContent = nameValue;
      userAbout.textContent = userAboutValue;
    }
      let name = aboutForm.elements.name;
      let about = aboutForm.elements.about;
      api.initialNameAbout(name.value, about.value, "users/me");
      profileAdd(name.value, about.value);
      nameInput.setAttribute(`value`, userName.textContent);
      aboutInput.setAttribute(`value`, userAbout.textContent);
      aboutForm.reset();
  }
  //добавляю карточку                                                                        
  const  addCards = event => {
    event.preventDefault();
      let title = imageForm.elements.title;
      let link = imageForm.elements.link;
      api.initialCard(title.value, link.value);
      cardListImage.addcard(title.value, link.value);
      api.serverCard();
      imageForm.reset();
  };
//слушатели
imageForm.addEventListener("submit", addCards);
aboutForm.addEventListener(`submit`, editProfile);                 
avatarForm.addEventListener(`submit`, avatarEdit);
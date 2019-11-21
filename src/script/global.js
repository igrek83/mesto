const avatarButton = document.querySelector(".user-info__photo");                                   //вызов формы с аватаром
const titleInput = document.querySelector(`.popup__input[name="title"]`);                           /*инпут - название картинки*/
const imageInput = document.querySelector(`.popup__input[name="link"]`);                            /*инпут - ссылка*/
const nameInput = document.querySelector(`.popup__input[name="name"]`);                             /*инпут - Имя*/
const aboutInput = document.querySelector(`.popup__input[name="about"]`);                           /*Инпут - о себе*/
const avatarInput = document.querySelector(`.popup__input[name="avatar"]`);                         //Инпут на аватар                                           
const imageForm = document.forms.image;                                                             //первая форма
const aboutForm = document.forms.edit;                                                              //вторая форма
const avatarForm = document.forms.avatar;                                                           //третья форма
const userName = document.querySelector(`.user-info__name`);                                        //имя
const userAbout = document.querySelector(`.user-info__job`);                                        //о себе
const addFirstForm = document.querySelector(`#imageButton`);                                        /*плюс в форме, добавляющий картинки*/
const addSecondForm = document.querySelector(`#editButton`);                                        /*"сохранить" в форме, редактирующая профиль*/
const addAvatarForm = document.querySelector(`#avatarButton`);                                      //кнопка, меняющая аватар
export {avatarButton, titleInput, imageInput, nameInput, aboutInput, avatarInput, imageForm, aboutForm, avatarForm, userName, userAbout, addFirstForm, addSecondForm, addAvatarForm};
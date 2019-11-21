//класс, создающий DOM карточки, аргументы - имя и ссылка, методы: создание карточки и лайк/удаление карточки
export class Card {
    constructor(name, link, id) {
      this.cardElement = this.create(name, link, id);
      document.querySelector(".places-list").addEventListener("click", this.myFuncList);         
    }
    //DOM карточки
    create(nameValue, imageValue, id) {
      const container = document.createElement(`div`);
      const ImageElement = document.createElement(`div`);
      const deleteElement = document.createElement(`button`);
      const DescriptionElement = document.createElement(`div`);
      const NameElement = document.createElement(`h3`);
      const containers = document.createElement(`div`);
      const LikeElement = document.createElement(`button`);
      const counter = document.createElement(`div`);
      container.classList.add(`place-card`);
      ImageElement.classList.add(`place-card__image`);
      deleteElement.classList.add(`place-card__delete-icon`);
      DescriptionElement.classList.add(`place-card__description`);
      NameElement.classList.add(`place-card__name`);
      containers.classList.add(`place-card__containers`);
      LikeElement.classList.add(`place-card__like-icon`);
      counter.classList.add(`place-card__counter`);
      container.append(ImageElement);
      container.append(DescriptionElement);
      ImageElement.append(deleteElement);
      DescriptionElement.append(NameElement);
      DescriptionElement.append(containers);
      containers.append(LikeElement);
      containers.append(counter);
      container.setAttribute("data-id", id);
      counter.textContent = container.dataset.like;
      NameElement.textContent = nameValue;
      const link = `url(${imageValue})`;
      ImageElement.style.backgroundImage = link;
      return container;
    }
    myFuncList(event) {
      if(event.target.closest('.place-card__like-icon')) {
        event.target.classList.toggle('place-card__like-icon_liked');
      }
      if(event.target.closest('.place-card__delete-icon')) {
        const image = event.target.closest(`.place-card`);
        let id = image.dataset.id;
        //окно подтверждения, если нажимаем Ok, карточка удаляется
        /*if (window.confirm("Вы действительно хотите удалить эту карточку?")) {
          api.delete(id); */ 
          image.parentNode.removeChild(image);
      }
    }
}
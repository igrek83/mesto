//класс, аргументы в конструкторе - элемент DOM, содержащий карточки и массив. Методы: добавляющий карточки, добавляющий массив
import {Card} from "./card.js";
export class CardList {
  constructor(container, array) {
    this.container = container;
    this.cards = [];
    this.render(array);
  }
  addcard(name, link, id) {
    const { cardElement } = new Card(name, link, id);
    this.cards.push(cardElement);
    this.container.append(cardElement);
  }
  //добавляем карточки из массива
  render(array) {
    for (let i = 0; i < array.length; i++) {
      this.addcard(array[i]["name"], array[i]["link"], array[i]["_id"]);
    }
  }
}
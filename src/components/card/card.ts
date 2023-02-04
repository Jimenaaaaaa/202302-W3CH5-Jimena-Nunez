/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { CardStructure } from '../../models/card-structure';
import { Component } from '../component/component';
import './card.scss'

export class Card extends Component {
  constructor(public selector: string, public card: CardStructure) {
    super();
    this.template = this.createTemplate();
    this.render('beforeend');
  }

  createTemplate() {
    return `<li>
    <img src="${this.card.artwork}" alt="">
    <p>${this.card.name}</p>
    </li>`;
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
    // A;adir aqui los add event listeners
  }
}

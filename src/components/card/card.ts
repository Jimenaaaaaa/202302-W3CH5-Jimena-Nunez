/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { CardStructure } from '../../models/card-structure';
import { Component } from '../component/component';
import './card.scss';

export class Card extends Component {
  constructor(public selector: string, public card: CardStructure) {
    super();
    this.template = this.createTemplate();
    this.render('beforeend');
  }

  createTemplate() {
    return `<li>
    <img class="pokeImage" src="${this.card.artwork}" alt="">
    <span>
      <p># ${this.card.id}  -  ${this.card.name}</p>
      <div>
       <img class="star" src="../../../star.png" alt="">
       </div>
    </span>
    </li>`;
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
    // A;adir aqui los add event listeners
  }
}

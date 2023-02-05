/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
import { CardStructure } from '../../models/card-structure';
import { PokemonApiRepo } from '../../services/repository/pokemon.api.repo';
import { Card } from '../card/card';
import { Component } from '../component/component';
import './pokemon-list.scss';

export class PokemonList extends Component {
  public pokemons!: any[];
  constructor(public selector: string, public repo: PokemonApiRepo) {
    super();
    this.pokemons = [];
    this.template = this.createTemplate();
    this.load();
  }

  async load() {
    this.pokemons = await this.repo.loadCards();
    this.render('beforeend');
  }

  render(place: globalThis.InsertPosition) {
    // (document.querySelector('main') as HTMLElement).innerHTML = '';
    super.render(place);
    this.pokemons.forEach((item) => {
      new Card('ul', item);
    });
  }

  createTemplate() {
    return `<section class="cards"><ul></ul></section>`;
  }
}

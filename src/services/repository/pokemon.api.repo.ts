/* eslint-disable no-unused-vars */
import { CardStructure, ProtoCardStructure } from '../../models/card-structure';

export interface PokemonApiRepoStructure {
  loadCards(): Promise<CardStructure[]>;
  getCard(id: CardStructure['id']): Promise<CardStructure>;
  createCard(Card: ProtoCardStructure): Promise<CardStructure>;
  update(Card: Partial<ProtoCardStructure>): Promise<CardStructure>;
  delete(id: CardStructure['id']): Promise<void>;
}

export class PokemonApiRepo {
  url: string;
  constructor() {
    this.url = 'https://pokeapi.co/api/v2/pokemon';
  }

  // loadCards() {
  //   fetch(this.url)
  //     .then((resp) => resp.json())
  //     .then((allpokemon) => {
  //       allpokemon.results.forEach((pokemon) => {
  //         this.fetchCard(pokemon);
  //       });
  //     });
  // }

  // fetchCard(pokemon: CardStructure) {
  //   let url = pokemon.url; // <--- this is saving the pokemon url avariable to us in a fetch.(Ex: https://pokeapi.co/api/v2/pokemon/1/)
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((pokeData) => {
  //       console.log(pokeData);
  //     });
  // }

  async loadCards(): Promise<PokemonApiRepoStructure[]> {
    const resp = await fetch(this.url);
    const data = await resp.json();

    const pokemonArray = Object.values(data.results);

    const promise = pokemonArray.map(async (pokemon: any) => {
      let url = pokemon.url;
      const response = await fetch(url);
      return response.json();
    });

    const pokeData = await Promise.all(promise);
    const pokeStructure: any[] = pokeData.map((pokemon) => ({
      id: pokemon.id,
      name: pokemon.name,
      artwork:
        pokemon.sprites.versions['generation-i'].yellow['front_transparent'],
    }));
    return pokeStructure;
  }

  createCard() {}

  update() {}

  delete() {}

  // Async loadCards(): Promise<CardStructure[]> {
  //   const resp = fetch(this.url);
  //   const data = await resp.json();
  //   return data;
  // }
}

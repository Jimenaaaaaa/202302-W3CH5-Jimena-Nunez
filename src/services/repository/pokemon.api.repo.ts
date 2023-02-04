// /* eslint-disable no-unused-vars */
// import { CardStructure, ProtoCardStructure } from '../../models/card-structure';

// export interface PokemonApiRepoStructure {
//   loadCards(): Promise<CardStructure[]>;
//   getCard(id: CardStructure['id']): Promise<CardStructure>;
//   createCard(Card: ProtoCardStructure): Promise<CardStructure>;
//   update(Card: Partial<ProtoCardStructure>): Promise<CardStructure>;
//   delete(id: CardStructure['id']): Promise<void>;
// }

// export class PokemonApiRepo {
//   url: string;
//   constructor() {
//     this.url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
//   }

//   // async loadCards(): Promise<CardStructure[]> {
//   //   const resp = fetch(this.url);
//   //   const data = await resp.json();
//   //   return data;
//   // }

//   async loadCards() {
//     fetch(this.url)
//       .then((resp) => resp.json())
//       .then((allpokemon) => {
//         allpokemon.results.forEach((pokemon) => {
//           fetchData(pokemon);
//         });
//       });
//   }
// }

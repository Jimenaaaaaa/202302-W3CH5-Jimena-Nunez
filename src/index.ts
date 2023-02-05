/* eslint-disable no-new */

import { Header } from './components/header/header';
import './index.scss';
import { PokemonApiRepo } from './services/repository/pokemon.api.repo';
import { PokemonList } from './components/pokemons-list/pokemon-list';

new Header('main');
new PokemonList('main', new PokemonApiRepo());

import { CardStructure } from './models/card-structure';
import { Card } from './components/card/card';
import { Header } from './components/header/header';
import './index.scss';

const bulbasaur = new CardStructure(
  'bulbasaur',
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/1.png'
  // False
);

new Header('main');
new Card('ul', bulbasaur);

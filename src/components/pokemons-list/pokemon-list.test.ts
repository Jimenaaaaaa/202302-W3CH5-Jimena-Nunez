/* eslint-disable no-unused-vars */
import { screen, fireEvent } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { CardStructure } from '../../models/card-structure';
import { PokemonApiRepo } from '../../services/repository/pokemon.api.repo';
import { PokemonList } from './pokemon-list';

describe('Given the pokemon-list component', () => {
  document.body.innerHTML = '<main></main>';
  const loadMock = jest.fn();
  const mockCard: CardStructure = new CardStructure(
    'bulbasaur',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/1.png'
  );
  const element: PokemonList = new PokemonList('main', new PokemonApiRepo());
  // test('It should be in the document', () => {
  //   expect(element).toBeInstanceOf(PokemonList);
  // });
  // test('It render the card in the document', () => {
  //       const li = screen.getByRole('listitem');
  //       expect(p).toBeInTheDocument();
  //       const bulbasaur = screen.getByText(mockCard.name);
  //       expect(bulbasaur).toBeInTheDocument();
  // });
});

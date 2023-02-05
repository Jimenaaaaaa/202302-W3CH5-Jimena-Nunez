/* eslint-disable no-unused-vars */
import { screen, fireEvent } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { CardStructure } from '../../models/card-structure';
import { Card } from './card';

describe('Given Card component', () => {
  document.body.innerHTML = '<main></main>';
  const mockCard: CardStructure = new CardStructure(
    'bulbasaur',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/1.png'
  );
  const element: Card = new Card('main', mockCard);

  test('It should be in the document', () => {
    expect(element).toBeInstanceOf(Card);
  });
  test('It render the card in the document', () => {
    const li = screen.getByRole('listitem');
    expect(li).toBeInTheDocument();
    const bulbasaur = screen.getByText(mockCard.name);
    expect(bulbasaur).toBeInTheDocument();
  });
});

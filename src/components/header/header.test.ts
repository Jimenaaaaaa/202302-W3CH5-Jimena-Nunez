/* eslint-disable no-unused-vars */
import { screen, fireEvent } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Header } from './header';

describe('Given Header component', () => {
  document.body.innerHTML = '<main></main>';
  const header: Header = new Header('main');

  test('It should be in the document', () => {
    expect(header).toBeInstanceOf(Header);
  });
  test('It render the card in the document', () => {
    const header2 = screen.getByTitle('Header');
    expect(header2).toBeInTheDocument();
  });
});

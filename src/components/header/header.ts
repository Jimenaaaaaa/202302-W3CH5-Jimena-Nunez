/* eslint-disable no-unused-vars */
import { Component } from '../component/component';
import './header.scss';

export class Header extends Component {
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.render('beforebegin');
  }

  createTemplate() {
    return `
    <header title="Header">
      <img src="./pokemon-logo.svg" alt="">
    <header>
    `;
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
  }
}

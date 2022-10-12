import { Shape } from './shape.js';

export class Square extends Shape {
  constructor( { size, position } ) {
    super({ size, position });

    this.classList.add('square');
  }
}

customElements.define('square-elem', Square, { extends: 'div' });

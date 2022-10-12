import { Shape } from './shape.js';

export class Circle extends Shape {
  constructor( { size, position } ) {
    super({ size, position });

    this.classList.add('circle');
  }
}

customElements.define('circle-elem', Circle, { extends: 'div' });

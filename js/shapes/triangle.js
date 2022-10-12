import { Shape } from './shape.js';

export class Triangle extends Shape {
  constructor( { size, position } ) {
    super({ size, position });

    this.classList.add('triangle');
    this.style.borderWidth = `${parseInt(size) / 2}px`;
  }

  highlight() {
    this.classList.add('triangle_highlighted');
  }

  cleanHighlight() {
    this.classList.remove('triangle_highlighted');
  }
}

customElements.define('triangle-elem', Triangle, { extends: 'div' });

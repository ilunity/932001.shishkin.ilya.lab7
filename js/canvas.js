import { Shape } from './shapes/shape.js';

export class Canvas extends HTMLDivElement {
  size;
  #highlightedShape;

  constructor( size ) {
    super();

    this.size = size;

    this.className = 'canvas';

    this.style.width = size.width;
    this.style.height = size.height;

    this.addEventListener('click', this.#highlightShape);
  }

  #highlightShape( event ) {
    const target = event.target;
    if (!(target instanceof Shape)) {
      return;
    }

    if (this.#highlightedShape) {
      if (this.#highlightedShape === target) {
        return;
      }
      this.#highlightedShape.cleanHighlight();
    }

    this.#highlightedShape = target;
    this.#highlightedShape.highlight();
  }
}

customElements.define('canvas-elem', Canvas, { extends: 'div' });

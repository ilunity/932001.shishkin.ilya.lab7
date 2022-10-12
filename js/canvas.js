export class Canvas extends HTMLDivElement {
  size;

  constructor( size ) {
    super();

    this.size = size;

    this.className = 'canvas';

    this.style.width = size.width;
    this.style.height = size.height;
    this.style.position = 'relative';
  }
}

customElements.define('canvas-elem', Canvas, { extends: 'div' });

export class Shape extends HTMLDivElement {
  constructor( { size, position } ) {
    super();

    this.className = 'shape';

    this.style.width = size;
    this.style.height = size;

    this.style.top = position.y;
    this.style.left = position.x;

    this.addEventListener('dblclick', this.close);
  }

  close() {
    this.remove();
  }
}

customElements.define('shape-elem', Shape, { extends: 'div' });

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

  highlight() {
    this.classList.add('shape_highlighted');
  }

  cleanHighlight() {
    this.classList.remove('shape_highlighted');
  }
}

customElements.define('shape-elem', Shape, { extends: 'div' });

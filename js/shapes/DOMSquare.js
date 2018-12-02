export default class DOMSquare {
  constructor(parent, element, width, backgroundColor) {
    this.parent = parent;
    this.element = document.createElement(element);
    this.width = this.height = width;
    this.backgroundColor = backgroundColor;
    this.renderDomSquare();
  }

  renderDomSquare() {
    this.element.style.width = this.element.style.height = this.width + 'px';
    this.element.style.backgroundColor = this.backgroundColor;
    this.parent.appendChild(this.element);
  }
}
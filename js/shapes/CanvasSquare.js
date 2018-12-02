export default class CanvasSquare {
  constructor(x, y, width, height, fillStyle, strokeStyle, lineWidth) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.fillStyle = fillStyle;
    this.strokeStyle = strokeStyle;
    this.lineWidth = lineWidth;

    this.renderCanvasRect();
  }

  renderCanvasRect() {
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.fillStyle = this.fillStyle;
    ctx.strokeStyle = this.strokeStyle;
    ctx.lineWidth = this.lineWidth;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.strokeRect(this.x, this.y, this.width, this.height);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  }
}
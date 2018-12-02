export default class CanvasRound {
  constructor(centerX, centerY, diameter, fillStyle, strokeStyle, lineWidth) {
    this.centerX = centerX;
    this.centerY = centerY;
    this.diameter = diameter;

    this.startAngle = 0;
    this.endAngle = 2 * Math.PI;
    this.antiClockWise = false;

    this.fillStyle = fillStyle;
    this.strokeStyle = strokeStyle;
    this.lineWidth = lineWidth;

    this.renderCanvasRound();
  }

  renderCanvasRound() {
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.arc(
      this.centerX + this.diameter / 2,
      this.centerY + this.diameter / 2,
      this.diameter / 2,
      this.startAngle,
      this.endAngle,
      this.antiClockWise
    );
    ctx.fillStyle = this.fillStyle;
    ctx.fill();
    ctx.lineWidth = this.lineWidth;
    ctx.strokeStyle = this.strokeStyle;
    ctx.stroke();
    ctx.closePath();
  }
}

class Canvas {
  constructor(parent = document.body, width = 400, height = 400) {
    this.canvas = document.createElement("canvas");
    this.canvas.width = width;
    this.canvas.height = height;
    parent.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");
  }

  drawCircle(actor) {
    this.ctx.beginPath();
    this.ctx.arc(
      actor.position.x,
      actor.position.y,
      actor.radius,
      0,
      Math.PI * 2
    );
    this.ctx.closePath();
    this.ctx.fillStyle = actor.color;
    this.ctx.fill();
  }
}

class Ball {
  consturctor(x = 20, y = 20, color = "red", radius = 10) {
    this.color = color;
    this.position = { x: x, y: y };
    this.radius = radius;
  }
}

const canvas = new Canvas();
const ball = new Ball();
canvas.drawCircle(ball);

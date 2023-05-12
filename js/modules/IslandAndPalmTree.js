import { AbstractForm } from './AbstractForm.js';

/**
 * Dessine une île et un palmier
 */
export class IslandAndPalmTree extends AbstractForm {
  constructor(
    x = 0,
    y = 0,
    width = 0,
    height = 0,
    fillColor = '',
    strokeColor = '',
    strokeWidth = 2,
    pesanteur = true,
    ordreConstruction = 100
  ) {
    super(x, y, width, height, fillColor, strokeColor, strokeWidth, pesanteur, ordreConstruction);
  }

  draw(ctx) {
    super.draw(ctx);
    this.drawIsland(ctx, this.x, this.y);
   //  this.drawPalmTree(ctx, this.x + this.width * 0.6, this.y + this.height * 0.2);
  }

  drawIsland(ctx, dx, dy) {
    //ctx.fillStyle = '#87ceeb'; // ciel
    //ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    ctx.fillStyle = '#d0b173'; // sol
    ctx.fillRect(0, ctx.canvas.height * 0.7, ctx.canvas.width, ctx.canvas.height * 0.3);
    ctx.fillRect(0, ctx.canvas.height * 0.7, ctx.canvas.width, ctx.canvas.height * 0.1); // plage

    ctx.beginPath(); // île
    ctx.moveTo(ctx.canvas.width * 0.2 + dx, ctx.canvas.height * 0.7 + dy);
    ctx.lineTo(ctx.canvas.width * 0.8 + dx, ctx.canvas.height * 0.7 + dy);
    ctx.lineTo(ctx.canvas.width * 0.6 + dx, ctx.canvas.height * 0.3 + dy);
    ctx.lineTo(ctx.canvas.width * 0.4 + dx, ctx.canvas.height * 0.3 + dy);
    ctx.closePath();
    ctx.fillStyle = '#8b4513';
    ctx.fill();
  }

  /*drawPalmTree(ctx, dx, dy) {
    ctx.fillStyle = '#8b500'; // tronc
    ctx.fillRect(dx, dy, ctx.canvas.width * 0.05, ctx.canvas.height * 0.5);

    ctx.beginPath(); // feuilles
    ctx.moveTo(ctx.canvas.width * 0.5 + dx, ctx.canvas.height * 0.2 + dy);
    ctx.lineTo(ctx.canvas.width * 0.7 + dx, ctx.canvas.height * 0.1 + dy);
    ctx.lineTo(ctx.canvas.width * 0.6 + dx, ctx.canvas.height * 0.2 + dy);
    ctx.lineTo(ctx.canvas.width * 0.7 + dx, ctx.canvas.height * 0.3 + dy);
    ctx.lineTo(ctx.canvas.width * 0.6 + dx, ctx.canvas.height * 0.25 + dy);
    ctx.lineTo(ctx.canvas.width * 0.5 + dx, ctx.canvas.height * 0.3 + dy);
    ctx.closePath();
    ctx.fillStyle = '#008000';
    ctx.fill();
  } */
  

  static buildForms() {
    return [new IslandAndPalmTree(0, 0, 0, 0, '', '', 1, true, 50)];
  }
}




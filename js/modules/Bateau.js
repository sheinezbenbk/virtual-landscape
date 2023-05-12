import { AbstractForm } from './AbstractForm.js';

/**
 * Dessine un bateau
 */
export class Bateau extends AbstractForm {
  // add default values to avoid errors on empty arguments
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
    super(x, y, width, height, fillColor, strokeColor, strokeWidth, pesanteur, ordreConstruction)
  }
  
  draw(ctx) {
  super.draw(ctx)
  ctx.save()
  //bateau(ctx, dx, dy) {
    //let ox = dx
    //let oy = dy


    // Dessiner la coque du bateau

    ctx.beginPath();
    ctx.moveTo(+50, + 350);
    ctx.lineTo(+150, +250);
    ctx.lineTo(250, +250);
    ctx.lineTo(+350, +350);
    ctx.closePath();
    ctx.fillStyle = '#ccffff';
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#666666';
    ctx.stroke();

    // Dessiner la voile
    ctx.beginPath();
    ctx.moveTo(+200, +100);
    ctx.lineTo(+350, +250);
    ctx.lineTo(200, 250);
    ctx.closePath();
    ctx.fillStyle = '#ffffff';
    ctx.fill();
    ctx.stroke();

    // Dessiner le mât
    ctx.beginPath();
    ctx.moveTo(200, 100);
    ctx.lineTo(+200, +250);
    ctx.closePath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#666566';
    ctx.stroke();
ctx.restore()

  

    //this.bateau(ctx, this.x, this.y)
  }

  static buildForms() {
    const myBateau = new Bateau(600, 250, 150, 100, 1, true, 50)
    let max = ~~(Math.random() * 5)  // max in [5..10]
    let forms = []
    for (let i = 0; i < max; i++) {
      forms.push(
        new Bateau(
          ~~(Math.random() * 3 * myBateau.x + 50),
          ~~(Math.random() * myBateau.y),
          ~~(Math.random() * 3 * myBateau.width + 10),
          ~~(Math.random() * myBateau.height + 10),
          
        ))}
    return forms

    }
  }


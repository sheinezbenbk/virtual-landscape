import { AbstractForm } from './AbstractForm.js';

/**
 * Dessine un buisson
 */
export class Buisson extends AbstractForm {
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
    ctx.save();
    
    
    ctx.beginPath();
    ctx.moveTo(1040, 520);
    ctx.quadraticCurveTo(1100, 200, 1160, 250);
    ctx.quadraticCurveTo(1200, 220, 1240, 250);
    ctx.quadraticCurveTo(1300, 200, 1360, 250);
    ctx.quadraticCurveTo(1400, 220, 1440, 250);
    ctx.quadraticCurveTo(1500, 200, 1560, 250);
    ctx.quadraticCurveTo(1600, 220, 1640, 250);
    ctx.quadraticCurveTo(1700, 200, 1760, 250);
    ctx.lineTo(1760, 520);
    ctx.lineTo(1040, 520);
    ctx.closePath();
    
    ctx.fillStyle = '#008000';
    ctx.fill();
    
    ctx.restore();

  }

  static buildForms() {
    const myBuisson = new Buisson(900, 250, 100, 200, 'green', 'brown', 2, true, 50);
    let max = ~~(Math.random() * 5)  // max in [5..10]
    let forms = []
    for (let i = 0; i < max; i++) {
      forms.push(
        new Buisson (
          ~~(Math.random() * 3 * myBuisson.x + 50),
          ~~(Math.random() * myBuisson.y),
          ~~(Math.random() * 3 * myBuisson.width + 10),
          ~~(Math.random() * myBuisson.height + 10),

        ))}
    return forms
  }
}

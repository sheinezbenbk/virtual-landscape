import { AbstractForm } from './AbstractForm.js';

/**

Dessine un nuage
*/
export class Nuage extends AbstractForm {
constructor(
x = 0,
y = 0,
width = 0,
height = 0,
fillColor = '',
strokeColor = '',
strokeWidth = 2,
pesenteur = false,
ordreConstruction = 100
) {
super(x, y, width, height, fillColor, strokeColor, strokeWidth, pesenteur, ordreConstruction)
}
draw(ctx) {
super.draw(ctx)
ctx.save()
// set the styles for this shape
ctx.fillStyle = this.fillColor
ctx.lineWidth = this.strokeWidth

// pousse l'objet vers le haut
let new_y =  this.y - this.height/2

// dessine un nuage avec des courbes de bézier
ctx.beginPath()
ctx.strokeStyle = this.strokeColor

ctx.moveTo(this.x, new_y + this.height/2)
ctx.bezierCurveTo(this.x + this.width/4, new_y, this.x + this.width/2, new_y - this.height/4, this.right - this.width/4, new_y + this.height/4)
ctx.bezierCurveTo(this.right, new_y + this.height/2, this.right - this.width/4, new_y + this.height/2, this.right - this.width/2, new_y + this.height/4)
ctx.bezierCurveTo(this.right - this.width*3/4, new_y + this.height/2, this.x + this.width/4, new_y + this.height/2, this.x, new_y + this.height/4)
ctx.bezierCurveTo(this.x - this.width/4, new_y + this.height/2, this.x + this.width/4, new_y + this.height/2, this.x, new_y + this.height/2)
ctx.closePath()

// ajoute un peu d'ombre
//ctx.shadowOffsetX = 2;
//ctx.shadowOffsetY = 2;
//ctx.shadowBlur = 2;
//ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';

// dessine le nuage
ctx.fill()
ctx.strokeStyle = 'lightgray';
ctx.stroke()

// restores the styles from earlier
ctx.restore()
}

static buildForms() {
const myNuage = new Nuage(800, 100, 150, 100, 'white', 'white', 2, false)
let max = ~~(Math.random() * 10) + 20 // max in [5..10]
let forms = []
for (let i = 0; i < max; i++) {
forms.push(
new Nuage(
~~(Math.random() * 3 * myNuage.x + 80),
~~(Math.random() * myNuage.y),
~~(Math.random() * 3 * myNuage.width + 10),
~~(Math.random() * myNuage.height + 10),
myNuage.fillColor,
myNuage.strokeColor,
'',

)
)
}
return forms
}
}
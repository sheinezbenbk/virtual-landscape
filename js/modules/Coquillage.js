import { AbstractForm } from './AbstractForm.js';

/**
 * Dessine une coquillage
 */
export class Coquillage extends AbstractForm {
  constructor(
    x = 0,
    y = 0,
    radius = 0,
    fillColor = '',
    strokeColor = '',
    strokeWidth = 2,
    pesenteur = true,
    ordreConstruction = 100
  ) {
    super(x, y, radius * 2, radius * 2, fillColor, strokeColor, strokeWidth, pesenteur, ordreConstruction)
    this.radius = radius
  }
  
  draw(ctx) {
    super.draw(ctx)
    ctx.save()
    
    // positionne l'objet au centre
    let new_x = this.x - this.radius
    let new_y = this.y - this.radius
    
    // crée un gradient de couleurs pour la coquillage
    let gradient = ctx.createRadialGradient(
      this.x,
      this.y,
      this.radius / 4,
      this.x,
      this.y,
      this.radius
    )
    gradient.addColorStop(0, 'white')
    gradient.addColorStop(0.5, this.fillColor)
    gradient.addColorStop(1, 'black')
    
    // dessine le coeur de la coquillage
    ctx.beginPath()
    ctx.fillStyle = gradient
    ctx.arc(this.x, this.y, this.radius / 2, 0, 2 * Math.PI)
    ctx.fill()
    
    // dessine les pétales
    let petalCount = 5 + Math.floor(Math.random() * 6) // choisit un nombre aléatoire de pétales
    let angle = (2 * Math.PI) / petalCount
    
    for (let i = 0; i < petalCount; i++) {
      let petalLength = this.radius / 2 + Math.floor(Math.random() * this.radius / 2)
      let petalWidth = petalLength / 3 + Math.floor(Math.random() * petalLength / 3)
      
      // crée un gradient de couleurs pour chaque pétale
      let petalGradient = ctx.createLinearGradient(
        new_x + this.radius,
        new_y + this.radius,
        new_x + this.radius + petalLength,
        new_y + this.radius - petalWidth
      )
      petalGradient.addColorStop(0, 'white')
      petalGradient.addColorStop(0.5, this.fillColor)
      petalGradient.addColorStop(1, 'black')
      
      // dessine le pétale
      ctx.beginPath()
      ctx.fillStyle = petalGradient
      ctx.moveTo(this.x, this.y)
      ctx.lineTo(
        new_x + this.radius + petalLength * Math.cos(i * angle - angle / 2),
        new_y + this.radius - petalWidth * Math.sin(i * angle - angle / 2)
      )
      ctx.lineTo(
        new_x + this.radius + petalLength * Math.cos(i * angle + angle / 2),
        new_y + this.radius - petalWidth * Math.sin(i * angle + angle / 2)
      )
      ctx.closePath()
      ctx.fill()
    }
    
    // restaure les styles précédents
    ctx.restore()
  }
  
  static buildForms() {
    const myCoquillage = new Coquillage(400, 300, 40, 'yellow', 'brown', 2, true)
    
    let max = ~~(Math.random()*10)+5// max in [5..14]
    let forms = []
    for (let i = 0; i < max; i++) {
        forms.push(
        new Coquillage(
        ~~(Math.random() * 3 * myCoquillage.x + 50),
        ~~(Math.random() * 2 * myCoquillage.y + 100),
        ~~(Math.random() * 40 + 20),
        randomColor(), // ajout de la couleur aléatoire pour chaque coquillage
        myCoquillage.strokeColor,'',true)
    
    )
    }
    return forms
    }
    }
    
    // fonction qui renvoie une couleur aléatoire en hexadécimal
    function randomColor() {
    const color = Math.floor(Math.random() * 16777215).toString(16);
    return '#' + ('000000' + color).slice(-6);
    }

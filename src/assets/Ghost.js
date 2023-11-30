import Enemy from './Enemy'
import spriteImage from './SpritesSpel.png'

export default class Ghost extends Enemy {
  constructor(game) {
    super(game)
    this.width = 60
    this.height = 64
    this.x = this.game.width
    this.y = Math.random() * (this.game.height * 0.9 - this.height)
    this.speedX = Math.random() * -1.6 - 0.6
   

    const image = new Image()
    image.src = spriteImage
    this.image = image
  }

  draw(context) {
    // destination sx sy xw sh
    context.drawImage(this.image, 0, 64 * 7, this.width, this.height, this.x, this.y, this.width, this.height )
  }

}
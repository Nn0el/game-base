import Enemy from './assets/Enemy'
import spriteImage from './assets/SpritesSpel.png'

export default class Ghost extends Enemy {
  constructor(game) {
    super(game)
    this.game = game
    this.width = 60
    this.height = 64
    this.x = this.game.width
    this.y = Math.random() * (this.game.height * 0.9 - this.height)
    this.speedX = Math.random() * -1.6 - 0.6
    this.frameX = 0
    this.frameY = 64 * 7
    this.fps = 20
    this.timer = 0
    this.interval = 1000 / this.fps
    this.flip = false
    const image = new Image()
    image.src = spriteImage
    this.image = image
    this.maxFrame = 4

  }
  update(deltaTime) {

    if (this.timer > this.interval) {
      this.frameX++
      this.timer = 0
    } else {
      this.timer += deltaTime
    }
    if (this.frameX >= this.maxFrame) {
      this.frameX = 0
    }

  }

  draw(context) {

    // console.log(this.x, this.y, this.width, this.height, this.frameX, this.frameY)

    // destination sx sy xw sh
    context.drawImage(
      this.image,
      this.frameX * this.width,
      this.frameY,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height)

  }





}
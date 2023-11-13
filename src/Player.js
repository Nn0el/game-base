import Projectile from "./Projectile.js"
import spriteImage from './assets/SpritesSpel.png'
export default class Player {
  constructor(game) {
    this.projectiles = []
    this.game = game
    this.width = 32
    this.height = 64
    this.x = 50
    this.y = 100
    this.MaxSpeed = 7
    this.speedX = 0
    this.speedY = 0
    const image = new Image()
    image.src = spriteImage
    this.image = image
    this.frameX = 0
    this.frameY = 1
    this.maxFrame = 8
    this.fps = 20
    this.timer = 0
    this.interval = 1000 / this.fps
    this.flip = false
  }



  update(deltaTime) {
    this.y += this.speedY
    if (this.game.keys.includes('ArrowUp') && this.y >= 0) {
      this.speedY = -this.MaxSpeed
    } else if (this.game.keys.includes('ArrowDown') && this.y <= 415) {
      this.speedY = this.MaxSpeed
    } else {
      this.speedY = 0;
    }

    this.projectiles.forEach((projectile) => {
      projectile.update()
    })
    this.projectiles = this.projectiles.filter(
      (projectile) => !projectile.markedForDeletion
    )

  }


  draw(context) {
    context.fillStyle = '#f00'
    context.fillRect(this.x, this.y, this.width, this.height)
    this.projectiles.forEach((projectile) => {
      projectile.draw(context)
    }
    )

    context.drawImage(
      this.image,
      this.frameX * this.width,
      this.frameY * this.height - 14,
      this.width,
      this.height,
      this.flip ? this.x * -1 - this.width : this.x,
      this.y,
      this.width,
      this.height
    )

    context.restore()
  }

  shoot() {
    this.projectiles.push(
      new Projectile(this.game, this.x + this.width, this.y + this.height / 2)
    )

  }


}

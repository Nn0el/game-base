import Projectile from "./Projectile.js"
import spriteImage from './assets/SpritesSpel.png'
export default class Player {
  constructor(game) {
    this.projectiles = []
    this.game = game
    this.width = 64
    this.height = 64
    this.x = 45
    this.y = 85
    this.MaxSpeed = 7
    this.speedX = 0
    this.speedY = 0

    this.fps = 20
    this.timer = 0
    this.interval = 1000 / this.fps
    this.flip = false

    const image = new Image()
    image.src = spriteImage
    this.image = image
    this.frameX = 0
    this.frameY = 1
    this.maxFrame = 4
    this.fps = 20
    this.timer = 1
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
    if (this.speedX !== 0) {
      this.frameY = 1
    } else {
      this.frameY = 0
    }
    if (this.speedX < 0) {
      this.flip = true
    } else if (this.speedX > 0) {
      this.flip = false
    }
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


    this.projectiles.forEach((projectile) => {
      projectile.draw(context)
    }
    )
    if (this.flip) {
      context.save()
      context.scale(-1, 1)
    }

    context.drawImage(
      this.image,
      this.frameX * this.width,
      this.frameY * this.height,
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

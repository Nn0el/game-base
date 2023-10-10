export default class Player {
  constructor(game) {
    this.game = game
    this.width = 32
    this.height = 64
    this.x = 50
    this.y = 100
    this.maxspeed = 1
    this.speedX = 0
    this.speedY = 0
  }



  update(deltaTime) {
    this.y += this.speedY
    if (this.game.keys.includes('ArrowUp')) {
      this.speedY = -this.MaxSpeed
    } else if (this.game.keys.includes('ArrowDown')) {
      this.speedY = this.MaxSpeed
    } else {
      this.speedY = 0;
    }
  }

  draw(context) {
    context.fillStyle = '#f00'
    context.fillRect(this.x, this.y, this.width, this.height)
  }
}

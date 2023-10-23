import Enemy from './Enemy'

export default class Bat extends Enemy {
  constructor(game) {
    super(game)
    this.width = 50
    this.height = 30
    this.x = this.game.width
    this.y = Math.random() * (this.game.height * 0.9 - this.height)
    this.speedX = Math.random() * -1.5 - 0.1

  }
}
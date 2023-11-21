import Enemy from './Enemy'
import spriteImage from './assets/SpritesSpel.png'
export default class Bat extends Enemy {
  constructor(game) {
    super(game)
    this.width = 60
    this.height = 30
    this.x = this.game.width
    this.y = Math.random() * (this.game.height * 0.9 - this.height)
    this.speedX = Math.random() * -1.9 - 0.1

  }
}
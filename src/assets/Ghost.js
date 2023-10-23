import Enemy from './Enemy'

export default class Ghost extends Enemy {
  constructor(game) {
    super(game)
    this.width = 30
    this.height = 40
    this.x = this.game.width
    this.y = Math.random() * (this.game.height * 0.9 - this.height)
    this.speedX = Math.random() * -1.6 - 0.6
   
  }

}
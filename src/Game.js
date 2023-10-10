
import Player from './Player.js'
import InputHandler from './InputHandler.js'

export default class Game {
  constructor(width, height) {
    this.width = width
    this.height = height
    this.keys = []
    this.enemies = []
    this.gameOver = false
    this.gravity = 1
    this.debug = false
    this.player = new Player(this)
    this.InputHandler = new InputHandler(this)
  }



  update(deltaTime) {
    if (!this.gameOver) {
      this.gameTime += deltaTime
      this.player.update(deltaTime)
    }
  }
  draw(context) {
    this.player.draw(context)
  }

}

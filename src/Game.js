
import Player from './Player.js'
import InputHandler from './InputHandler.js'
import UserInterface from './UserInterface.js'
import Ghost from './assets/Ghost.js'

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
    this.UserInterface = new UserInterface(this)
    this.enemies = []
    this.enemyTimer = 0
    this.enemyInterval = 1000
  }



  update(deltaTime) {
    if (!this.gameOver) {
      this.gameTime += deltaTime
      this.player.update(deltaTime)
    }
    if (this.enemyTimer > this.enemyInterval && !this.gameOver) {
      this.addEnemy()
      this.enemyTimer = 0
    } else {
      this.enemyTimer += deltaTime
    } 
    this.enemies.forEach((enemy) => enemy.update(deltaTime))
    this.enemies = this.enemies.filter((enemy) => !enemy.markedForDeletion)
  }
  addEnemy() {
    this.enemies.push(new Ghost(this))
    
  }
  draw(context) {
    this.player.draw(context)
    this.UserInterface.draw(context)
    this.enemies.forEach((enemy) => enemy.draw(context))
  }

}

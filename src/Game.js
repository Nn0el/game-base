
import Player from './Player.js'
import InputHandler from './InputHandler.js'
import UserInterface from './UserInterface.js'
import Ghost from './assets/Ghost.js'
import Bat from './assets/Bat.js'
import CheckCollision from './CheckCollision.js'
export default class Game {
  constructor(width, height) {
    this.width = width
    this.height = height
    this.keys = []
    this.enemies = []
    this.gameOver = false
    this.gravity = 1
    this.debug = false
    this.checkCollision = new CheckCollision(this)
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
     
    this.enemies = this.enemies.filter((enemy) => !enemy.markedForDeletion)

    this.enemies.forEach((enemy) => {
      enemy.update(deltaTime)
      if (this.checkCollision(this.player, enemy)) {
        enemy.markedForDeletion = true
      }
      this.player.projectiles.forEach((projectile) => {
        if (this.checkCollision(projectile, enemy)) {
          enemy.markedForDeletion = true
          projectile.markedForDeletion = true
        }
      })
    })
  }
  addEnemy() {
    this.enemies.push(new Ghost(this))
    this.enemies.push(new Bat(this))
  }
  draw(context) {
    this.player.draw(context)
    this.UserInterface.draw(context)
    this.enemies.forEach((enemy) => enemy.draw(context))
  }

}

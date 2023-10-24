
import Player from './Player.js'
import InputHandler from './InputHandler.js'
import UserInterface from './UserInterface.js'
import Ghost from './assets/Ghost.js'
import Bat from './assets/Bat.js'
import FrejSpell from './assets/FrejSpell.js'
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

  CheckCollision(object1, object2) {
    return (
      object1.x < object2.x + object2.width &&
      object1.x + object1.width > object2.x &&
      object1.y < object2.y + object2.height &&
      object1.height + object1.y > object2.y
    )

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
      if (this.CheckCollision(this.player, enemy)) {
        enemy.markedForDeletion = true
      }
      this.player.projectiles.forEach((projectile) => {
        if (this.CheckCollision(projectile, enemy)) {
          enemy.markedForDeletion = true
          projectile.markedForDeletion = true
        }
      })
    })
  }
  addEnemy() {
    this.enemies.push(new Ghost(this))
    this.enemies.push(new Bat(this))
    this.enemies.push(new FrejSpell(this))
  }

  
  draw(context) {
    this.player.draw(context)
    this.UserInterface.draw(context)
    this.enemies.forEach((enemy) => enemy.draw(context))
  }

}


import Player from './Player.js'
import InputHandler from './InputHandler.js'
import UserInterface from './UserInterface.js'
import Ghost from './Ghost.js'
import Bat from './Bat.js'
import FrejSpell from './FrejSpell.js'
import Bakgrund from './Bakgrund.js'


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
    this.ghost = new Ghost(this)
    this.Bakgrund = new Bakgrund(this)
    

    this.enemies = []
    this.enemyTimer = 0
    this.enemyInterval = 1000
    this.bossTimer = 0
    this.bossInterval = 1000
    
    
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
      this.ghost.update(deltaTime)
    }

    if (this.enemyTimer > this.enemyInterval && !this.gameOver) {
      this.addEnemy(deltaTime)
      this.enemyTimer = 0
    } else {
      this.enemyTimer += deltaTime
    } 

    if (this.bossTimer > this.bossInterval && !this.gameOver) {
      this.addBoss()
      this.bossTimer = 0
    } else {
      this.bossTimer += 1
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
  addEnemy(deltaTime, enemyTimer, bossTimer) {
    console.log(deltaTime)
    if(this.gameTime<=35000){
    this.enemies.push(new Ghost(this))
    this.enemies.push(new Bat(this))
    }
    if(this.gameTime>=35555){
      this.enemies.push(new FrejSpell(this))
    }
  }

  
addBoss () {
  console.log('like a boss')
  
}
  
  draw(context) {
    this.player.draw(context)
    this.UserInterface.draw(context)
    this.enemies.forEach((enemy) => enemy.draw(context))
    if (this.flip) {
      context.save()
      context.scale(-1, 1)
    }

    
  }

}

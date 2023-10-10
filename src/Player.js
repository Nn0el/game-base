import Projectile from "./Projectile.js"
export default class Player {
  constructor(game) {
    this.projectiles = []
    this.game = game
    this.width = 32
    this.height = 64
    this.x = 50
    this.y = 100
    this.MaxSpeed = 7
    this.speedX = 0
    this.speedY = 0
  }



  update(deltaTime) {
    this.y += this.speedY
    if (this.game.keys.includes('ArrowUp') && this.y>=0) {
      this.speedY = -this.MaxSpeed
    } else if (this.game.keys.includes('ArrowDown') && this.y<=415) {
      this.speedY = this.MaxSpeed
    } else {
      this.speedY = 0;
    }

    this.projectiles.forEach((projectile) => {
      projectile.update()
    })
    this.projectiles=this.projectiles.filter(
      (projectile) => !projectile.markedForDeletion
    )

  }


  draw(context) {
    context.fillStyle = '#f00'
    context.fillRect(this.x, this.y, this.width, this.height)
    this.projectiles.forEach((projectile) => {
      projectile.draw(context)
    }
    )
  }

  shoot() {
    this.projectiles.push(
      new Projectile(this.game, this.x + this.width, this.y + this.height / 2)
    )
    if (event.key === 'a') {
      this.game.player.shoot()
    }
    
  }
 

}

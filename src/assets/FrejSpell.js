import Enemy from "./Enemy"

export default class FrejSpell extends Enemy {
constructor(Game){
super(Game)
this.height = 28
this.width =  28
this.x = this.game.width
this.y = Math.random() * (this.game.height * 0.9 - this.height)
this.speedX = -5
this.speedY = 0
}



}

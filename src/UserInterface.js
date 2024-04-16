import Game from './Game.js'
import score from './Game.js'
export default class UserInterface {
  constructor(game, gameTime) {
    this.game = game
    this.fontSize = 25
    this.fontFamily = 'Arial'
    this.color = 'white'
    this.game.gameTime = 1
    this.game.score = 1
  }
  draw(context) {
    context.save()
    context.fillStyle = this.color
    context.shadowOffsetX = 2
    context.shadowOffsetY = 2
    context.shadowColor = 'black'
    context.textAlign = 'left'
    context.font = `${this.fontSize}px ${this.fontFamily}`


    console.log(this.game.score)
    context.fillText(
      `Score: ${(this.game.score * 0.1).toFixed(1)}`, 40, 200,
      )

    context.fillText(

      

      `Time: ${(this.game.gameTime * 0.001).toFixed(1)}`,
      20,
      100

    )

    if (this.game.gameOver) {
      context.textAlign = 'center'
      context.font = `50px ${this.fontFamily}`
      context.fillText(
        'Game over',
        this.game.width / 2,
        this.game.height / 2 - 20
      )
    }
    if (this.game.debug) {

    }

    context.restore()
  }
}
















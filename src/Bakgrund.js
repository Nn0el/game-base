
import skyImage from './assets/Layer/Middleground_Ersboda.png'
import Layer from './Layer.js'

export default class Bakgrund {
  constructor(game) {
    console.log(this.x)
    this.game = game
    const sky = new Image()
    sky.src = skyImage
    this.skyLayer = new Layer(this.game, sky, 1708, 500, 0.2)
    this.layers = [
      this.skyLayer   ]
  }
}

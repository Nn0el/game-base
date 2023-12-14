import Enemy from "./assets/Enemy"
import spriteImage from './SpritesSpel.png'
export default class FrejSpell extends Enemy {
    constructor(Game) {
        super(Game)
        this.height = 60
        this.width = 64
        this.x = this.game.width
        this.y = Math.random() * (this.game.height * 0.9 - this.height) +0.2
        this.speedX = -4
        this.MaxSpeed = 7

        const image = new Image()
        image.src = spriteImage
        this.image = image
        this.frameX = 0
        this.frameY = 5
        this.maxFrame = 4
        this.fps = 20
        this.timer = 1
        this.interval = 1000 / this.fps
        this.flip = false
    }

    update(deltaTime) {
        this.x += this.speedX
        if (this.timer > this.interval) {
            this.frameX++
            this.timer = 0
        } else {
            this.timer += deltaTime
        }
        if (this.frameX >= this.maxFrame) {
            this.frameX = 0
        }
    }
    draw(context) {
        if (this.flip) {
            context.save()
            context.scale(-1, 1)
        }

        context.drawImage(
            this.image,
            this.frameX * this.width,
            this.frameY * this.height-96,
            this.width,
            this.height,
            this.flip ? this.x * -1 - this.width : this.x,
            this.y,
            this.width,
            this.height
        )

        context.restore()
    }
}




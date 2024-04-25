import Bottleneck from 'bottleneck'
export default class Hiscore {
    constructor(game) {
        this.game = game
        this.url = "http://localhost:3000"
             this.limiter = new Bottleneck({
        minTime: 200 // 5 requests per second
      })
    }

    
      
      throttleFetch(options) {
        return limiter.schedule(() => fetch(this.url, options))
      }

    getScore () {
        console.log("hämta hiscore med jens kod")
        const data = { score }
        
    }

    postScore () {
        console.log("skicka score")
        throttleFetch(`${url}/score`)
    
}
}
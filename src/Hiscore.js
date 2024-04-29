import Bottleneck from 'bottleneck'

export default class Hiscore {
  constructor(game) {
    this.game = game
    this.url = "http://localhost:3000"
    this.limiter = new Bottleneck({
      minTime: 200 // 5 requests per second
    })


  }



  fetch(options) {
    return this.limiter.schedule(() => fetch(this.url, options))
  }

  getScore() {
    console.log("hämta hiscore med jens kod")

  fetch(`${this.url}/score`)


  }
  postScore() {
    console.log("skicka score")

    const data = { Hiscore }


  }

  testApi () {
    
    fetch(this.url)
      .then((response) => response.text())
      .then((text) => {
        console.log(text)
      })
      .catch((error) => {
        console.error(error)
      })
  }





}
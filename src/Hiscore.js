import Bottleneck from 'bottleneck'

export default class Hiscore {
  constructor(game) {
    this.game = game
    this.url = "https://generated-hungry-pleasure.glitch.me"
    this.limiter = new Bottleneck({
      minTime: 200 // 5 requests per second
    })


  }



  fetch(options) {
    return this.limiter.schedule(() => fetch(this.url, options))
  }

postScore() {
    console.log("skicka score")
    const data = { Hiscore }
    fetch(`${this.url}/score`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((text) => {
        console.log(text)
      
    })


  }

  getScore() {
    console.log("hämta hiscore med jens kod")

  fetch(`${this.url}/score`)
  .then((response) => response.text())
  .then((text) => {
    console.log(text)
    const scores = JSON.parse(text)
    const list = document.createElement("ul")
    scores.forEach((score) => {
      const item = document.createElement("li")
      item.textContent = `${score.name}: ${score.score}`
      list.appendChild(item)
    })
    element.appendChild(list)
  })
  .catch((error) => {
    console.error(error)
  })
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
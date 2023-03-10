import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    image: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    total: 0,
    heads: 0,
    tails: 0,
  }

  onClickTossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        image: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
        total: prevState.total + 1,
        heads: prevState.heads + 1,
      }))
    } else {
      this.setState(prevState => ({
        image: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
        total: prevState.total + 1,
        tails: prevState.tails + 1,
      }))
    }
  }

  render() {
    const {image, total, heads, tails} = this.state

    return (
      <div className="divContainer">
        <div className="tossGameContainer">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={image} alt="toss result" className="resultImage" />
          <button type="button" onClick={this.onClickTossCoin}>
            Toss Coin
          </button>
          <div className="resultContainer">
            <p className="results">Total: {total}</p>
            <p className="results">Heads: {heads}</p>
            <p className="results">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss

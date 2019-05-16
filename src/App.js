import React, { Component } from 'react'
import { GameBoard, Row, Square, } from './components/StyledComponents'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      player: 'x',
      board: [
        '', '', '',
        '', '', '',
        '', '', ''
      ]
    }
    this._playerTurn = this._playerTurn.bind(this)
    this._renderSquare = this._renderSquare.bind(this)
  }
  _playerTurn() {
    let player = this.state.player
    if (player === 'x') {
      player = 'o'
    } else {
      player = 'x'
    }
    this.setState({ player })
  }

  _renderSquare(i) {
    console.log(this.state.board[i])
    return <Square value={this.state.board[i]} />
  }

  render() {
    return (
      <GameBoard>
        <Row>
          {this._renderSquare(0)}
          {this._renderSquare(1)}
          {this._renderSquare(2)}
        </Row>
        <Row>
          {this._renderSquare(3)}
          {this._renderSquare(4)}
          {this._renderSquare(5)}
        </Row>
        <Row>
          {this._renderSquare(6)}
          {this._renderSquare(7)}
          {this._renderSquare(8)}
        </Row>
      </GameBoard>
    )
  }
}

export default App;

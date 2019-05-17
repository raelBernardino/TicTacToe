import React, { Component } from 'react'
import { MainGameBoard, Row, Square } from './components/StyledComponents'
import Winner from './components/Winner'
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
      ],
      winnerFound: false,
      winnerStatus: ''

    }
    this._renderSquare = this._renderSquare.bind(this)
    this._checkWinner = this._checkWinner.bind(this)
    this._playerTurn = this._playerTurn.bind(this)
    this._reset = this._reset.bind(this)
  }

  _renderSquare(i) {
    const board = this.state.board
    if (board[i] === 'x') {
      return <Square
        primary
        onClick={() => {
          if (!this.state.winnerFound) {
            this._playerTurn(i)
          }
        }}>
        {this.state.board[i]}
      </Square>
    } else {
      return <Square
        onClick={() => {
          if (!this.state.winnerFound) {
            this._playerTurn(i)
          }
        }}>
        {this.state.board[i]}
      </Square>
    }
  }

  _playerTurn(i) {
    let player = this.state.player
    const board = this.state.board
    if (board[i] === '') {
      board[i] = player
    } else {
      return
    }
    if (player === 'x') {
      player = 'o'
    } else {
      player = 'x'
    }
    this._checkWinner()
    this.setState({ board, player })
  }

  _checkWinner() {
    const board = this.state.board
    let winnerStatus = this.state.winnerStatus
    let winnerFound = this.state.winnerFound
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    if (!winnerFound) {
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
          winnerFound = !winnerFound
          winnerStatus = `${this.state.player} wins!`
        }
      }
    }
    if (!winnerFound && board.indexOf('') < 0) {
      winnerFound = !winnerFound
      winnerStatus = 'Draw!'
    }
    this.setState({ winnerFound, winnerStatus })
  }

  _reset() {
    this.setState({ board: Array(9).fill(''), winnerFound: !this.state.winnerFound, player: 'x' })
  }

  render() {
    return (
      <div className="App">
        {
          this.state.winnerFound ?
            <Winner
              winnerStatus={this.state.winnerStatus}
              xWin={this.state.xWin}
              oWin={this.state.oWin}
              reset={this._reset}
            />
            : null
        }
        <MainGameBoard>
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
        </MainGameBoard>
      </div>
    )
  }
}

export default App;

import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import PlayerSelect from './components/PlayerSelect'
import Play from './components/Play'
import { Square } from './components/StyledComponents'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playerOne: '',
      playerTwo: '',
      player: 'x',
      board: [
        '', '', '',
        '', '', '',
        '', '', ''
      ],
      winnerFound: false,
      xWinCount: 0,
      oWinCount: 0,

    }
    this._playAgain = this._playAgain.bind(this)
    this._reset = this._reset.bind(this)
    this._renderSquare = this._renderSquare.bind(this)
    this._checkWinner = this._checkWinner.bind(this)
    this._playerTurn = this._playerTurn.bind(this)
    this._winCount = this._winCount.bind(this)
    this._playAgain = this._playAgain.bind(this)
    this._onChangePlayerOne = this._onChangePlayerOne.bind(this)
    this._onChangePlayerTwo = this._onChangePlayerTwo.bind(this)
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
    const player = this.state.player
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
          winnerStatus = `${player} wins!`
          this._winCount(player)
        }
      }
    }
    if (!winnerFound && board.indexOf('') < 0) {
      winnerFound = !winnerFound
      winnerStatus = 'Draw!'
    }
    this.setState({ winnerFound, winnerStatus })
  }

  _winCount(player) {
    let xWinCount = this.state.xWinCount
    let oWinCount = this.state.oWinCount
    if (player === 'x') {
      xWinCount++
    } else if (player === 'o') {
      oWinCount++
    } else {
      return
    }
    this.setState({ xWinCount, oWinCount })
  }

  _playAgain() {
    this.setState({ board: Array(9).fill(''), winnerFound: !this.state.winnerFound, player: 'x' })
  }

  _onChangePlayerOne(e) {
    this.setState({ playerOne: e.target.value })
  }

  _onChangePlayerTwo(e) {
    this.setState({ playerTwo: e.target.value })
  }

  _reset() {
    this.setState({ playerOne: '', playerTwo: '', xWinCount: 0, oWinCount: 0})
  }

  render() {
    return (
      <Router >
        <Route exact path="/"
          render={() => <PlayerSelect
            onChangePlayerOne={this._onChangePlayerOne}
            onChangePlayerTwo={this._onChangePlayerTwo}
            playerOne={this.state.playerOne}
            playerTwo={this.state.playerTwo} />}
        />
        <Route path='/TicTacToe/play' render={() =>
          <Play
            playerOne={this.state.playerOne}
            playerTwo={this.state.playerTwo}
            player={this.state.playe}
            board={this.state.board}
            winnerFound={this.state.winnerFound}
            winnerStatus={this.state.winnerStatus}
            xWinCount={this.state.xWinCount}
            oWinCount={this.state.oWinCount}

            renderSquare={this._renderSquare}
            playAgain={this._playAgain}
            reset={this._reset}
          />
        } />
      </Router>
    )
  }
}

export default App;

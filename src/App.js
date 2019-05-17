import React, { Component } from 'react'
import { GameBoard, Row, Square, } from './components/StyledComponents'
import styled from 'styled-components'
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
    this._renderSquare = this._renderSquare.bind(this)
  }

  _checkWinner() {
    const board = this.state.board
  }

  _renderSquare(i) {
    return (
      <Square onClick={() => this._playerTurn(i)}>{this.state.board[i]}</Square>
    )
  }


  _playerTurn(i) {
    let player = this.state.player
    const board = this.state.board
    if(player === 'x') {
      player = 'o'
    } else {
      player = 'x'
    }

    if(board[i] === '') {
      board[i] = player
    } else {
      return
    }

    this.setState({ board, player })
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

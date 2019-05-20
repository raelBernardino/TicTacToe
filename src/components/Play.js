import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { MainGameBoard, Row, Player, ArrowBack } from './StyledComponents'
import Winner from './Winner'
import '../App.css'

class Play extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const xWinCount = this.props.xWinCount
    const oWinCount = this.props.oWinCount
    const winnerStatus = `${this.props.player} wins!`
    return (
      <div className="App">
        {
          this.props.winnerFound ?
            <Winner
              winnerStatus={this.props.winnerStatus}
              xWin={this.props.xWinCount}
              oWin={this.props.oWinCount}
              playAgain={this.props.playAgain}
            />
            : null
        }
        <MainGameBoard style={{ flexDirection: "row" }}>
          <ArrowBack onClick={this.props.reset}><Link to="/" style={{color: '#EF626C', textDecoration: "none"}}>Back</Link></ArrowBack>
          <Player>
            <h1 style={{ color: '#68EDC6' }}>{this.props.playerOne}</h1>
            <h1>{xWinCount}</h1>
          </Player>
          <div style={{ width: "auto" }}>
            <Row>
              {this.props.renderSquare(0)}
              {this.props.renderSquare(1)}
              {this.props.renderSquare(2)}
            </Row>
            <Row>
              {this.props.renderSquare(3)}
              {this.props.renderSquare(4)}
              {this.props.renderSquare(5)}
            </Row>
            <Row>
              {this.props.renderSquare(6)}
              {this.props.renderSquare(7)}
              {this.props.renderSquare(8)}
            </Row>
          </div>
          <Player>
            <h1 style={{ color: '#EF626C' }}>{this.props.playerTwo}</h1>
            <h1>{oWinCount}</h1>
          </Player>
        </MainGameBoard>
      </div>
    )
  }
}

export default Play
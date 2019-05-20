import React from 'react'
import { Link } from "react-router-dom"
import { MainGameBoard, PlayerName, Player } from './StyledComponents'



const PlayerSelect = (props) => (
  <MainGameBoard style={{ flexDirection: "row" }}>
    <Player>
      <h1 style={{ color: "#68EDC6", fontSize: "60px" }}>x</h1>
      <PlayerName
        placeholder="Enter name for x..."
        onChange={props.onChangePlayerOne}
        value={props.playerOne} />
    </Player>
    <Link to="/play" style={{ textDecoration: "none", color: "#333", fontSize: "50px", fontWeight: "900", marginTop: "75px" }}>Play</Link>
    <Player>
      <h1 style={{ color: "#EF626C", fontSize: "60px" }}>o</h1>
      <PlayerName
        placeholder="Enter name for o..."
        onChange={props.onChangePlayerTwo}
        value={props.playerTwo} />
    </Player>
  </MainGameBoard>
)

export default PlayerSelect
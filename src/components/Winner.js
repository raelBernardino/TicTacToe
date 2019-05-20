import React from 'react'
import styled from 'styled-components'
import { MainGameBoard, Button } from './StyledComponents'


const WinnerGameBoard = styled(MainGameBoard)`
  background-color: #EFF6EE;
  position: absolute;
  `

const WinnerContent = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-weight: 100;
  font-size: 90px;
  color: #333;
`


const Winner = (props) => (
  <div className="Winner">
    <WinnerGameBoard>
      {
      props.player === 'x' ?
        <WinnerContent>
          <h1>{props.winnerStatus}</h1>
          <Button onClick={props.reset}>Play again</Button>
        </WinnerContent>
      :
        <WinnerContent>
          <h1>{props.winnerStatus}</h1>
          <Button onClick={props.playAgain}>Play again</Button>
        </WinnerContent>
      }
    </WinnerGameBoard>
  </div>
)

export default Winner
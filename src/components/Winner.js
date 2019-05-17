import React from 'react'
import styled from 'styled-components'
import { MainGameBoard } from './StyledComponents'


const WinnerGameBoard = styled(MainGameBoard)`
  background-color: #EFF6EE;
  position: absolute;
  `

const Button = styled.button`
  background-color: #68EDC6;
  color: white;
  border: none;
  outline: none;
  padding: 20px;
  border-radius: 5px;
  width: 220px;
  font-size: 30px;
  font-family: 'Yantramanav';
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
          <Button onClick={props.reset}>Play again</Button>
        </WinnerContent>
      }
    </WinnerGameBoard>
  </div>
)

export default Winner
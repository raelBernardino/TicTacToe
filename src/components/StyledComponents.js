import React from 'react'
import styled from 'styled-components'

const Square = styled.button`
  border: none;
  outline: none;
  width: 170px;
  height: 170px;
  padding: 10px;
  font-family: 'Yantramanav';
  font-weight: 900;
  font-size: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
  margin: 5px;
  color: ${props => props.primary ? '#68EDC6' : '#EF626C'};
  transition: .3s;
  &:hover{
    transition: .3s;
    background-color: white;
    cursor: pointer;
  }
`

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
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
  cursor: pointer;
`

const ArrowBack = styled.button`
  position: absolute;
  outline: none;
  border: none;
  background-color: transparent;
  padding: 5px;
  font-size: 20px;
  font-weight: 100;
  color: #EF626C;
  opacity: .5;
  top: 20px;
  left: 20px;
  transition: .3s;
  &:hover {
    opacity: 1;
    transition: .3s;
  }
`

const MainGameBoard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #EFF6EE;
  justify-content: center;
  align-items: center;
`
const Player = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const PlayerName = styled.input`
  outline: none;
  border: none;
  width: 300px;
  height: 30px;
  padding: 20px;
  margin: 30px;
`

export { Square, Row, MainGameBoard, Player, PlayerName, Button, ArrowBack }
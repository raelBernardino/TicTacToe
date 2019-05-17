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
  width: 80%;
  height: auto;
  align-items: center;
  justify-content: center;
  flex-direction: row;
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

export { Square, Row, MainGameBoard }
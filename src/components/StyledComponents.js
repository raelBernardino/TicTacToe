import styled from 'styled-components'

const Square = styled.button`
  border: none;
  outline: none;
  width: 145px;
  height: 145px;
  padding: 10px;
  font-family: 'Yantramanav';
  font-weight: 900;
  font-size: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F5FBEF;
  margin: 10px;
  color: #06D6A0;
  transition: .3s;
  &:hover{
    transition: .3s;
    background-color: #efffe0;
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

const GameBoard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #06D6A0;
  justify-content: center;
  align-items: center;
`

export { Square, Row, GameBoard }
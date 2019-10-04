import * as React from 'react'
import { connect } from 'react-redux'
import { Store, Difficulty, Position, GameState } from '../store/initialState'
import Cell from './Cell'
import { distpatchCreateStartGameAction } from '../actions/gameActions' 

export function Board(props: { difficulty: Difficulty } & { gameState: GameState } & BoardActions) {
  const clickAction : Function = cellAction(props.gameState,  props.startGame, props.difficulty)
  return (
    <div style={{ display: 'flex' }}>
      {cells(props.difficulty.boardWidth, props.difficulty.boardHeight, clickAction)}
    </div>
  )
}

function cellAction(gameState : GameState, startGame: Function, difficulty: Difficulty) : Function {
  if (gameState === GameState.NotStarted) return (position: Position) => startGame(position, difficulty)
  return (position: Position) => console.log("arreadySarted, nice try on: ", position.x , position.y)
}
  
function cells(width: number, height : Number, clickAction : Function) {
  const cellsRows = []
  for (let i = 0; i < width; i++) {
    cellsRows.push(cellRow(height, i, clickAction))
  }
  return cellsRows
}

function cellRow(height : Number, rowNumber: number, clickAction : Function) {
  const cellsRow = []
  for (let j = 0; j < height; j++) {
    cellsRow.push(<Cell x={j} y={rowNumber} key={`cell-${j}-${rowNumber}`} clickAction={() => clickAction({x: j, y: rowNumber})}/>)
  }
  return (
    <div key={`cell-row-${rowNumber}`}>
      {cellsRow}
    </div>
  ) 
}

export default connect(
  (state: Store) : { difficulty: Difficulty } & { gameState: GameState } => { return { difficulty: {...state.difficulty }, gameState: state.gameState } },
  (dispatch: Function) : BoardActions => { return {
    startGame: (position: Position, difficulty: Difficulty) => distpatchCreateStartGameAction(position, difficulty)(dispatch)
  }}
)(Board)

interface BoardActions {
  startGame: Function
}
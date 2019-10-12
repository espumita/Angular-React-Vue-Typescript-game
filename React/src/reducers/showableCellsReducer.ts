
import initialState, { Position, Mines, Difficulty } from '../store/initialState'
import { MakeMovementAction } from '../actions/gameActions'
import { MAKE_MOVEMENT } from '../actions/actionsTypes'

function getPerimeterFor(position : Position, difficulty : Difficulty){
    const perimeter = []
    if (position.x + 1 < difficulty.boardWidth && position.y + 1 < difficulty.boardHeight) perimeter.push(new Position(position.x + 1, position.y + 1))
    if (position.x + 1 < difficulty.boardWidth ) perimeter.push(new Position(position.x + 1, position.y ))
    if (position.y + 1 < difficulty.boardHeight) perimeter.push(new Position(position.x, position.y + 1))
    if (position.x - 1 >= 0 && position.y -1 >= 0) perimeter.push(new Position(position.x - 1, position.y - 1))
    if (position.x - 1 >= 0) perimeter.push(new Position(position.x - 1, position.y))
    if (position.y -1 >= 0) perimeter.push(new Position(position.x, position.y - 1))
    if (position.x + 1 < difficulty.boardWidth && position.y -1 >= 0) perimeter.push(new Position(position.x + 1, position.y - 1))
    if (position.x - 1 >= 0 && position.y + 1 < difficulty.boardHeight) perimeter.push(new Position(position.x - 1, position.y + 1))
    return perimeter
}

function getForPerimeter(position: Position, mines: Mines, state: Position[], difficulty : Difficulty) : Position [] {
 const perimeterCelllsPosiiton = mines.perimeterCells.map(x => x.position)
 if (perimeterCelllsPosiiton.some(x => x.sameAs(position))) return [] //Not applicable
 if (!mines.positions.some(x => x.sameAs(position))) {
    const positionPerimeter = getPerimeterFor(position, difficulty)
    const newPerimeterShoweable = positionPerimeter.filter(x => !state.some(y => y.sameAs(x)))
    const arraysToPropagate = newPerimeterShoweable.filter(x => !perimeterCelllsPosiiton.some(y => y.sameAs(x)))
    const a : Position[] = []
    arraysToPropagate.forEach(y=>{
        a.push(...getForPerimeter(y, mines, [...state, ...newPerimeterShoweable], difficulty))
    })
    return [ ...newPerimeterShoweable, ...a  ]
 }
  return [ ]
}

export default (state: Position[] = undefined, action: MakeMovementAction, mines: Mines, difficulty : Difficulty) => {
    if (state == undefined) return initialState.showableCells
    switch(action.type){
        case MAKE_MOVEMENT: {
            if(IsNotShowedYet(action.position, state)) {
                //Check if mine loose?
                if (IsMine(action.position, mines.positions)){
                    return [ ...state, ...mines.positions]
                } 

                return [ ...state, action.position, ...getForPerimeter(action.position, mines, state, difficulty) ]
                //Win movement?
            }
        }
        default: return state
    }
}

function IsNotShowedYet(position: Position, positionsToShow: Position[]){
    return !positionsToShow.some(x => x.sameAs(position))
}

function IsMine(position: Position, mines: Position[]){
    return mines.some(x => x.sameAs(position))
}
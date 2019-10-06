
import initialState, { Position, Mines } from '../store/initialState'
import { MakeMovementAction } from '../actions/gameActions'
import { MAKE_MOVEMENT } from '../actions/actions'

function getTopOne(position : Position){
    if (position.x + 1 >= 8 || position.y + 1 >= 8) return
    return new Position(position.x + 1, position.y + 1)
    //const perimeter = []
    //perimeter.push(new Position(position.x + 1, position.y + 1))
    //perimeter.push(new Position(position.x + 1, position.y ))
    //perimeter.push(new Position(position.x, position.y + 1))
    //perimeter.push(new Position(position.x - 1, position.y - 1))
    //perimeter.push(new Position(position.x - 1, position.y))
    //perimeter.push(new Position(position.x, position.y - 1))
    //perimeter.push(new Position(position.x + 1, position.y - 1))
    //perimeter.push(new Position(position.x - 1, position.y + 1))
    //return perimeter
}

function getForPerimeter(position: Position, minesPositions: Position[], acumulatedState: Position[]) : Position [] {
    console.log("getForPerimeter", position)
    console.log("minesPositions", minesPositions)
    return []
    const a : Position [] = []
    const topOne = getTopOne(position)
    if (topOne === undefined) return []
    if (acumulatedState.some(x => x.sameAs(topOne))) return []
    if (!minesPositions.some(x => x.sameAs(topOne))) a.push(topOne)
    console.log("Top one is", topOne, minesPositions)
    return getForPerimeter(topOne, minesPositions, [...acumulatedState, ...a])
}

export default (state: Position[] = undefined, action: MakeMovementAction, mines: Mines) => {
    if (state == undefined) return initialState.showableCells
    switch(action.type){
        case MAKE_MOVEMENT: {
            console.log('Movement made', action.position.x, action.position.y)
            if(!state.some(x => action.position.sameAs(x))) {
                const newState = [...state, action.position]
                return [...newState, /*...getForPerimeter(action.position, mines.positions, newState)*/]
                //Win movement?
            }
        }
        default: return state
    }
}

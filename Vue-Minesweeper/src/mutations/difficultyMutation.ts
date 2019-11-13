import { Difficulty } from '../model'
import { CHANGE_DIFFICULTY } from './mutationTypes'

export default {
    [CHANGE_DIFFICULTY]: (state: Difficulty, difficulty: Difficulty) => {
        state.boardWidth = difficulty.boardWidth
        state.boardHeight = difficulty.boardHeight
        state.minesNumber = difficulty.minesNumber
    }
}
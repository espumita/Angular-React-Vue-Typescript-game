import reducer from '../../src/reducers/difficultyReducer' 
import { SET_DIFFICULTY } from '../../src/actions/actionsTypes'
import initialState from '../../src/store/initialState'
import { SetDifficultyAction } from '../../src/actions/setDifficulty'
import { ExpertDifficulty, BeginnerDifficulty } from '../../src/model'

describe('Difficulty reducers should', () => {

    test('set beginner at the beginning', () => {
        const beginnerDifficulty = new BeginnerDifficulty()
        const setDifficultyAction : SetDifficultyAction = {
            type: SET_DIFFICULTY,
            difficulty: beginnerDifficulty
        }

        const newState = reducer(undefined, setDifficultyAction)

        expect(newState.boardWidth).toBe(beginnerDifficulty.boardWidth)
        expect(newState.boardHeight).toBe(beginnerDifficulty.boardHeight)
        expect(newState.minesNumber).toBe(beginnerDifficulty.minesNumber)
    })

})
import reducer from '../../src/reducers/difficultyReducer' 
import { SET_DIFFICULTY } from '../../src/actions/actionsTypes'
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

    test('set another difficulty', () => {
        const beginnerDifficulty = new BeginnerDifficulty()
        const expertDifficulty = new ExpertDifficulty()
        const setDifficultyAction : SetDifficultyAction = {
            type: SET_DIFFICULTY,
            difficulty: expertDifficulty
        }

        const newState = reducer(beginnerDifficulty, setDifficultyAction)

        expect(newState.boardWidth).toBe(expertDifficulty.boardWidth)
        expect(newState.boardHeight).toBe(expertDifficulty.boardHeight)
        expect(newState.minesNumber).toBe(expertDifficulty.minesNumber)
    })

})
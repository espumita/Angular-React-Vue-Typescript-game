import { difficultyReducer as reducer } from '../../src/reducers/difficulty.reducer'
import { SET_DIFFICULTY } from '../../src/actions/actionsTypes'
import { ExpertDifficulty, BeginnerDifficulty } from '../../src/model'

describe('Difficulty reducers should', () => {

    test('set beginner at the beginning', () => {
        const beginnerDifficulty = new BeginnerDifficulty()
        const setDifficultyAction = {
            type: undefined,
            newDifficulty: beginnerDifficulty
        }

        const newState = reducer(undefined, setDifficultyAction)

        expect(newState).toStrictEqual(beginnerDifficulty)
    })

    test('set another difficulty', () => {
        const beginnerDifficulty = new BeginnerDifficulty()
        const expertDifficulty = new ExpertDifficulty()
        const setDifficultyAction = {
            type: SET_DIFFICULTY,
            newDifficulty: expertDifficulty
        }

        const newState = reducer(beginnerDifficulty, setDifficultyAction)

        expect(newState).toStrictEqual(expertDifficulty)
    })

})
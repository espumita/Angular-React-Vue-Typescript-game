import reducer from '../../src/reducers/difficulty.reducer'
import { SET_DIFFICULTY } from '../../src/actions/actionsTypes'
import { ExpertDifficulty, BeginnerDifficulty } from '../../src/model'
import { SetDifficultyAction } from '../../src/actions/setDifficulty'

describe('Difficulty reducers should', () => {

    test('set beginner at the beginning', () => {
        const beginnerDifficulty = new BeginnerDifficulty()
        const setDifficultyAction : SetDifficultyAction = {
            type: SET_DIFFICULTY,
            difficulty: beginnerDifficulty
        }

        const newState = reducer(undefined, setDifficultyAction)

        expect(newState).toStrictEqual(beginnerDifficulty)
    })

    test('set another difficulty', () => {
        const beginnerDifficulty = new BeginnerDifficulty()
        const expertDifficulty = new ExpertDifficulty()
        const setDifficultyAction : SetDifficultyAction = {
            type: SET_DIFFICULTY,
            difficulty: expertDifficulty
        }

        const newState = reducer(beginnerDifficulty, setDifficultyAction)

        expect(newState).toStrictEqual(expertDifficulty)
    })

})
import mutations from '@/mutations/difficultyMutation' 
import { CHANGE_DIFFICULTY } from '@/mutations/mutationTypes'
import { BeginnerDifficulty, ExpertDifficulty, Difficulty } from '@/model'

describe('Difficulty reducers should', () => {

    test('set another difficulty', () => {
        const state = new BeginnerDifficulty()
        const expertDifficulty = new ExpertDifficulty()

        mutations[CHANGE_DIFFICULTY](state, expertDifficulty)

        expect(state).toEqual(expertDifficulty)
    })

})
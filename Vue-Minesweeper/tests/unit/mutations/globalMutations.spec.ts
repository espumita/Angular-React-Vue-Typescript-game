import mutations from '@/mutations/globalMutations'
import { RESET_GAME_MUTATION } from '@/mutations/mutationTypes'
import { Store } from '@/store/store'
import { ExpertDifficulty, GameState, Position, PerimeterCell } from '@/model'

describe('Global mutation should', () => {

    test('reset game state and mines but not difficulty', () => {
        const expertDifficulty  = new ExpertDifficulty()
        const state : Store = {
            difficulty: expertDifficulty,
            gameState: { state: GameState.Started },
            mines: {
                positions: [ new Position(0, 0) ],
                perimeterCells: [
                    new PerimeterCell(new Position(1, 0))
                ]
            },
            showableCells: [ new Position(1, 0) ]
        }

        mutations[RESET_GAME_MUTATION](state)

        expect(state.difficulty).toStrictEqual(expertDifficulty)
        expect(state.gameState.state).toBe(GameState.NotStarted)
        expect(state.mines.positions.length).toBe(0)
        expect(state.mines.perimeterCells.length).toBe(0)
        expect(state.showableCells.length).toBe(0)
    })

})
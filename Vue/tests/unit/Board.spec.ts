import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Board from '@/components/Board.vue'
import Cell from '@/components/Cell.vue'
import { storeBuilder } from './mockStoreBuilder'
import { BeginnerDifficulty, IntermediateDifficulty, ExpertDifficulty, GameState, Position } from '@/model'
import { START_GAME } from '@/actions/actionsTypes'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Board should', () => {

  test('have 8 x 8 cells in beginner difficulty', () => {
    const store = storeBuilder()
                    .withDifficulty(new BeginnerDifficulty())
                    .build()

    const wrapper = mountBoardComponentWith(store)

    const cells = wrapper.findAll(Cell)
    expect(cells.length).toBe(64)
  })

  test('have 16 x 16 cells in intermediate difficulty', () => {
    const store = storeBuilder()
                    .withDifficulty(new IntermediateDifficulty())
                    .build()

    const wrapper = mountBoardComponentWith(store)

    const cells = wrapper.findAll(Cell)
    expect(cells.length).toBe(256)
  })

  test('have 30 x 16 cells in expert difficulty', () => {
    const store = storeBuilder()
                    .withDifficulty(new ExpertDifficulty())
                    .build()

    const wrapper = mountBoardComponentWith(store)

    const cells = wrapper.findAll(Cell)
    expect(cells.length).toBe(480)
  })

  test('game start when click in the first cell', () =>{
    const store = storeBuilder()
                    .withGameState(GameState.NotStarted)
                    .withActions()
                    .build()
    const wrapper = mountBoardComponentWith(store)
    const aCell = wrapper.find(Cell)

    aCell.trigger('click')

    expect(store.dispatch).toHaveBeenCalledWith(START_GAME, expect.any(Position))
})

})

function mountBoardComponentWith(store: any) {
  return mount(Board, { store, localVue })
}
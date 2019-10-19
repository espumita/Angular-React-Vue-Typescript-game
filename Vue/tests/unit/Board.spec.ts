import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Board from '@/components/Board.vue'
import Cell from '@/components/Cell.vue'
import { storeBuilder } from './mockStoreBuilder'
import { BeginnerDifficulty } from '@/model'

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
})

function mountBoardComponentWith(store: any) {
  return mount(Board, { store, localVue })
}
import { mount, createLocalVue } from '@vue/test-utils'
import TopBar from '@/components/TopBar.vue'
import Vuex from 'vuex'
import { storeBuilder } from './mockStoreBuilder'
import { RESET_GAME, SET_DIFFICULTY } from '@/actions/actionsTypes'
import { BeginnerDifficulty, IntermediateDifficulty, ExpertDifficulty } from '@/model'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Topbar should', () =>{
  
    test('reset game when click reset button', () =>{
        const store = storeBuilder()
                        .withDispatch()
                        .build()
        const wrapper = mountTopBarComponentWith(store)
        const resetButton = wrapper.find('#reset-game-button')

        resetButton.trigger('click')

        expect(store.dispatch).toHaveBeenCalledWith(RESET_GAME)
    })

    test('change to begginer difficulty and reset game when click on buttom', () =>{
        const store = storeBuilder()
                        .withDispatch()
                        .build()
        const wrapper = mountTopBarComponentWith(store)
        const resetButton = wrapper.find('#set-beginner-difficulty-button')

        resetButton.trigger('click')

        expect(store.dispatch).toHaveBeenCalledWith(SET_DIFFICULTY, new BeginnerDifficulty())
        expect(store.dispatch).toHaveBeenCalledWith(RESET_GAME)
    })

    test('change to intemediate difficulty and reset game when click on buttom', () =>{
        const store = storeBuilder()
                        .withDispatch()
                        .build()
        const wrapper = mountTopBarComponentWith(store)
        const resetButton = wrapper.find('#set-intermediate-difficulty-button')

        resetButton.trigger('click')

        expect(store.dispatch).toHaveBeenCalledWith(SET_DIFFICULTY, new IntermediateDifficulty())
        expect(store.dispatch).toHaveBeenCalledWith(RESET_GAME)
    })

    test('change to expert difficulty and reset game when click on buttom', () =>{
        const store = storeBuilder()
                        .withDispatch()
                        .build()
        const wrapper = mountTopBarComponentWith(store)
        const resetButton = wrapper.find('#set-expert-difficulty-button')

        resetButton.trigger('click')

        expect(store.dispatch).toHaveBeenCalledWith(SET_DIFFICULTY, new ExpertDifficulty())
        expect(store.dispatch).toHaveBeenCalledWith(RESET_GAME)
    })
})

function mountTopBarComponentWith(store: any) {
    return mount(TopBar, { store, localVue })
}

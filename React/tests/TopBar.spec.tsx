import * as React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import TopBar from '../src/components/TopBar'
import { Provider } from 'react-redux'
import { storeBuilder } from './mockStoreBuilder'
import { RESET_GAME, SET_DIFFICULTY } from '../src/actions/actionsTypes'
import { BeginnerDifficulty, IntermediateDifficulty, ExpertDifficulty, Difficulty } from '../src/model'

Enzyme.configure({ adapter: new Adapter() })

describe('Topbar should', () =>{
  
    test('reset game when click reset button', () =>{
        const store = storeBuilder()
                        .build()
        const wrapper = mountTopBarComponentWith(store)
        const resetButton = wrapper.findWhere(node => node.key() === 'reset-game-button')

        resetButton.simulate('click')

        const actions = store.getActions()
        expect(actions[0].type).toBe(RESET_GAME)
    })

    test('change to begginer difficulty and reset game when click on buttom', () =>{
        const store = storeBuilder()
                        .build()
        const wrapper = mountTopBarComponentWith(store)
        const resetButton = wrapper.findWhere(node => node.key() === 'set-beginner-difficulty-button')

        resetButton.simulate('click')

        const actions = store.getActions()
        expect(actions[0].type).toBe(SET_DIFFICULTY)
        expect(actions[0].difficulty).toStrictEqual(new BeginnerDifficulty())
        expect(actions[1].type).toBe(RESET_GAME)
    })

    test('change to intemediate difficulty and reset game when click on buttom', () =>{
        const store = storeBuilder()
                        .build()
        const wrapper = mountTopBarComponentWith(store)
        const resetButton = wrapper.findWhere(node => node.key() === 'set-intermediate-difficulty-button')

        resetButton.simulate('click')

        const actions = store.getActions()
        expect(actions[0].type).toBe(SET_DIFFICULTY)
        expect(actions[0].difficulty).toStrictEqual(new IntermediateDifficulty())
        expect(actions[1].type).toBe(RESET_GAME)
    })

    test('change to expert difficulty and reset game when click on buttom', () =>{
        const store = storeBuilder()
                        .build()
        const wrapper = mountTopBarComponentWith(store)
        const resetButton = wrapper.findWhere(node => node.key() === 'set-expert-difficulty-button')

        resetButton.simulate('click')

        const actions = store.getActions()
        expect(actions[0].type).toBe(SET_DIFFICULTY)
        expect(actions[0].difficulty).toStrictEqual(new ExpertDifficulty())
        expect(actions[1].type).toBe(RESET_GAME)
    })

})

function mountTopBarComponentWith(store: any) {
    return mount(
        <Provider store={store}>
            <TopBar/>
        </Provider>
    )
}

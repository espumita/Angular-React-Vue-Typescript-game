import * as React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import TopBar from '../src/components/TopBar'
import { Provider } from 'react-redux'
import { storeBuilder } from './mockStoreBuilder'
import { RESET_GAME } from '../src/actions/actionsTypes'

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

})

function mountTopBarComponentWith(store: any) {
    return mount(
        <Provider store={store}>
            <TopBar/>
        </Provider>
    )
}
import * as React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import BoardComponent, { Board } from '../src/components/Board'
import Cell from '../src/components/Cell'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { Store, BeginerDifficulty, GameState } from '../src/store/initialState';
import { START_GAME_ACTION } from '../src/actions/exampleAction';

Enzyme.configure({ adapter: new Adapter() });

describe('Board should', () =>{

    test('have 8 x 8 cells in beginner difficulty', () =>{
        const initialStore : Store = {
            difficulty: new BeginerDifficulty(),
            gameState: GameState.NotStarted
        }
        const mockStore = configureMockStore<Store>([])
        const store = mockStore(initialStore)
        const wrapper = mount(
            <Provider store={store}>
                <BoardComponent/>
            </Provider>
        )
        const cells = wrapper.find(Cell)

        expect(cells.length).toBe(64)
    })

    test('game start when click in the first cell', () =>{
        const initialStore : Store = {
            difficulty: new BeginerDifficulty(),
            gameState: GameState.NotStarted
        }
        const mockStore = configureMockStore<Store>([])
        const store = mockStore(initialStore)
        const wrapper = mount(
            <Provider store={store}>
                <BoardComponent/>
            </Provider>
        )
        const cells = wrapper.find(Cell)
        const aCell = cells.first()

        aCell.simulate('click')

        const actions = store.getActions()
        expect(actions[0].type).toBe(START_GAME_ACTION + "A")
    })
    

})
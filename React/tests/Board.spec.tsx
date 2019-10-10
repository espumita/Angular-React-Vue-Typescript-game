import * as React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import BoardComponent from '../src/components/Board'
import Cell from '../src/components/Cell'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { Store, BeginerDifficulty, GameState, IntermediateDifficulty } from '../src/store/initialState';
import { START_GAME_ACTION } from '../src/actions/actions';

Enzyme.configure({ adapter: new Adapter() });

describe('Board should', () =>{

    test('have 8 x 8 cells in beginner difficulty', () =>{
        const initialStore : Store = {
            difficulty: new BeginerDifficulty(),
            gameState: GameState.NotStarted,
            mines: { positions: [], perimeterCells: []},
            showableCells: []
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

    test('have 16 x 16 cells in intermediate difficulty', () =>{
        const initialStore : Store = {
            difficulty: new IntermediateDifficulty(),
            gameState: GameState.NotStarted,
            mines: { positions: [], perimeterCells: []},
            showableCells: []
        }
        const mockStore = configureMockStore<Store>([])
        const store = mockStore(initialStore)
        const wrapper = mount(
            <Provider store={store}>
                <BoardComponent/>
            </Provider>
        )
        const cells = wrapper.find(Cell)

        expect(cells.length).toBe(256)
    })

    test('game start when click in the first cell', () =>{
        const initialStore : Store = {
            difficulty: new BeginerDifficulty(),
            gameState: GameState.NotStarted,
            mines: { positions: [], perimeterCells: []},
            showableCells: []
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
        expect(actions[0].type).toBe(START_GAME_ACTION)
    })

    test('game only start once', () =>{
        const initialStore : Store = {
            difficulty: new BeginerDifficulty(),
            gameState: GameState.Started,
            mines: { positions: [], perimeterCells: []},
            showableCells: []
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
        const startActions = actions.filter(x => x.type == START_GAME_ACTION)
        expect(startActions.length).toBe(0)
    })
    

})
import * as React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import BoardComponent from '../src/components/Board'
import Cell from '../src/components/Cell'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { Store, BeginerDifficulty, GameState, IntermediateDifficulty, ExpertDifficulty, CellType, Position, PerimeterCell } from '../src/store/initialState';
import { START_GAME_ACTION, MAKE_MOVEMENT } from '../src/actions/actions';

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

    test('have 30 x 16 cells in expert difficulty', () =>{
        const initialStore : Store = {
            difficulty: new ExpertDifficulty(),
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

        expect(cells.length).toBe(480)
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
        const movementActions = actions.filter(x => x.type == MAKE_MOVEMENT)
        expect(movementActions.length).toBe(1)
    })
    
    test('not show any cell before be clicked', () =>{
        const initialStore : Store = {
            difficulty: {
                boardWidth: 1,
                boardHeight : 1,
                minesNumber: 0
            },
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
        const cells = wrapper.findWhere(node => node.key() === 'cell-0-0')
        const aCell = cells.first()

        expect(aCell.prop('type')).toBe(CellType.None)
    })

    test('show a empty cell when was clicked and there is no mines close', () =>{
        const initialStore : Store = {
            difficulty: {
                boardWidth: 1,
                boardHeight : 1,
                minesNumber: 0
            },
            gameState: GameState.Started,
            mines: { positions: [], perimeterCells: []},
            showableCells: [
                new Position(0, 0)
            ]
        }
        const mockStore = configureMockStore<Store>([])
        const store = mockStore(initialStore)
        const wrapper = mount(
            <Provider store={store}>
                <BoardComponent/>
            </Provider>
        )
        const cells = wrapper.findWhere(node => node.key() === 'cell-0-0')
        const aCell = cells.first()

        expect(aCell.prop('type')).toBe(CellType.EmptyCell)
    })

    test.each([
        [ 1, CellType.OneMineClose    ],
        [ 2, CellType.TwoMinesClose   ],
        [ 3, CellType.TreeMinesClose  ],
        [ 4, CellType.FourMinesClose  ],
        [ 5, CellType.FiveMinesClose  ],
        [ 6, CellType.SixMinesClose   ],
        [ 7, CellType.SevenMinesClose ],
        [ 8, CellType.EightMinesClose ],
    ])('show a cell with number %i when there are mines close',(numberOfMinesClose, cellType) => {
        const initialStore : Store = {
            difficulty: {
                boardWidth: 1,
                boardHeight : 1,
                minesNumber: 0
            },
            gameState: GameState.Started,
            mines: {
                positions: [],
                perimeterCells: [ new PerimeterCell(new Position(0, 0), numberOfMinesClose) ]
            },
            showableCells: [
                new Position(0, 0)
            ]
        }
        const mockStore = configureMockStore<Store>([])
        const store = mockStore(initialStore)
        const wrapper = mount(
            <Provider store={store}>
                <BoardComponent/>
            </Provider>
        )
        const cells = wrapper.findWhere(node => node.key() === 'cell-0-0')
        const aCell = cells.first()

        expect(aCell.prop('type')).toBe(cellType)
    });

})
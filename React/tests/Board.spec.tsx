import * as React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import BoardComponent from '../src/components/Board'
import Cell from '../src/components/Cell'
import { Provider } from 'react-redux'
import { BeginnerDifficulty, GameState, IntermediateDifficulty, ExpertDifficulty, CellType, Position, PerimeterCell } from '../src/model/index';
import { START_GAME, MAKE_MOVEMENT } from '../src/actions/actionsTypes';
import { storeBuilder } from './mockStoreBuilder'

Enzyme.configure({ adapter: new Adapter() });

describe('Board should', () =>{

    test('have 8 x 8 cells in beginner difficulty', () =>{
        const store = storeBuilder()
                        .withDifficulty(new BeginnerDifficulty())
                        .build()

        const wrapper = mountBoardComponentWith(store)

        const cells = wrapper.find(Cell)
        expect(cells.length).toBe(64)
    })

    test('have 16 x 16 cells in intermediate difficulty', () =>{
        const store = storeBuilder()
                        .withDifficulty(new IntermediateDifficulty())
                        .build()

        const wrapper = mountBoardComponentWith(store)

        const cells = wrapper.find(Cell)
        expect(cells.length).toBe(256)
    })

    test('have 30 x 16 cells in expert difficulty', () =>{
        const store = storeBuilder()
                        .withDifficulty(new ExpertDifficulty())
                        .build()

        const wrapper = mountBoardComponentWith(store)

        const cells = wrapper.find(Cell)
        expect(cells.length).toBe(480)
    })

    test('game start when click in the first cell', () =>{
        const store = storeBuilder()
                        .withGameState(GameState.NotStarted)
                        .build()
        const wrapper = mountBoardComponentWith(store)
        const cells = wrapper.find(Cell)
        const aCell = cells.first()

        aCell.simulate('click')

        const actions = store.getActions()
        expect(actions[0].type).toBe(START_GAME)
    })

    test('game only start once', () =>{
        const store = storeBuilder()
                        .withGameState(GameState.Started)
                        .build()
        const wrapper = mountBoardComponentWith(store)
        const cells = wrapper.find(Cell)
        const aCell = cells.first()

        aCell.simulate('click')

        const actions = store.getActions()
        const startActions = actions.filter(x => x.type == START_GAME)
        expect(startActions.length).toBe(0)
        const movementActions = actions.filter(x => x.type == MAKE_MOVEMENT)
        expect(movementActions.length).toBe(1)
    })
    
    test('do not do nothing when click on a showed cell', () => {
        const store = storeBuilder()
                        .withGameState(GameState.Started)
                        .withShowableCell(new Position(0, 0))
                        .build()
        const wrapper = mountBoardComponentWith(store)
        const cells = wrapper.findWhere(node => node.key() === 'cell-0-0')
        const aCell = cells.first()

        aCell.simulate('click')

        const actions = store.getActions()
        expect(actions.length).toBe(0)
    }) 

    test('not show any cell before be clicked', () =>{
        const store = storeBuilder()
                        .withDifficulty({
                            boardWidth: 1,
                            boardHeight : 1,
                            minesNumber: 0
                        })
                        .withGameState(GameState.Started)
                        .build()

        const wrapper = mountBoardComponentWith(store)

        const cells = wrapper.findWhere(node => node.key() === 'cell-0-0')
        const aCell = cells.first()
        expect(aCell.prop('type')).toBe(CellType.None)
    })

    test('show a empty cell when was clicked and there is no mines close', () =>{
        const store = storeBuilder()
                        .withDifficulty({
                            boardWidth: 1,
                            boardHeight : 1,
                            minesNumber: 0
                        })
                        .withGameState(GameState.Started)
                        .withShowableCell(new Position(0, 0))
                        .build()
        
        const wrapper = mountBoardComponentWith(store)

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
        const store = storeBuilder()
                        .withDifficulty({
                            boardWidth: 1,
                            boardHeight : 1,
                            minesNumber: 0
                        })
                        .withGameState(GameState.Started)
                        .withShowableCell(new Position(0, 0))
                        .withPerimeterCell(new PerimeterCell(new Position(0, 0), numberOfMinesClose))
                        .build()

        const wrapper = mountBoardComponentWith(store)

        const cells = wrapper.findWhere(node => node.key() === 'cell-0-0')
        const aCell = cells.first()
        expect(aCell.prop('type')).toBe(cellType)
    });

})

function mountBoardComponentWith(store: any) {
    return mount(
        <Provider store={store}>
            <BoardComponent/>
        </Provider>
    )
}
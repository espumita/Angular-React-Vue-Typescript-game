import { initialState, Store } from '../src/store/initialState'

describe('Store should', () => {

    test('be initialized with empty mines', () => {

       expect(initialState.board.mines).toStrictEqual([])
    })

    

})


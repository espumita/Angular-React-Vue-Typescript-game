import initialState from '../src/store/initialState'

describe('Store should', () => {

    test('be initialized with empty mines', () => {

       expect(initialState.mines).toStrictEqual([])
    })

    

})



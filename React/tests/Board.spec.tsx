import * as React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import BoardComponent, { Board } from '../src/components/Board'
import Cell from '../src/components/Cell'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { Store, BeginerDifficulty } from '../src/store/initialState';

Enzyme.configure({ adapter: new Adapter() });

describe('Board should', () =>{

    test('Have 8 x 8 cells in beginner difficulty', () =>{
        const initialStore : Store = {
            difficulty: new BeginerDifficulty()
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

})
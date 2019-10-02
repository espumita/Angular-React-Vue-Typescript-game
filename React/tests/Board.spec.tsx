import * as React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import BoardComponent, { Board } from '../src/components/Board'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { Store } from '../src/store/initialState';

Enzyme.configure({ adapter: new Adapter() });

test('MY BOARD TEST', () => {
    const start : Store = {
        mines: [
            {position: { x:1, y:1}},
            {position: { x:1, y:1}},
            {position: { x:1, y:1}}
        ]
    }
    const mockStore = configureMockStore<Store>([])
    const store = mockStore(start)

    const wrapper = mount(
        <Provider store={store}>
            <BoardComponent/>
        </Provider>
    )
    const board = wrapper.find(Board)
    expect(board.prop('mines')).toBe([])
})
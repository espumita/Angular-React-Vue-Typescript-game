import * as React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Board from '../src/components/Board'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { Store } from '../src/store/initialState';

Enzyme.configure({ adapter: new Adapter() });

test('MY BOARD TEST', () => {
    const start : Store = {
        mines: [
            { position: { x: 1, y: 1 } }
        ]
    }
    const mockStore = configureStore([])
    const store = mockStore(start)

    const wrapper = shallow(
        <Provider store={store}>
            <Board/>
        </Provider>
    )
    const board = wrapper.find(Board)
    console.log(board)
    expect(wrapper.exists()).toBe(true)
})
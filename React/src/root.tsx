import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configStore from './store/configStore'
import Board from './components/Board'

const store = configStore()

ReactDOM.render(
    <Provider store={store}>
        <Board/>
    </Provider>,
    document.getElementById("root")
)
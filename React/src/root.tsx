import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configStore from './store/configStore'
import Board from './components/Board'
import TopBar from './components/TopBar'

const store = configStore()

ReactDOM.render(
    <Provider store={store}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <TopBar/>
            <Board/>
        </div>
    </Provider>,
    document.getElementById("root")
)
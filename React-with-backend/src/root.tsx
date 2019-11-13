import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configStore from './store/configStore'

const store = configStore()

ReactDOM.render(
    <Provider store={store}>
        <div>
        </div>
    </Provider>,
    document.getElementById("root")
)
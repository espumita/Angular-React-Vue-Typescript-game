import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import configStore from './store/configStore'
import ThemeProvider from './components/ThemeProvider'
import App from './components/App'
import { BrowserRouter } from 'react-router-dom'

const store = configStore()

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </ThemeProvider>
    </Provider>,
    document.getElementById("root")
)
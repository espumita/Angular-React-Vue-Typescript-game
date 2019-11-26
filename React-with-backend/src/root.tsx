import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configStore from './store/configStore'
import TopBar from './components/TopBar'
import ThemeProvider from './components/ThemeProvider'

const store = configStore()

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider>
            <TopBar/>
        </ThemeProvider>
    </Provider>,
    document.getElementById("root")
)
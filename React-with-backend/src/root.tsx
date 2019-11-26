import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import configStore from './store/configStore'
import TopBar from './components/TopBar'
import ThemeProvider from './components/ThemeProvider'
import App from './components/App'
import Footer from './components/Footer'

const store = configStore()

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider>
            <TopBar/>
            <App/>
            <Footer/>
        </ThemeProvider>
    </Provider>,
    document.getElementById("root")
)
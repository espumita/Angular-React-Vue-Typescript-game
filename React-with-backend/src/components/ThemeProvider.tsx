import * as React from 'react'
import { Theme } from "../model/Theme";
import {DarkTheme} from "../themes/dark/theme.dark";
import {LightTheme} from "../themes/light/theme.ligth";

const ThemeProvider = ({children}) => {
    const context = React.createContext<Theme | null >(null);
    const theme = new LightTheme()
    return (
        <context.Provider value={theme}>
            {children}
        </context.Provider>
    )
}

export default ThemeProvider

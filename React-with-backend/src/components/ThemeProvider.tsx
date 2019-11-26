import * as React from 'react'
import {DarkTheme} from "../themes/dark/theme.dark";
import {LightTheme} from "../themes/light/theme.ligth"
import {ThemeContext} from "../hooks/ThemeContext"

export const CustomThemeContext =  React.createContext<ThemeContext | null >(null)

const ThemeProvider = ({children}) => {
    const theme = new LightTheme()
    const themeContext : ThemeContext = {
        themeColors: theme.colors,
        changeTheme: () => {}
    }
    return (
        <CustomThemeContext.Provider value={themeContext}>
            {children}
        </CustomThemeContext.Provider>
    )
}

export default ThemeProvider

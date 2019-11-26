import * as React from 'react'
import {DarkTheme} from "../themes/dark/theme.dark";
import {LightTheme} from "../themes/light/theme.ligth"
import {ThemeContext} from "../hooks/ThemeContext"
import {useState} from "react";

export const CustomThemeContext =  React.createContext<ThemeContext | null >(null)

const ThemeProvider = ({children}) => {
    const [theme, changeCurrentTheme] = useState(new LightTheme())
    const themeContext : ThemeContext = {
        themeColors: theme.colors,
        changeTheme: () => {
            const newTheme = theme instanceof LightTheme
                ? new DarkTheme()
                : new LightTheme()
                changeCurrentTheme(newTheme)
        }
    }
    return (
        <CustomThemeContext.Provider value={themeContext}>
            {children}
        </CustomThemeContext.Provider>
    )
}

export default ThemeProvider

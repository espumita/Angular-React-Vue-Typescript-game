import * as React from 'react'
import {LightTheme} from "../themes/light/theme.ligth"
import {ThemeContext} from "../hooks/ThemeContext"
import useThemeState from "../hooks/useThemeState";

export const CustomThemeContext =  React.createContext<ThemeContext | null >(null)

const ThemeProvider = ({children}) => {
    const themeContext = useThemeState(new LightTheme())
    return (
        <CustomThemeContext.Provider value={themeContext}>
            {children}
        </CustomThemeContext.Provider>
    )
}

export default ThemeProvider

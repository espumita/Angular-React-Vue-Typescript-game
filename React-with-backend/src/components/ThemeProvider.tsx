import * as React from 'react'
import { Theme } from "../model/Theme";
import { ThemeType } from "../model/ThemeType";

const ThemeProvider = ({children}) => {
    const context = React.createContext<Theme | null >(null);
    const contextValue : Theme = {
        type: ThemeType.lightTheme,
        change: () => {}
    }
    return (
        <context.Provider value={contextValue}>
            {children}
        </context.Provider>
    )
}

export default ThemeProvider

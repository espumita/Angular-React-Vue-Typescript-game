import { createContext, useContext } from 'react'
import { Theme } from "../model/Theme";

const useThemeContext = () : Theme => {
    const themeContext = createContext<Theme| null>(null);
    return useContext(themeContext)
}

export default useThemeContext

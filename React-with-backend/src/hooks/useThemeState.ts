import {useState} from 'react'
import {LightTheme} from "../themes/light/theme.ligth";
import {DarkTheme} from "../themes/dark/theme.dark";
import {Theme} from "../model/Theme";
import {ThemeContext} from "./ThemeContext";

const useThemeState = (initialTheme : Theme) : ThemeContext =>  {
    const [currentTheme, setTheme] = useState(initialTheme)
    return {
        theme: currentTheme,
        changeTheme: () => changeTheme(currentTheme, setTheme)
    }
}

function changeTheme(currentTheme: Theme, setTheme: Function) {
    const newTheme = currentTheme instanceof LightTheme
        ? new DarkTheme()
        : new LightTheme()
    setTheme(newTheme)
}

export default useThemeState

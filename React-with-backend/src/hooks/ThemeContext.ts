import {Theme} from "../model/Theme"

export interface ThemeContext {
    theme: Theme
    changeTheme: Function
}
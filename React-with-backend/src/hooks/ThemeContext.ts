import {ThemeColors} from "../model/ThemeColors";

export interface ThemeContext {
    themeColors: ThemeColors;
    changeTheme: Function;
}
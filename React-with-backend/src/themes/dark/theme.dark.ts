import {Theme} from "../../model/Theme";
import {ThemeColors} from "../../model/ThemeColors";
import colors from './colors.dark'

export class DarkTheme  implements  Theme {
    colors: ThemeColors;
    constructor() {
        this.colors = colors
    }
}
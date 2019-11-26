import {Theme} from "../../model/Theme"
import {ThemeColors} from "../../model/ThemeColors"
import colors from './colors.light'

export class LightTheme  implements  Theme {
    colors: ThemeColors
    constructor() {
        this.colors = colors
    }
}
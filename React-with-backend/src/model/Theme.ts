import { ThemeType }  from "./ThemeType";

export interface Theme {
    type: ThemeType,
    change: Function
}

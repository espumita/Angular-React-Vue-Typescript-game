import {useContext} from 'react'
import {ThemeContext} from "./ThemeContext";
import {CustomThemeContext} from "../components/ThemeProvider";

const useThemeContext = () : ThemeContext => {
    return useContext(CustomThemeContext)
}

export default useThemeContext

import useThemeState from "../src/hooks/useThemeState";
import {Theme} from "../src/model/Theme";
import { renderHook, act } from "@testing-library/react-hooks";
import {LightTheme} from "../src/themes/light/theme.ligth";

describe('use theme state should', () => {

     test('be initialized with the first value', () => {
         const aTheme : Theme = new LightTheme()

         const { result } = renderHook(() => useThemeState(aTheme))

         expect(result.current.theme).toStrictEqual(new LightTheme())
     })
 })
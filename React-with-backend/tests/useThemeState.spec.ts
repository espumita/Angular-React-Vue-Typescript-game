import useThemeState from "../src/hooks/useThemeState";
import {Theme} from "../src/model/Theme";
import { renderHook, act } from "@testing-library/react-hooks";
import {LightTheme} from "../src/themes/light/theme.ligth";
import {DarkTheme} from "../src/themes/dark/theme.dark";

describe('use theme state should', () => {

     test('be initialized with the first value', () => {
         const aTheme : Theme = new LightTheme()

         const { result } = renderHook(() => useThemeState(aTheme))

         expect(result.current.theme).toStrictEqual(new LightTheme())
     })

    test('change theme when change state', () => {
        const aTheme : Theme = new LightTheme()
        const { result } = renderHook(() => useThemeState(aTheme))

        act(() =>{ result.current.changeTheme() })

        expect(result.current.theme).toStrictEqual(new DarkTheme())
    })

    test('set initial state when change two times', () => {
        const aTheme : Theme = new LightTheme()
        const { result } = renderHook(() => useThemeState(aTheme))

        act(() =>{ result.current.changeTheme() })
        act(() =>{ result.current.changeTheme() })

        expect(result.current.theme).toStrictEqual(new LightTheme())
    })
 })
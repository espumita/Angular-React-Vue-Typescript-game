import * as React from 'react'
import useThemeContext from "../hooks/useThemeContext"
import {Link, useLocation} from "react-router-dom";
import {Theme} from "../model/Theme";

function setBackgroundIfCurrentPathIs(path: string, pathname: string, theme: Theme) {
    if (path === pathname) return {backgroundColor: theme.colors.selection}
    return {}
}

const TopBar = () => {
    const { theme, changeTheme } = useThemeContext()
    const { pathname } = useLocation()
    const topBarStyle = {
        overflow: 'hidden',
        position: 'fixed',
        top: 0,
        width: '100%',
        height: '56px',
        fontSize: '24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: theme.colors.primary
    } as React.CSSProperties
    const changeThemeButtonStyle = {
        color: theme.colors.primary,
        textAlign: 'center',
        padding: '18px 16px',
        fontSize: '17px',
        backgroundColor: theme.colors.selection,
        cursor: 'pointer'
    } as React.CSSProperties

    return (
        <div style={topBarStyle}>
            <div style={{display: 'flex'}}>
                <Link to="/" style={setBackgroundIfCurrentPathIs("/", pathname, theme)}>
                    <div style={{padding: '14px' }}>🐢</div>
                </Link>
                <Link to="/infinitescroll" style={setBackgroundIfCurrentPathIs("/infinitescroll", pathname, theme)}>
                    <div style={{padding: '14px' }}>🐌</div>
                </Link>
            </div>
            <div onClick={() => changeTheme()} style={changeThemeButtonStyle}>⚡</div>
        </div>
    )
}

export default TopBar
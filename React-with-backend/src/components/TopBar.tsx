import * as React from 'react'
import useThemeContext from "../hooks/useThemeContext"

const TopBar = () => {
    const { theme, changeTheme } = useThemeContext()

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
        backgroundColor: theme.colors.secondary,
        cursor: 'pointer'
    } as React.CSSProperties

    return (
        <div style={topBarStyle}>
            <div>🐢</div>
            <div onClick={() => changeTheme()} style={changeThemeButtonStyle}>⚡</div>
        </div>
    )
}

export default TopBar
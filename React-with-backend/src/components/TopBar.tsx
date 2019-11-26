import * as React from 'react'
import useThemeContext from "../hooks/useThemeContext"

const TopBar = () => {
    const { themeColors, changeTheme } = useThemeContext()

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
        backgroundColor: themeColors.primary
    }
    const changeThemeButtonStyle = {
        color: themeColors.primary,
        textAlign: 'center',
        padding: '18px 16px',
        fontSize: '17px',
        backgroundColor: themeColors.secondary,
        cursor: 'pointer'
    }

    return (
        <div style={topBarStyle}>
            <div onClick={changeTheme} style={changeThemeButtonStyle}>
                Change Theme
            </div>
        </div>
    )
}

export default TopBar
import * as React from 'react'
import useThemeContext from "../hooks/useThemeContext"

const Footer = () => {
    const { theme } = useThemeContext()
    const footerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '350px',
        backgroundColor: theme.colors.footer
    }
    return (
        <div style={footerStyle}></div>
    )
}

export default Footer
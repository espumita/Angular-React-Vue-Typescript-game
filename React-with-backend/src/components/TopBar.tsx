import * as React from 'react'

const TopBar = () => {
    const topBarStyle = {
        overflow: 'hidden',
        position: 'fixed',
        top: 0,
        width: '100%',
        height: '56px',
        fontSize: '24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
    return (
        <div style={topBarStyle}>
            This is a topbar
        </div>
    )
}

export default TopBar
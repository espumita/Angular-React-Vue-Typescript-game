import * as React from 'react'
import Footer from "./Footer";
import TopBar from "./TopBar";
import Router from "./Router";
import useThemeContext from "../hooks/useThemeContext";

const App = () => {
    const { theme } = useThemeContext();
    return (
        <div>
            <TopBar/>
            <div style={{marginTop: '56px', backgroundColor: theme.colors.secondary}}>
                <Router/>
            </div>
            <Footer/>
        </div>
    )
}

export default App
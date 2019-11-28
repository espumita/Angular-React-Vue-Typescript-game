import * as React from 'react'
import { Switch, Route } from 'react-router-dom'
import Page0 from "./Pages/Page0";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";

const Router = () => {

    return (
        <Switch>
            <Route exact path="/"   component={() => <Page0/>}/>
            <Route path="/p1" component={() => <Page1/>}/>
            <Route path="/p2" component={() => <Page2/>}/>
        </Switch>
    )
}

export default Router
import * as React from 'react'
import { Switch, Route } from 'react-router-dom'
import InfiniteScrollExamplePage from "./Pages/InfiniteScrollExamplePage";
import Dashboard from "./Pages/Dashboard";

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" render={() => <Dashboard/>}/>
            <Route path="/infinitescroll" component={() => <InfiniteScrollExamplePage/>}/>
        </Switch>
    )
}

export default Router
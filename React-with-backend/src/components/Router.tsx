import * as React from 'react'
import { Switch, Route } from 'react-router-dom'
import InfiniteScrollExamplePage from "./Pages/InfiniteScrollExamplePage";
import WebsocketExamplePage from "./Pages/WebsocketExamplePage";
import Dashboard from "./Pages/Dashboard";

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" render={() => <Dashboard/>}/>
            <Route path="/infinitescroll" component={() => <InfiniteScrollExamplePage/>}/>
            <Route path="/websockets" component={() => <WebsocketExamplePage/>}/>
        </Switch>
    )
}

export default Router
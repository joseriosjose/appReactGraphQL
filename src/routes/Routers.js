import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"
import Home from '../views/Home/Home'
import Characters from '../views/Characters/Characters'
import NotFound from "../views/NotFound/NotFound"

export default function Routers(prop) {

    return (
        <Router>
            <Switch>
                <Route path="/" exact >
                    <Home />
                </Route>
                <Route path="/characters" exact >
                    <Characters />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    );

}
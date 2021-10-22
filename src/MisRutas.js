import React from "react";
import {Route, Switch} from 'react-router-dom'
import Store from './pages/Store'
import About from './pages/About'

export default function MisRoutes(){
    return(
        <Switch>
             <Route exact path='/' component = {Store}/>
             <Route exact path='/About' component= {About}/>
        </Switch>
    );
}
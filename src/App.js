import React from 'react';
// import {Button} from "antd";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from '../src/pages/login/Login'
import Admin from '../src/pages/admin/Admin'

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/login' component={Login}></Route>
                <Route path='/' component={Admin}></Route>
            </Switch>
        </BrowserRouter>

    );
}

export default App;

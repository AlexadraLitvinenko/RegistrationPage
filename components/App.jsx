import React from 'react'
import {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom';

import SignUp from './SignUp';
import Home from './Home';
import Profile from './Profile';
import SignIn from './SignIn';
const App = () => (
    <div className="App">
    <BrowserRouter>
        <div style={{ display: 'flex', flexDirection: 'row' }} className="nav">
                <NavLink to="/SignUp" className="a">SignUp</NavLink>
                <NavLink to="/" exact className="a">Home page</NavLink>
                <NavLink to="/SignIn" className="a">SignIn</NavLink>
        </div>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/SignUp" component={SignUp}/>}/>
            <Route path="/SignIn" component={SignIn}/>
            <Route path="/Profile" component={Profile}/>
        </Switch>
    </BrowserRouter>
    </div>
);

export default App;

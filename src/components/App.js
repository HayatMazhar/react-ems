import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import Feedback from './Feedback/Feedback';
import CreateEmployee from './Employee/CreateEmployee';

const App  = () =>{
    return (
        <div>
            <BrowserRouter>
            <div>
            <Navigation />
            </div>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/createEmployee" exact component={CreateEmployee} />
                <Route path="/about" exact component={About} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/feedback" exact component={Feedback} />
            </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App;
import React from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import Form from '../Components/Form.js';
import Home from '../Components/Home.js';
import NotFound from '../Components/NotFound.js';
import Search from '../Components/Search.js';

const Routes = () =>{
    const token = localStorage.getItem('token');
    
    
    return(

        <BrowserRouter>
            <Switch>
                <Route exact path="/" component= {Home} ></Route> 
                <Route exact path="/login" component= {Form}></Route> 
                <Route exact path="/home" component= {Home}></Route> 
                <Route exact path="/search" component= {Search}></Route> 
                <Route exact path="*" component= {NotFound}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
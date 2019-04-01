import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Home from './components/home'
const routes=()=>(
<Router>
<Route path="/" exact component={Home}/>
</Router>
);


export default routes;